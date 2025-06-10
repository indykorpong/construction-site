import { getProducts, updateProduct } from '@/lib/db/product'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const searchParams = request.nextUrl.searchParams
    const includeChildren = searchParams.get('includeChildren') === 'true'

    const products = await getProducts({ includeChildren })
    return NextResponse.json(products)
  } catch (error) {
    console.error('Failed to fetch products', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const { id, data } = await request.json()
    const product = await updateProduct(id, data)
    return NextResponse.json(product)
  } catch (error) {
    console.error('Failed to update product', error)
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 })
  }
}
