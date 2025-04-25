'use client'
import { Tabs, Tab } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'

export const AdminNavBar: FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  if (pathname === '/login') {
    return
  }

  return (
    <>
      <Tabs value={pathname} sx={{ marginLeft: 2 }}>
        <Tab label="Home" value={'/admin'} onClick={() => router.push('/admin')} />
        <Tab label="Products" value={'/admin/products'} onClick={() => router.push('/admin/products')} />
        <Tab label="Projects" value={'/admin/projects'} onClick={() => router.push('/admin/projects')} />
      </Tabs>
    </>
  )
}
