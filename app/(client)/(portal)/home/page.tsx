import { Box, Typography } from '@mui/material'
import AaspLogo from '@/public/logo/aasp.png'
import YdpiLogo from '@/public/logo/ydpi.jpg'
import EpsLogo from '@/public/logo/eps.jpg'
import { CompanyCard } from '@/app/_components/company-card'

export default function PortalHome() {
  return (
    <>
      <Box
        bgcolor={'lightGreen.main'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '45vh',
        }}
      >
        <Typography variant="h1" color="lightGreen.dark" sx={{ textAlign: 'center' }}>
          EP&S Group Co., Ltd.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          height: '40vh',
          position: 'relative',
          zIndex: 1,
          marginTop: '-6rem',
        }}
      >
        <CompanyCard logo={AaspLogo.src} name="AASP Company" bgColor="blue.main" url="/aasp/home" />
        <CompanyCard logo={YdpiLogo.src} name="YDPI Company" bgColor="orange.main" url="/ydpi/home" />
        <CompanyCard logo={EpsLogo.src} name="EP&S Company" bgColor="green.main" url="/eps/home" />
      </Box>
    </>
  )
}
