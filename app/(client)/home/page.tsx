import { Box, Button, Link, Paper, Typography } from '@mui/material'
import AaspLogo from '@/public/logo/aasp.png'
import YdpiLogo from '@/public/logo/aasp.png'
import EpsLogo from '@/public/logo/aasp.png'

const CompanyCard = ({ logo, name, bgColor, url }: { logo: string; name: string; bgColor: string; url: string }) => {
  return (
    <Box sx={{ width: '18%', height: '80%' }}>
      <Link href={url} style={{ textDecoration: 'none' }}>
        <Paper
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '1rem',
            paddingTop: '1rem',
            borderRadius: '1rem',
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="AASP Logo"
            height={'auto'}
            width={'85%'}
            sx={{ objectFit: 'contain', marginTop: '0.5rem' }}
          />
          <Box
            bgcolor={bgColor}
            sx={{ width: '100%', height: '100%', margin: '0 1rem 0 1rem', borderRadius: '0 0 1rem 1rem' }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: '3rem', textAlign: 'center' }}>
              {name}
            </Typography>
          </Box>
        </Paper>
      </Link>
    </Box>
  )
}

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
          height: '55vh',
          position: 'relative',
          zIndex: 1,
          marginTop: '-6rem',
        }}
      >
        <CompanyCard logo={AaspLogo.src} name="AASP Company" bgColor="blue.main" url="/aasp/home" />
        <CompanyCard logo={YdpiLogo.src} name="YDPI Company" bgColor="yellow.main" url="/ydpi/home" />
        <CompanyCard logo={EpsLogo.src} name="EP&S Company" bgColor="green.main" url="/eps/home" />
      </Box>
    </>
  )
}
