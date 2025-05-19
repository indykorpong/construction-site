import { ContentBox } from '@/app/_components/content-box'
import DataGrid from '@/app/_components/data-grid'
import { Title } from '@/app/_components/title'
import { getProducts } from '@/lib/product'

export default async function ProductCategoriesPage() {
  const products = await getProducts()
  const productsData = products.map((product) => {
    const childrenProductsLength = product.childrenProducts.length
    const link = childrenProductsLength > 0 ? '/product-categories/' + product.id : '/products/' + product.id
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images?.[0]?.url,
      link: link,
    }
  })
  return (
    <ContentBox>
      <Title>Products</Title>
      <DataGrid data={productsData} />
    </ContentBox>
  )
}
