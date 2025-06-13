'use client'
import { Box, TextField, Button } from '@mui/material'
import toast from 'react-hot-toast'
import { useState } from 'react'

import { ProductData } from '@/lib/db/product'
import { ImageUploadComponent } from '../../_components/file-upload-component'
import { updateProduct } from '@/lib/db/product'
import dynamic from 'next/dynamic'

const TextEditor = dynamic(() => import('../../_components/text-editor').then((mod) => mod.TextEditor), {
  ssr: false,
})

type ProductEditorProps = {
  product?: ProductData
  setOpenDrawer: (v: boolean) => void
}

export const ProductEditor: React.FC<ProductEditorProps> = ({ product, setOpenDrawer }) => {
  const defaultProduct = {
    id: -1,
    name: '',
    description: '',
    parentProductId: 0,
    images: [],
    childrenProducts: [],
  }

  const [prodData, setProdData] = useState<ProductData>(product ?? defaultProduct)

  if (!product) {
    return <Box>Product not found</Box>
  }

  const fetchData = async () => {
    const res = await fetch('/api/products/' + product.id, { method: 'GET' })
    if (!res.ok) {
      console.error('Failed to fetch product data:', res.statusText)
      toast.error('Something went wrong')
      return
    }
    const newData = await res.json()
    setProdData(newData)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setProdData((prev) => ({ ...prev, [id]: value }))
  }

  const handleEditorChange = (value: string) => {
    setProdData((prev) => ({ ...prev, description: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const requiredAlert = []

    if (!prodData.name) {
      requiredAlert.push('name')
    }

    if (requiredAlert.length > 0) {
      toast.error('Required fields: ' + requiredAlert.join(', '))
      return
    }

    try {
      await updateProduct(product.id, prodData)
      toast.success('Product updated')
      setOpenDrawer(false)
      fetchData()
    } catch (err) {
      toast.error('Submit failed')
      console.error('Failed to update product: ', err)
    }
  }

  const handleUploadImage = async (files: FileList | null) => {
    if (!files || files.length === 0) {
      toast.error('No files selected')
      return
    }

    try {
      const formDataObj = new FormData()
      formDataObj.append('productId', `${product.id}`)
      formDataObj.append('productName', prodData.name)
      Array.from(files).forEach((file) => {
        formDataObj.append('images', file)
      })

      const response = await fetch('/api/products/image', {
        method: 'POST',
        body: formDataObj,
      })

      if (!response.ok) {
        throw new Error('Failed to upload images')
      }

      fetchData()

      toast.success('Image upload successful')
    } catch (err) {
      console.error('Error uploading: ', err)
      toast.error('Upload failed')
    }
  }

  const handleDeleteImage = async (imageUrl: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this image? \nThis action cannot be undone.')
    if (!confirmDelete) {
      return
    }

    if (!imageUrl) {
      toast.error('Image URL is required')
      return
    }

    const url = new URL(imageUrl)
    const imageName = url.pathname.slice(url.pathname.indexOf('products'))

    try {
      const response = await fetch(`/api/products/image?imageUrl=${encodeURIComponent(imageName)}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete image')
      }
      fetchData()
      toast.success('Image deleted successfully')
    } catch (err) {
      console.error('Error deleting image: ', err)
      toast.error('Delete failed')
    }
  }

  return (
    <Box
      mx={3}
      fontSize={'0.75rem'}
      display={'flex'}
      justifyContent={'space-between'}
      flexDirection={'column'}
      gap={'1rem'}
      component="form"
      height={'100vh'}
    >
      <Box overflow={'auto'} marginTop={2}>
        <Box display={'flex'} justifyContent={'flex-start'} gap={'2rem'} paddingTop={2}>
          <TextField
            error={!prodData.name || typeof prodData.name !== 'string'}
            defaultValue={prodData.name}
            id="name"
            label="Name"
            variant="outlined"
            onChange={handleChange}
            required
          />

          <Box display={'flex'} flexDirection={'column'}>
            <Box>
              <TextField
                type="number"
                defaultValue={prodData.parentProductId}
                label="Parent Id"
                id="productCategoryId"
                variant="outlined"
                onChange={handleChange}
              />
            </Box>
            <Box margin={0}>
              <b style={{ color: 'red' }}>*</b> <i>for nested products</i>
            </Box>
          </Box>
        </Box>

        <Box mb={1}>
          <b>Description</b>
          <TextEditor id="description" value={prodData.description ?? ''} onChange={handleEditorChange} />
        </Box>

        <Box>
          <b>Images</b>
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            border={'1px solid #ccc'}
            overflow={'auto'}
            padding={1}
            flexWrap={'wrap'}
            maxWidth={'590px'}
          >
            {prodData.images.map((image, index) => (
              <Box
                key={index}
                border={'1px solid #ccc'}
                margin={0.5}
                padding={0.5}
                display={'flex'}
                alignItems={'center'}
                borderRadius={2}
                onClick={() => handleDeleteImage(image.url)}
              >
                <Box
                  component={'img'}
                  src={image.url}
                  alt={product.name}
                  height={100}
                  width={100}
                  sx={{ objectFit: 'cover', aspectRatio: '1/1', marginre: '0.5rem' }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box marginTop={2}>
          <ImageUploadComponent onChange={(f) => handleUploadImage(f)} />
        </Box>
      </Box>

      <Box mb={2} sx={{ display: 'flex', gap: '1rem', flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button variant="contained" sx={{ width: '40%' }} type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>

        <Button variant="outlined" sx={{ width: '40%' }} color="error" onClick={() => setOpenDrawer(false)}>
          Discard
        </Button>
      </Box>
    </Box>
  )
}
