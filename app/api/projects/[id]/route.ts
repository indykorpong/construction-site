import { deleteProject, getProject } from '@/lib/db/project'
import { NextRequest, NextResponse } from 'next/server'
import { getSiteIdFromRequest } from '@/lib/utils/site'
import { getSession } from '@/lib/login/session'

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id

  try {
    // Get siteId from request headers
    const siteId = getSiteIdFromRequest(request) ?? (await getSession())?.siteId

    if (!siteId) {
      return NextResponse.json({ error: 'Site not found in request' }, { status: 400 })
    }

    const project = await getProject(parseInt(id, 10), siteId)
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
