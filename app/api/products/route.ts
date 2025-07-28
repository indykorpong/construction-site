import { createProduct, getProducts, updateProduct } from '@/lib/db/product'
import { NextRequest, NextResponse } from 'next/server'
import { getSiteIdFromRequest } from '@/lib/utils/site'
import { getSession } from '@/lib/login/session'

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const searchParams = request.nextUrl.searchParams
    const includeChildren = searchParams.get('includeChildren') === 'true'

    // Try to get siteId from query params first, then from request headers
    let siteId = searchParams.get('siteId') ? Number(searchParams.get('siteId')) : undefined

    if (!siteId) {
      siteId = getSiteIdFromRequest(request) ?? (await getSession())?.siteId
    }

    const products = await getProducts({ includeChildren, siteId })
    return NextResponse.json(products)
  } catch (error) {
    console.error('Failed to fetch products', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { data } = await request.json()

    if (!data) {
      return NextResponse.json(
        { error: `Failed to create product. Data is empty: ${JSON.stringify(data)}` },
        { status: 400 },
      )
    }

    // Automatically set siteId from request if not provided
    if (!data.siteId) {
      const siteId = getSiteIdFromRequest(request) ?? (await getSession())?.siteId
      if (siteId) {
        data.siteId = siteId
      }
    }

    const product = await createProduct(data)
    return NextResponse.json(product)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: `Failed to create product. Error: ${error}` }, { status: 500 })
  }
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const { id, data } = await request.json()

    if (!id || !data) {
      return NextResponse.json({ error: 'Failed to update product' }, { status: 400 })
    }

    // Automatically set siteId from request if not provided
    if (!data.siteId) {
      const siteId = getSiteIdFromRequest(request) ?? (await getSession())?.siteId
      if (siteId) {
        data.siteId = siteId
      }
    }

    const product = await updateProduct(id, data)
    return NextResponse.json(product)
  } catch (error) {
    console.error('Failed to update product', error)
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 })
  }
}
