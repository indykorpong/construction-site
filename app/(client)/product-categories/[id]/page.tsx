import { ContentBox } from '@/app/_components/content-box'
import DataGrid from '@/app/_components/data-grid'
import { Title } from '@/app/_components/title'
import { getProduct } from '@/lib/db/product'

export default async function ProductCategoryId({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProduct(parseInt(id, 10))
  if (!product) {
    return <div>Product not found</div>
  }

  const productsData = product.childrenProducts.map((product) => ({
    id: product.id,
    name: product.name,
    imageUrl: product.images?.[0]?.url,
    link: '/products/' + product.id,
  }))

  return (
    <ContentBox>
      <Title>{product.name}</Title>
      <DataGrid data={productsData} />
    </ContentBox>
  )
}
