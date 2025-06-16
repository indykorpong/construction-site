'use client'
import { Box, TextField, Button } from '@mui/material'
import toast from 'react-hot-toast'
import { useState } from 'react'
import dynamic from 'next/dynamic'

import { ProductData } from '@/lib/db/product'
import { createProduct, updateProduct } from '@/lib/api/product'
import { ImageUploadComponent } from '../../_components/file-upload-component'

const TextEditor = dynamic(() => import('../../_components/text-editor').then((mod) => mod.TextEditor), {
  ssr: false,
})

type ProductEditorProps = {
  product: ProductData
  setOpenDrawer: (v: boolean) => void
  refetchProducts: () => void
}

export const ProductEditor: React.FC<ProductEditorProps> = ({ product, setOpenDrawer, refetchProducts }) => {
  const [prodData, setProdData] = useState<ProductData>(product)

  if (!product) {
    return <Box>Product not found</Box>
  }

  const refreshProduct = async (productId: number) => {
    const res = await fetch('/api/products/' + productId, { method: 'GET' })
    if (!res.ok) {
      console.error('Failed to fetch product data:', res.statusText)
      toast.error('Something went wrong')
      return
    }
    const newData = await res.json()
    setProdData(newData)
    refetchProducts()
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
      let productId = prodData.id
      if (prodData.id === -1) {
        const newProduct = await createProduct(prodData)
        productId = newProduct.id
        setProdData(newProduct)
        toast.success('Product created')
      } else {
        await updateProduct(productId, prodData)
        toast.success('Product updated')
      }

      setOpenDrawer(false)
      refetchProducts()
    } catch (error) {
      toast.error('Submit failed')
      console.error('Failed to update product: ', error)
    }
  }

  const handleUploadImage = async (files: FileList | null) => {
    if (!files || files.length === 0) {
      toast.error('No files selected')
      return
    }

    try {
      const formDataObj = new FormData()
      formDataObj.append('productId', `${prodData.id}`)
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

      refreshProduct(prodData.id)

      toast.success('Image upload successful')
    } catch (err) {
      console.error('Error uploading: ', err)
      toast.error('Upload failed')
    }
  }

  const handleDeleteImage = async (imageId: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this image? \nThis action cannot be undone.')
    if (!confirmDelete) {
      return
    }

    if (!imageId) {
      toast.error('Image ID not found')
      return
    }

    try {
      const response = await fetch(`/api/products/image?id=${encodeURIComponent(imageId)}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete image')
      }
      refreshProduct(prodData.id)
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
        </Box>

        <Box mb={1}>
          <b>Description</b>
          <TextEditor id="description" value={prodData.description ?? ''} onChange={handleEditorChange} />
        </Box>

        {product.id !== -1 && (
          <>
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
                    onClick={() => handleDeleteImage(image.id)}
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
          </>
        )}
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
