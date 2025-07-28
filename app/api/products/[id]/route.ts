import { deleteProduct, getProduct } from '@/lib/db/product'
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

    const product = await getProduct(parseInt(id, 10), siteId)
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
