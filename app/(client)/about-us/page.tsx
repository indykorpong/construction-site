import { Box, Typography } from '@mui/material'
import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import { CompanyInfo } from '@/app/_components/company-info'

export default function AboutUs() {
  return (
    <>
      <ContentBox>
        <CompanyInfo />
      </ContentBox>
      <ContentBox bgcolor="background.default">
        <AboutUsOurGoal />
      </ContentBox>
    </>
  )
}

const AboutUsOurGoal = () => {
  return (
    <>
      <Title>เป้าหมายของเรา</Title>

      <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
        <Box maxWidth={'45%'} bgcolor={'white'} borderRadius={4} padding={4} height={'100%'}>
          <Typography variant={'h5'} gutterBottom textAlign={'center'}>
            Vision
          </Typography>

          <Typography variant={'body1'} gutterBottom sx={{ textIndent: 40 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </Typography>
        </Box>

        <Box maxWidth={'45%'} bgcolor={'white'} borderRadius={4} padding={4} height={'100%'}>
          <Typography variant={'h5'} gutterBottom textAlign={'center'}>
            Mission
          </Typography>

          <Typography variant={'body1'} gutterBottom sx={{ textIndent: 40 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </Typography>
        </Box>
      </Box>
    </>
  )
}
