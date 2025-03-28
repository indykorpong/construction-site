'use client'
import { FC } from 'react'

import { CardComponent } from '../../_components/card'
import { ProjectProps } from '../../types/components'

import './styles.css'
import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import Link from 'next/link'

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

      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <Link href={'/projects/' + project.id} style={{ width: 'fit-content' }}>
              <CardComponent title={project.name} description={project.description} />
            </Link>
          </div>
        ))}
      </div>
    </ContentBox>
  )
}

export default ProjectsPage
