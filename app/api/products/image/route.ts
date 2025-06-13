import { NextRequest, NextResponse } from 'next/server'
import { deleteProductImage, uploadProductImage } from '../../../../lib/db/product'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const formData = await req.formData()
    const files = formData.getAll('images') as File[]
    console.log('Received files:', files)

    if (!files) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const productId = parseInt(formData.get('productId') as string)
    const productName = formData.get('productName') as string

    await uploadProductImage(productId, productName, files)

    return NextResponse.json({ message: 'Image uploaded successfully' }, { status: 200 })
  } catch (error) {
    console.error('Failed to upload image', error)
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(req.url)
    const imageUrl = decodeURIComponent(searchParams.get('imageUrl') ?? '')

    if (!imageUrl) {
      return NextResponse.json({ error: 'Image URL is required' }, { status: 400 })
    }

    await deleteProductImage(imageUrl)

    return NextResponse.json({ message: 'Image deleted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Failed to delete image', error)
    return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 })
  }
}
