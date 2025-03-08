export default async function ProductId({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <div>ProductId: {id}</div>
}
