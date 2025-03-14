'use client'
import { FC } from 'react'

import { CardComponent } from '../../_components/card'
import { ProjectProps } from '../../types/components'

import './styles.css'
import { useRouter } from 'next/navigation'
import { ContentBox } from '../../_components/content-box'
import { MainHeader } from '../../_components/main-header'

const projects: ProjectProps[] = [
  { id: 1, name: 'Project One', description: 'Description for project one' },
  { id: 2, name: 'Project Two', description: 'Description for project two' },
  { id: 3, name: 'Project Three', description: 'Description for project three' },
  { id: 4, name: 'Project four', description: 'Description for project four' },
]

const ProjectsPage: FC = () => {
  const router = useRouter()

  return (
    <ContentBox>
      <MainHeader>Our Projects</MainHeader>

      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <div
              style={{ width: 'fit-content' }}
              onClick={() => {
                router.push('/projects/' + project.id)
              }}
            >
              <CardComponent title={project.name} description={project.description} />
            </div>
          </div>
        ))}
      </div>
    </ContentBox>
  )
}

export default ProjectsPage
