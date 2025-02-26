'use client'
import { FC } from 'react'

import { CardComponent } from '../../components/card'
import { ProjectProps } from '../../types/components'

import './styles.css'
import { useRouter } from 'next/navigation'

const projects: ProjectProps[] = [
  { id: 1, name: 'Project One', description: 'Description for project one' },
  { id: 2, name: 'Project Two', description: 'Description for project two' },
  { id: 3, name: 'Project Three', description: 'Description for project three' },
  { id: 4, name: 'Project four', description: 'Description for project four' },
]

const ProjectsPage: FC = () => {
  const router = useRouter()

  return (
    <div style={{ padding: '20px' }}>
      <h1 className="header">Our Projects</h1>
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
    </div>
  )
}

export default ProjectsPage
