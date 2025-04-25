import { Box, Button, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'

import { logout } from '../actions/auth'

export const header = (
  <>
    <Typography component={'h3'}>Dashboard</Typography>

    <Box>
      <Button variant="contained" color="error" startIcon={<LogoutIcon />} onClick={logout}>
        logout
      </Button>
    </Box>
  </>
)
