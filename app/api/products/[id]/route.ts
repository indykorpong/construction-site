import { deleteProduct, getProduct } from '@/lib/db/product'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id

  try {
    const product = await getProduct(parseInt(id, 10))
    return NextResponse.json(product)
  } catch (error) {
    console.error('Failed to fetch product', error)
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = (await params).id

    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 })
    }

    await deleteProduct(parseInt(id, 10))
    return NextResponse.json({ message: 'Product deleted successfully' })
  } catch (error) {
    console.error('Failed to delete product', error)
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 })
  }
}
