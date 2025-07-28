import { Box, Link, Paper, Typography } from '@mui/material'

export const CompanyCard = ({
  logo,
  name,
  bgColor,
  url,
}: {
  logo: string
  name: string
  bgColor: string
  url: string
}) => {
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
            alt={`${name} Logo`}
            width={'auto'}
            height={'auto'}
            sx={{
              objectFit: 'contain',
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
              maxWidth: '85%',
              maxHeight: '40%',
              aspectRatio: '16/9',
            }}
          />
          <Box
            bgcolor={bgColor}
            sx={{ width: '100%', height: '100%', margin: '0 1rem 0 1rem', borderRadius: '0 0 1rem 1rem' }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', marginTop: '3rem', textAlign: 'center', color: 'white' }}
            >
              {name}
            </Typography>
          </Box>
        </Paper>
      </Link>
    </Box>
  )
}
