import { getProjects, updateProject } from '@/lib/db/project'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const searchParams = request.nextUrl.searchParams
    const limit = searchParams.get('limit')
    const projects = await getProjects({ limit: limit ? parseInt(limit) : undefined })
    return NextResponse.json(projects)
  } catch (error) {
    console.error('Failed to fetch projects', error)
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const { id, data } = await request.json()
    const project = await updateProject(id, data)
    return NextResponse.json(project)
  } catch (error) {
    console.error('Failed to update project', error)
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
  }
}
