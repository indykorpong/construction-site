import { Box } from '@mui/material'

export default async function ProductId({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <Box>ProductId: {id}</Box>
}
