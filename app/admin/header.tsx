import { Button } from '@mui/material'

import { logout } from '../actions/auth'
import { Title } from '../_components/title'

export const header = (
  <>
    <Title>Dashboard</Title>
    <Button variant="contained" color="secondary" onClick={logout}>
      logout
    </Button>
  </>
)
