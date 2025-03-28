import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'AA-SP Co., LTD. Admin',
}

export default function LoginLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
      }}
    >
      {children}
    </div>
  )
}
