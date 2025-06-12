'use client'
import { Box, TextField, Button } from '@mui/material'
import toast from 'react-hot-toast'
import { useState } from 'react'

import { ProductData } from '@/lib/db/product'
import { CarouselComponent } from '../../_components/carousel'
import { ContentBox } from '../../_components/content-box'
import { ImageUploadComponent } from '../../_components/file-upload-component'
import { updateProduct, uploadProductImage } from '../../../lib/db/product'
import dynamic from 'next/dynamic'
import { FileWithPath } from 'react-dropzone'
import { ImageUploadComponent } from '../../_components/file-upload-component'

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

  const [formData, setFormData] = useState<ProductData>(product ?? defaultProduct)
  const [imageFiles, setImageFiles] = useState<FileWithPath[]>([])

  if (!product) {
    return <Box>Product not found</Box>
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleEditorChange = (value: string) => {
    setFormData((prev) => ({ ...prev, description: value }))
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

    try {
      await updateProduct(product.id, formData)
      toast.success('Product updated')
      setOpenDrawer(false)
    } catch (err) {
      toast.error('Submit failed')
      console.error('Failed to update product: ', err)
    }
  }

  const handleUpload = async (files: FileWithPath[]) => {
    try {
      await uploadProductImage(formData.id, formData.name, files)
      toast.success('Image upload successful')
    } catch (err) {
      console.error('Error uploading: ', err)
      toast.error('Upload failed')
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
          <ImageUploadComponent onDrop={(f) => handleUpload(f)} />
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
