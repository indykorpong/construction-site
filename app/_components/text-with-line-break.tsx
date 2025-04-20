import { Box, Typography } from '@mui/material'

export const TextWithLineBreak = ({ text }: { text: string }) => {
  const textWithLineBreaks = text.split('\n').map((line, index) => (
    <Box key={index}>
      <Typography variant={'body1'}>{line}</Typography>
    </Box>
  ))
  return <Box>{textWithLineBreaks}</Box>
}
