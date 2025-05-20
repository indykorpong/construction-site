import { Box, TextField, Button } from '@mui/material'
import toast from 'react-hot-toast'
import { useState } from 'react'

import { TextEditor } from '../../_components/text-editor'
import { ProductWithImages } from './page'
import { updateProduct } from '../../../lib/product'

type ProductEditorProps = {
  product: ProductWithImages
  setOpenDrawer: (v: boolean) => void
}

export const ProductEditor: React.FC<ProductEditorProps> = ({ product, setOpenDrawer }) => {
  const [formData, setFormData] = useState<ProductWithImages>(product)

  if (!product) {
    return <div>Product not found</div>
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { images, ...data } = formData

    const res = await updateProduct(product.id, data)

    if (res.ok) {
      toast.success('Product updated')
      setOpenDrawer(false)
    } else {
      toast.error('Failed to update product ')
    }
  }

  return (
    <Box mx={3} display={'flex'} justifyContent={'flex-start'} flexDirection={'column'} gap={'1rem'} component="form">
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={250} width={'100%'}>
        <Box
          component={'img'}
          src={product.images[0]?.url}
          alt={product.name}
          width={200}
          height={200}
          sx={{ objectFit: 'cover' }}
        />
      </Box>

      <Box display={'flex'} justifyContent={'flex-start'} gap={'3rem'}>
        <TextField
          error={!formData.name || typeof formData.name !== 'string'}
          defaultValue={formData.name}
          id="name"
          label="Name"
          variant="outlined"
          onChange={handleChange}
          required
        />
        <TextField
          type="number"
          defaultValue={formData.parentProductId}
          label="category Id"
          id="productCategoryId"
          variant="outlined"
          onChange={handleChange}
        />
      </Box>

      <Box mb={1}>
        <label>Description</label>
        <TextEditor id="description" value={formData.description ?? ''} onChange={handleEditorChange} />
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
