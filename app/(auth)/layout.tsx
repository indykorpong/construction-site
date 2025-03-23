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

export default function LoginLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" style={{ height: '100%' }} className={notoSansThai.className}>
      <body
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
        }}
      >
        {children}
      </body>
    </html>
  )
}
