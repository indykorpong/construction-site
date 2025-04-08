'use client'
import { FC } from 'react'

import { CardComponent } from '../../_components/card'
import { ProjectProps } from '../../types/components'
import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import Link from 'next/link'
import { Box } from '@mui/material'

const projects: ProjectProps[] = [
  { id: 1, name: 'Project One', description: 'Description for project one' },
  { id: 2, name: 'Project Two', description: 'Description for project two' },
  { id: 3, name: 'Project Three', description: 'Description for project three' },
  { id: 4, name: 'Project four', description: 'Description for project four' },
]

const ProjectsPage: FC = () => {
  return (
    <ContentBox>
      <Title>Our Projects</Title>

      <Box display={'grid'} gridTemplateColumns={'50% 50%'} gridTemplateRows={'auto'} rowGap={2} marginBlock={2}>
        {projects.map((project) => (
          <Box key={project.id} display={'flex'} justifyContent={'center'}>
            <Link href={'/projects/' + project.id} style={{ width: 'fit-content' }}>
              <CardComponent title={project.name} description={project.description} />
            </Link>
          </Box>
        ))}
      </Box>
    </ContentBox>
  )
}

export default ProjectsPage
