'use client'

import { Button } from '@mui/material'

import { Title } from '../_components/title'
import { logout } from '../actions/auth'

export default function Admin() {
  return (
    <div>
      <Title>Admin</Title>
      <Button variant="contained" onClick={logout}>
        logout
      </Button>
    </div>
  )
}
