import { Box } from '@mui/material'
import { useMemo } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'

type ImageUploadComponentProp = {
  onDrop: (file: FileWithPath[]) => void
}

export const ImageUploadComponent: React.FC<ImageUploadComponentProp> = ({ onDrop }) => {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, isDragActive } = useDropzone({
    accept: { 'image/png': ['.png'], 'image/jpg': ['.jpg'], 'image/jpeg': ['.jpeg'] },
    onDrop: (acceptedFiles) => onDrop(acceptedFiles),
  })

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  )

  return (
    <Box className="container">
      <Box {...getRootProps({ style })}>
        <input {...getInputProps({ multiple: true })} />
        {!isDragActive && <p>Drag drop some files here, or click to select files</p>}
        {isDragAccept && <p>Acceptable file type</p>}
        {isDragReject && <p>Unsupported file type</p>}
      </Box>
    </Box>
  )
}

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
}

const focusedStyle = {
  borderColor: '#2196f3',
}

const acceptStyle = {
  borderColor: '#00e676',
}

const rejectStyle = {
  borderColor: '#ff1744',
}
