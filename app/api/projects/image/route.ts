import { NextRequest, NextResponse } from 'next/server'
import { deleteProjectImage, uploadProjectImage } from '@/lib/db/project'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const formData = await req.formData()
    const files = formData.getAll('images') as File[]
    console.log('Received files:', files)

    if (!files) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const projectId = parseInt(formData.get('projectId') as string)
    const projectName = formData.get('projectName') as string

    await uploadProjectImage(projectId, projectName, files)

    return NextResponse.json({ message: 'Image uploaded successfully' }, { status: 200 })
  } catch (error) {
    console.error('Failed to upload image', error)
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(req.url)
    const imageId = parseInt(decodeURIComponent(searchParams.get('id') ?? ''))

    if (!imageId) {
      return NextResponse.json({ error: 'Image URL is required' }, { status: 400 })
    }

    await deleteProjectImage(imageId)

    return NextResponse.json({ message: 'Image deleted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Failed to delete image', error)
    return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 })
  }
}
