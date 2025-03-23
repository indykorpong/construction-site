import { Noto_Sans_Thai } from 'next/font/google'
import { ReactNode } from 'react'

const notoSansThai = Noto_Sans_Thai({
  subsets: ['latin', 'thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={notoSansThai.className}>
      <body style={{ fontSize: '1.125rem', lineHeight: '2rem' }}>{children}</body>
    </html>
  )
}
