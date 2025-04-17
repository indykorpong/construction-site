import { Box } from '@mui/material'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { header } from './header'
import { AdminNavBar } from './products/admin-navbar'

export const metadata: Metadata = {
  title: 'AA-SP Co., LTD. Admin',
}

export default function AdminLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Box minHeight={'100vh'} display="flex" flexDirection="column">
        <Box
          component="header"
          bgcolor="primary.main"
          p={2}
          color="white"
          display={'flex'}
          justifyContent={'space-between'}
        >
          {header}
        </Box>

        <Box display={'flex'}>
          <Box display="flex" flexDirection={'column'} flexGrow={1} p={1}>
            <AdminNavBar />
            <Box component="main">{children}</Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
