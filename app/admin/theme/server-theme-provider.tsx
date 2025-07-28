import { cookies } from 'next/headers'
import { DynamicThemeProvider } from './dynamic-theme'

interface ServerThemeProviderProps {
  children: React.ReactNode
}

export async function ServerThemeProvider({ children }: ServerThemeProviderProps) {
  const cookieStore = await cookies()
  const siteId = cookieStore.get('siteId')?.value || '1'
  
  return <DynamicThemeProvider initialSiteId={parseInt(siteId)}>{children}</DynamicThemeProvider>
} 