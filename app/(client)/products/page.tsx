import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import { getProducts } from '@/lib/product'
import DataGrid from '@/app/_components/data-grid'

export default async function ProductsPage() {
  const products = await getProducts()
  const productsData = products.map((product) => ({
    id: product.id,
    name: product.name,
    imageUrl: product.images[0].url,
    link: '/products/' + product.id,
  }))
  return (
    <ContentBox>
      <Title>Products</Title>
      <DataGrid data={productsData} />
    </ContentBox>
  )
}
