import { deleteProject, getProject } from '@/lib/db/project'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id

  try {
    const project = await getProject(parseInt(id, 10))
    return NextResponse.json(project)
  } catch (error) {
    console.error('Failed to fetch project', error)
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 })
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id

  if (!id) {
    return NextResponse.json({ error: 'Project ID is required' }, { status: 400 })
  }

  try {
    const projectId = parseInt(id, 10)
    const res = await deleteProject(projectId)
    console.log('Project deleted successfully:', res)
    return NextResponse.json({ message: 'Project deleted successfully' })
  } catch (error) {
    console.error('Failed to delete project', error)
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
  }
}
