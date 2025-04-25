import { Box, SxProps } from '@mui/material'
import { Editor } from '@tinymce/tinymce-react'

interface TextEditorProps {
  initialValue?: string
  sx?: SxProps
}

const EditorConfig = {
  apiKey: 'zml2n5kzmgdzdl4su2x2lya5lv1loxbby2uy7gw6c1bcul2c',
  init: {
    height: 200,
    menubar: false,
    plugins: ['anchor', 'autolink', 'charmap', 'image', 'link', 'lists', 'media', 'searchreplace', 'table'],
    toolbar:
      'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat ',
  },
}

export const TextEditor: React.FC<TextEditorProps> = ({ initialValue, sx }) => {
  return (
    <Box sx={{ ...sx }}>
      <Editor initialValue={initialValue} {...EditorConfig} />
    </Box>
  )
}
