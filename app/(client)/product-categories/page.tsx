import { ContentBox } from '@/app/_components/content-box'
import DataGrid from '@/app/_components/data-grid'
import { Title } from '@/app/_components/title'
import { getProductCategories } from '@/lib/product'

export default async function ProductCategoriesPage() {
  const productCategories = await getProductCategories()
  const productCategoriesData = productCategories.map((productCategory) => {
    const productsInCategory = productCategory.products.length
    const link =
      productsInCategory > 1
        ? '/product-categories/' + productCategory.id
        : productsInCategory > 0
          ? '/products/' + productCategory.products[0].id
          : '/products'
    return {
      id: productCategory.id,
      name: productCategory.name,
      imageUrl: productCategory.products[0].images[0].url,
      link: link,
    }
  })
  return (
    <ContentBox>
      <Title>Products</Title>
      <DataGrid data={productCategoriesData} />
    </ContentBox>
  )
}
