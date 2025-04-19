import { Box } from '@mui/material'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'AA-SP Co., LTD. Admin',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Box minHeight={'600px'}>{children}</Box>
    </>
  )
}
