import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import { getProjects } from '@/lib/project'
import DataGrid from '@/app/_components/data-grid'

export default async function ProjectsPage() {
  const projects = await getProjects()
  const projectsData = projects.map((project) => ({
    id: project.id,
    name: project.name,
    imageUrl: project.images?.[0]?.url,
    link: `/projects/${project.id}`,
  }))
  return (
    <ContentBox>
      <Title>Projects</Title>
      <DataGrid data={projectsData} />
    </ContentBox>
  )
}
