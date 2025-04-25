import { ContentBox } from '@/app/_components/content-box'
import DataGrid from '@/app/_components/data-grid'
import { Title } from '@/app/_components/title'
import { getProductCategory } from '@/lib/product'

export default async function ProductCategoryId({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const productCategory = await getProductCategory(parseInt(id, 10))
  if (!productCategory) {
    return <div>ProductCategoryId</div>
  }

  const productsData = productCategory.products.map((product) => ({
    id: product.id,
    name: product.name,
    imageUrl: product.images[0].url,
    link: '/products/' + product.id,
  }))

  return (
    <ContentBox>
      <Title>{productCategory.name}</Title>
      <DataGrid data={productsData} />
    </ContentBox>
  )
}
