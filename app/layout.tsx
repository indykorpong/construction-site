'use client'
import { Noto_Sans_Thai } from 'next/font/google'
import { ReactNode } from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const notoSansThai = Noto_Sans_Thai({
  subsets: ['latin', 'thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const queryClient = new QueryClient()

  return (
    <html lang="en" className={notoSansThai.className}>
      <body style={{ fontSize: '1.125rem', lineHeight: '2rem', margin: '0px' }}>
        <AppRouterCacheProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
            <Toaster />
          </QueryClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
