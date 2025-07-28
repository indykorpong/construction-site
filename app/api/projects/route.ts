import { createProject, getProjects, updateProject } from '@/lib/db/project'
import { NextRequest, NextResponse } from 'next/server'
import { getSiteIdFromRequest } from '@/lib/utils/site'
import { getSession } from '@/lib/login/session'

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const searchParams = request.nextUrl.searchParams
    const limit = searchParams.get('limit')

    // Try to get siteId from query params first, then from request headers
    let siteId = searchParams.get('siteId') ? Number(searchParams.get('siteId')) : undefined

    if (!siteId) {
      siteId = getSiteIdFromRequest(request) ?? (await getSession())?.siteId
    }

    const projects = await getProjects({ limit: limit ? parseInt(limit) : undefined, siteId })
    return NextResponse.json(projects)
  } catch (error) {
    console.error('Failed to fetch projects', error)
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data = await request.json()

    // Automatically set siteId from request if not provided
    if (!data.siteId) {
      const siteId = getSiteIdFromRequest(request) ?? (await getSession())?.siteId
      if (siteId) {
        data.siteId = siteId
      }
    }

    const project = await createProject(data)
    return NextResponse.json(project)
  } catch (error) {
    console.error('Failed to create or update project', error)
    return NextResponse.json({ error: 'Failed to create or update project' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const { id, data } = await request.json()

    // Automatically set siteId from request if not provided
    if (!data.siteId) {
      const siteId = getSiteIdFromRequest(request) ?? (await getSession())?.siteId
      if (siteId) {
        data.siteId = siteId
      }
    }

    const project = await updateProject(id, data)
    return NextResponse.json(project)
  } catch (error) {
    console.error('Failed to update project', error)
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
  }
}
