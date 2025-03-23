import { Box } from '@mui/material'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Noto_Sans_Thai } from 'next/font/google'

export const metadata: Metadata = {
  title: 'AA-SP Co., LTD. Admin',
}

const notoSansThai = Noto_Sans_Thai({
  subsets: ['latin', 'thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={notoSansThai.className}>
      <body style={{ fontFamily: 'Noto Sans Thai', fontSize: '1.125rem', lineHeight: '2rem' }}>
        <Box minHeight={'600px'}>{children}</Box>
      </body>
    </html>
  )
}
