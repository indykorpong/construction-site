import { Box, Typography } from '@mui/material'
import AaspLogo from '@/public/logo/aasp.png'
import YdpiLogo from '@/public/logo/ydpi.jpg'
import EpsLogo from '@/public/logo/epands.jpg'
import Background from '@/public/background/background.jpg'
import { CompanyCard } from '@/app/_components/company-card'

export default function PortalHome() {
  return (
    <>
      <Box
        width={'100%'}
        height={'45vh'}
        sx={{
          position: 'relative',
          backgroundImage: `url(${Background.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h1" color="lightGreen.main" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          EP&S Group Co., Ltd.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          height: '40vh',
          position: 'relative',
          zIndex: 1,
          marginTop: '-6rem',
        }}
      >
        <CompanyCard logo={AaspLogo.src} name="AASP Company" bgColor="blue.main" url="/aasp/home" />
        <CompanyCard logo={YdpiLogo.src} name="YDPI Company" bgColor="orange.main" url="/ydpi/home" />
        <CompanyCard logo={EpsLogo.src} name="EP&S Company" bgColor="green.main" url="/epands/home" />
      </Box>
    </>
  )
}
