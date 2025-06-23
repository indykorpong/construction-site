'use client'
import { getProjects } from '@/lib/api/project'
import { ProjectTable } from './projects'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/lib/api/product'

export default function ProjectsPage() {
  const {
    data: projects,
    isLoading: isLoadingProjects,
    refetch: refetchProjects,
  } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjects(),
  })

  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  })

  return (
    <ProjectTable
      projects={projects || []}
      products={products || []}
      isLoading={isLoadingProjects || isLoadingProducts}
      refetchProjects={refetchProjects}
    />
  )
}
