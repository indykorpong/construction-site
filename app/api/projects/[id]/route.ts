import { getProject } from '@/lib/db/project'
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
