'use client'
import { ContentBox } from '@/app/_components/content-box'
import DataGrid from '@/app/_components/data-grid'
import { Title } from '@/app/_components/title'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/lib/api/product'

export default function ProductCategoriesPage() {
  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  })
  const productsData = products?.map((product) => {
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
      <DataGrid data={productsData} isLoading={isLoadingProducts} />
    </ContentBox>
  )
}
