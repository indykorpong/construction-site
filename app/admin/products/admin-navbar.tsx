'use client'
import { Tabs, Tab } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'

export const AdminNavBar: FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <>
      <Tabs value={pathname} sx={{ marginLeft: 2 }}>
        <Tab label="Home" value={'/admin'} onClick={() => router.replace('/admin')} />
        <Tab label="Products" value={'/admin/products'} onClick={() => router.replace('/admin/products')} />
        <Tab label="Projects" value={'/admin/projects'} onClick={() => router.replace('/admin/projects')} />
      </Tabs>
    </>
  )
}
