'use client'
import { Box, TextField, Button, Select, SelectChangeEvent, MenuItem, InputLabel, FormControl } from '@mui/material'
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
  products: ProductData[]
  product: ProductData
  setOpenDrawer: (v: boolean) => void
  refetchProducts: () => void
}

export const ProductEditor: React.FC<ProductEditorProps> = ({ products, product, setOpenDrawer, refetchProducts }) => {
  const [prodData, setProdData] = useState<ProductData>(product)

  if (!product) {
    return <Box>Product not found</Box>
  }

  const refreshProduct = async (productId: number) => {
    const res = await fetch(`/api/products/${productId}`, { method: 'GET' })
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

  const handleDeleteProduct = async () => {
    const id = prodData.id
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this product? \nThis action cannot be undone.',
    )

    if (!confirmDelete) {
      return
    }

    if (!id) {
      toast.error('Product ID not found')
      return
    }

    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' })
      if (!res.ok) {
        throw new Error('Failed to delete product')
      }

      console.log('Product deleted successfully', res)
      setOpenDrawer(false)
      refetchProducts()
      toast.success('Product deleted successfully')
    } catch (err) {
      console.error('Error deleting product: ', err)
      toast.error('Product delete failed')
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

      const data = await response.json()
      const images = data.images

      setProdData((prev) => ({
        ...prev,
        images: [...prev.images, ...images],
      }))

      if (prodData.id !== -1) {
        refreshProduct(prodData.id)
      }

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

  const handleParentProductChange = (event: SelectChangeEvent<number | undefined>) => {
    if (event.target.value === undefined) {
      setProdData((prev) => ({ ...prev, parentProductId: null }))
    } else {
      setProdData((prev) => ({ ...prev, parentProductId: Number(event.target.value) ?? null }))
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
          <FormControl sx={{ width: '100%' }}>
            <TextField
              error={!prodData.name || typeof prodData.name !== 'string'}
              defaultValue={prodData.name}
              id="name"
              label="Name"
              variant="outlined"
              onChange={handleChange}
              required
            />
          </FormControl>
        </Box>

        <Box mb={2}>
          <b>Description</b>
          <TextEditor id="description" value={prodData.description ?? ''} onChange={handleEditorChange} />
        </Box>

        <Box
          mb={2}
          display={'flex'}
          flexDirection={'row'}
          gap={1}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <FormControl sx={{ width: '100%' }}>
            <InputLabel>Parent Product</InputLabel>
            <Select
              value={prodData.parentProductId ?? ''}
              onChange={handleParentProductChange}
              label="Parent Product"
              sx={{ width: '100%' }}
            >
              <MenuItem value={undefined}>None</MenuItem>
              {products
                .filter((p) => p.id !== prodData.id)
                .map((product) => (
                  <MenuItem key={product.id} value={product.id}>
                    {product.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
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
                onClick={() => handleDeleteImage(image.id)}
              >
                <Box
                  component={'img'}
                  src={image.minioUrl}
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

        <Button
          variant="contained"
          sx={{ width: '40%' }}
          color="error"
          onClick={() => handleDeleteProduct()}
          disabled={prodData.id === -1}
        >
          Delete
        </Button>
      </Box>
    </Box>
  )
}
