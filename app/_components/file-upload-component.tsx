import { Box, IconButton, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useMemo, useState } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'

type ImageUploadComponent = {
  handleUpload: (files: FileWithPath[]) => void
}

export const ImageUploadComponent: React.FC<ImageUploadComponent> = () => {
  const [files, setFiles] = useState<FileWithPath[]>([])

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, isDragActive } = useDropzone({
    accept: { 'image/png': ['.png'], 'image/jpg': ['.jpg'], 'image/jpeg': ['.jpeg'] },
    onDrop: (acceptedFiles) => {
      setFiles((prev) => [...prev, ...acceptedFiles])
    },
  })

  const handleDeletePendingFile = (index: number) => {
    const newFiles = [...files]
    newFiles.splice(index, 1)
    setFiles(newFiles)
  }

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  )

  const uploadFileList = files.map((file, index) => (
    <Box key={file.path} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      <Typography fontSize={12}>
        {file.path?.slice(2)} - {file.size} bytes
      </Typography>
      <IconButton onClick={() => handleDeletePendingFile(index)} color="warning">
        <DeleteOutlineIcon />
      </IconButton>
    </Box>
  ))

  return (
    <Box className="container">
      <Box {...getRootProps({ style })}>
        <input {...getInputProps({ multiple: true })} />
        {!isDragActive && <p>Drag drop some files here, or click to select files</p>}
        {isDragAccept && <p>Acceptable file type</p>}
        {isDragReject && <p>Unsupported file type</p>}
      </Box>
      {uploadFileList.length > 0 && (
        <Box bgcolor={'aliceblue'} marginY={'1rem'} padding={'10px'} borderRadius={2}>
          {uploadFileList}
        </Box>
      )}
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
