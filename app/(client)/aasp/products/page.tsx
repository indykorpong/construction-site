'use client'
import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import { useQuery } from '@tanstack/react-query'
import DataGrid from '@/app/_components/data-grid'
import { getProducts } from '@/lib/api/product'
import { Skeleton } from '@mui/material'

export default function ProductsPage() {
  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  })
  if (isLoadingProducts) {
    return (
      <ContentBox>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </ContentBox>
    )
  }
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
