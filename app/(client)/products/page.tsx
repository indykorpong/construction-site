'use client'
import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import { useQuery } from '@tanstack/react-query'
import DataGrid from '@/app/_components/data-grid'
import { getProducts } from '@/lib/api/product'

export default function ProductsPage() {
  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  })
  const productsData = products?.map((product) => ({
    id: product.id,
    name: product.name,
    imageUrl: product.images?.[0]?.url,
    link: '/products/' + product.id,
  }))
  return (
    <ContentBox>
      <Title>Products</Title>
      <DataGrid data={productsData} isLoading={isLoadingProducts} />
    </ContentBox>
  )
}
