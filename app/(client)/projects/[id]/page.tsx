'use client'
import Image from 'next/image'
import { CardComponent } from '../../../_components/card'
import { useEffect, useState } from 'react'
import { CardProps, ProjectProps } from '../../../types/components'
import { ContentBox } from '@/app/_components/content-box'
import { Title } from '@/app/_components/title'
import { Box } from '@mui/material'
import { useParams } from 'next/navigation'
import { getProject } from '@/lib/projects'

export default function Project() {
  const params = useParams()
  const id = params?.id

  useEffect(() => {
    if (!id) return
    const fetchProject = async () => {
      const project = await getProject(Number(id))
      setProject(project)
      setListProducts(
        project?.products.map((product) => ({
          title: product.name,
          description: product.description,
          imageUrl: product.images[0].url,
        })) ?? [],
      )
    }
    fetchProject()
  }, [id])

  const [project, setProject] = useState<ProjectProps | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listProducts, setListProducts] = useState<CardProps[]>([])

  // TODO: Add a useEffect to fetch the list of products from the server

  return (
    project && (
      <ContentBox>
        <Title>{project?.name}</Title>
        <ProjectInfo />

        <Title>Product in project</Title>
        <Box
          display={'flex'}
          width={'100%'}
          flexWrap={'wrap'}
          justifyContent={'start'}
          alignItems={'center'}
          marginBottom={'2rem'}
        >
          {listProducts &&
            listProducts.map((product, index) => (
              <Box
                key={index}
                display={'flex'}
                maxWidth={'25%'}
                marginRight={'1rem'}
                alignItems={'center'}
                justifyContent={'start'}
              >
                <CardComponent title={product.title} description={product.description} imageUrl={product.imageUrl} />
              </Box>
            ))}
        </Box>
      </ContentBox>
    )
  )
}

const ProjectInfo = () => {
  const imageDim = 500

  return (
    <div className="flex items-center justify-start">
      <div className="mr-4 flex w-2/5 items-center justify-center rounded-md">
        <Image src={'/Head_Office.jpg'} alt={'Head office'} width={imageDim} height={imageDim} />
      </div>

      <div className="w-2/5 indent-10">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  )
}
