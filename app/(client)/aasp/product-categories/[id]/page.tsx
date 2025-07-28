'use client'
import { ContentBox } from '@/app/_components/content-box'
import DataGrid from '@/app/_components/data-grid'
import { Title } from '@/app/_components/title'
import { getProduct } from '@/lib/api/product'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '@mui/material'

export default function ProductCategoryId() {
  const { id } = useParams<{ id: string }>()
  const { data: product, isLoading: isLoadingProduct } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(parseInt(id, 10)),
  })

  if (isLoadingProduct) {
    return (
      <ContentBox>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </ContentBox>
    )
  }

  const productsData = product?.childrenProducts.map((product) => ({
    id: product.id,
    name: product.name,
    imageUrl: product.images?.[0]?.url,
    link: '/aasp/products/' + product.id,
  }))

  return (
    <ContentBox>
      <Title>{product?.name ?? 'Product not found'}</Title>
      <DataGrid data={productsData} isLoading={isLoadingProduct} />
    </ContentBox>
  )
}
