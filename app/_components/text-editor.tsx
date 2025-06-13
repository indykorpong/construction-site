'use client'
import { Box, SxProps } from '@mui/material'
import { Editor } from '@tinymce/tinymce-react'

type TextEditor = {
  id?: string
  value?: string
  sx?: SxProps
  onChange: (v: string) => void
}

const EditorConfig = {
  apiKey: process.env.NEXT_PUBLIC_TINYMCE_API_KEY,
  init: {
    height: 200,
    menubar: false,
    plugins: ['anchor', 'autolink', 'charmap', 'image', 'link', 'lists', 'media', 'searchreplace', 'table'],
    toolbar: [
      'undo | formatselect | fontsize | bold italic backcolor | removeformat',
      'lineheight alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
    ],
  },
}

export const TextEditor: React.FC<TextEditor> = ({ id, value, sx, onChange }) => {
  return (
    <Box sx={{ ...sx }}>
      <Editor
        id={id}
        value={value}
        onEditorChange={(v) => {
          onChange(v)
        }}
        {...EditorConfig}
      />
    </Box>
  )
}
