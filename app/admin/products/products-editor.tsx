'use client'
import { Box, TextField, Button } from '@mui/material'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { FileWithPath } from 'react-dropzone'
import FileUploadIcon from '@mui/icons-material/FileUpload'

import { ProductWithImages } from './page'
import { CarouselComponent } from '../../_components/carousel'
import { ContentBox } from '../../_components/content-box'
import { ImageUploadComponent } from '../../_components/file-upload-component'
import { updateProduct, uploadProductImage } from '../../../lib/db/product'
import dynamic from 'next/dynamic'

const TextEditor = dynamic(() => import('../../_components/text-editor').then((mod) => mod.TextEditor), {
  ssr: false,
})

type ProductEditorProps = {
  product?: ProductWithImages
  setOpenDrawer: (v: boolean) => void
}

export const ProductEditor: React.FC<ProductEditorProps> = ({ product, setOpenDrawer }) => {
  const defaultProduct = {
    id: 0,
    name: '',
    description: '',
    parentProductId: 0,
    images: [],
    childrenProducts: [],
  }

  const [formData, setFormData] = useState<ProductWithImages>(product ?? defaultProduct)
  const [imageFiles, setImageFiles] = useState<FileWithPath[]>([])

  if (!product) {
    return <div>Product not found...</div>
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleEditorChange = (value: string) => {
    setFormData((prev) => ({ ...prev, description: value }))
  }

  const handleImageState = async (newFile: File[]) => {
    setImageFiles((prev) => [...prev, ...newFile])
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const requiredAlert = []

    if (!formData.name) {
      requiredAlert.push('name')
    }

    if (requiredAlert.length > 0) {
      toast.error('Required fields: ' + requiredAlert.join(', '))
      return
    }

    const res = await updateProduct(product.id, formData)

    if (res.ok) {
      toast.success('Product updated')
      setOpenDrawer(false)
    } else {
      toast.error('Failed to update product ')
      console.error(res.error)
    }
  }

  const handleImageUpload = async () => {
    if (imageFiles.length === 0) {
      toast.error('No files to upload')
      return
    }

    const res = await uploadProductImage(formData.name, imageFiles)

    if (res.ok) {
      if (res.error) {
        toast.error(res.error)
      } else {
        toast.success('All images uploaded successfully')
      }

      setImageFiles([])
    } else {
      toast.error('Failed to upload images' + res.error)
    }
  }

  return (
    <Box
      mx={3}
      fontSize={'0.75rem'}
      display={'flex'}
      justifyContent={'flex-start'}
      flexDirection={'column'}
      gap={'1rem'}
      component="form"
      maxHeight={'100vh'}
    >
      <Box overflow={'auto'}>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={250} width={'100%'}>
          <ContentBox sx={{ maxWidth: '200px', maxHeight: '200px' }}>
            <CarouselComponent loop={false} className={'swiper-dark'}>
              {product.images.map((image, index) => (
                <Box
                  key={`${index}-product-${product.id}`}
                  component={'img'}
                  src={image.url}
                  alt={product.name}
                  width={150}
                  height={150}
                  sx={{ objectFit: 'cover' }}
                />
              ))}
            </CarouselComponent>
          </ContentBox>
        </Box>

        <Box display={'flex'} justifyContent={'flex-start'} gap={'2rem'}>
          <TextField
            error={!formData.name || typeof formData.name !== 'string'}
            defaultValue={formData.name}
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
                defaultValue={formData.parentProductId}
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
          <TextEditor id="description" value={formData.description ?? ''} onChange={handleEditorChange} />
        </Box>

        <Box>
          <b>Upload Images</b>
          <ImageUploadComponent handleUpload={handleImageState} />
          <Button
            variant="contained"
            color="primary"
            startIcon={<FileUploadIcon />}
            onClick={handleImageUpload}
            sx={{ mt: 1 }}
          >
            Upload
          </Button>
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
