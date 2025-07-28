import { Sites } from '@/app/common/enums/sites'

// Map site names to their database IDs
export const SITE_ID_MAP: Record<Sites, number> = {
  [Sites.AASP]: 1,
  [Sites.YDPI]: 2,
  [Sites.EPS]: 3,
}

/**
 * Extract site from URL path and return the corresponding site ID
 * @param url - The URL to extract site from
 * @returns The site ID or undefined if no site is found
 */
export function getSiteIdFromUrl(url: string): number | undefined {
  const path = new URL(url).pathname

  // Extract site from path segments
  const pathSegments = path.split('/').filter(Boolean)

  if (pathSegments.length === 0) {
    return undefined
  }

  const siteSegment = pathSegments[0].toLowerCase()

  // Map site segment to site enum
  let site: Sites | undefined

  switch (siteSegment) {
    case 'aasp':
      site = Sites.AASP
      break
    case 'ydpi':
      site = Sites.YDPI
      break
    case 'eps':
      site = Sites.EPS
      break
    default:
      return undefined
  }

  return SITE_ID_MAP[site]
}

/**
 * Get site ID from NextRequest (for API routes)
 * @param request - NextRequest object
 * @returns The site ID or undefined if no site is found
 */
export function getSiteIdFromRequest(request: Request): number | undefined {
  const referer = request.headers.get('referer')
  if (!referer) {
    return undefined
  }

  return getSiteIdFromUrl(referer)
}
