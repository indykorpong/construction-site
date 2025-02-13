import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Root',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <header className="h-12 bg-blue-400">Header</header>
      <div className="h-14">Navbar</div>
      {children}
      <footer>Footer</footer>
    </>
  )
}
