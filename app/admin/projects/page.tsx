import { Project, Image } from '@prisma/client'
import { getProjects } from '../../../lib/project'
import { ProjectTable } from './projects'

export type ProjectWithImage = Project & { images: Image[] }

export default async function Products() {
  const projects: ProjectWithImage[] = await getProjects()

  return <ProjectTable projects={projects} />
}
