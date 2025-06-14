import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

type ImageUploadComponentProps = {
  onChange: (files: FileList | null) => void
}
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

export const ImageUploadComponent: React.FC<ImageUploadComponentProps> = ({ onChange }) => {
  return (
    <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
      Upload files
      <VisuallyHiddenInput type="file" onChange={(e) => onChange(e.target.files)} multiple />
    </Button>
  )
}
