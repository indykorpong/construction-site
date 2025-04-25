import { Box, TextField, Button } from '@mui/material'
import Image from 'next/image'

import { TextEditor } from '../../_components/text-editor'
import { ProductWithImages } from './page'

interface ProductEditorProps {
  product?: ProductWithImages
  setOpenDrawer: (v: boolean) => void
}

// ! Add submit logic

export const ProductEditor: React.FC<ProductEditorProps> = ({ product, setOpenDrawer }) => {
  return (
    <Box mx={3} display={'flex'} justifyContent={'flex-start'} flexDirection={'column'} gap={'1rem'} component="form">
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={250} width={'100%'}>
        <Image src={'/file.svg'} alt={'Image'} height={200} width={200} />
      </Box>

      <Box display={'flex'} justifyContent={'flex-start'} gap={'3rem'}>
        <TextField defaultValue={product?.name} id="product-name" label="Name" variant="outlined" required />
        <TextField defaultValue={product?.productCategoryId} id="category-id" label="category Id" variant="outlined" />
      </Box>

      <Box mb={1}>
        <h3>Description</h3>
        <TextEditor initialValue={product?.description} />
      </Box>

      <Box mb={2} sx={{ display: 'flex', gap: '1rem', flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button variant="contained" sx={{ width: '40%' }} type="submit">
          Submit
        </Button>

        <Button variant="outlined" sx={{ width: '40%' }} color="error" onClick={() => setOpenDrawer(false)}>
          Discard
        </Button>
      </Box>
    </Box>
  )
}
