import { Noto_Sans_Thai } from 'next/font/google'
import { ReactNode } from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { Toaster } from 'react-hot-toast'

const notoSansThai = Noto_Sans_Thai({
  subsets: ['latin', 'thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={notoSansThai.className}>
      <body style={{ fontSize: '1.125rem', lineHeight: '2rem', margin: '0px', overflow: 'hidden' }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
          <Toaster />
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
