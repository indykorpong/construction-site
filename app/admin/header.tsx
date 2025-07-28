'use client'
import { Box, Button, Tab, Tabs } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'

import { usePathname, useRouter } from 'next/navigation'
import { logout } from '../actions/auth'

export const AdminHeader: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  if (pathname === '/login') {
    return
  }

  return (
    <>
      <Tabs value={pathname} sx={{ marginLeft: 2 }} textColor="primary" indicatorColor="primary">
        <Tab label="Home" value={'/admin'} onClick={() => router.push('/admin')} />
        <Tab label="Products" value={'/admin/products'} onClick={() => router.push('/admin/products')} />
        <Tab label="Projects" value={'/admin/projects'} onClick={() => router.push('/admin/projects')} />
      </Tabs>

      <Box>
        <Button variant="contained" color="error" startIcon={<LogoutIcon />} onClick={logout}>
          logout
        </Button>
      </Box>
    </>
  )
}
