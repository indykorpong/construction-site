import { Box } from '@mui/material'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { AdminHeader } from './header'
import { ServerThemeProvider } from './theme/server-theme-provider'

export const metadata: Metadata = {
  title: 'EP&S Group Co., LTD. Admin',
}

export default function AdminLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ServerThemeProvider>
      <Box minHeight={'100vh'} display="flex" flexDirection="column">
        <Box
          component="header"
          bgcolor="background.default"
          color="white"
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          p={2}
          height={'3rem'}
        >
          <AdminHeader />
        </Box>

        <Box display={'flex'}>
          <Box display="flex" flexDirection={'column'} flexGrow={1} p={1}>
            <Box component="main">{children}</Box>
          </Box>
        </Box>
      </Box>
    </ServerThemeProvider>
  )
}
