import { Grid, Skeleton } from '@mui/material'
import { CardComponent } from '@/app/_components/card'
import Link from 'next/link'

type Data = {
  id: number
  name: string
  imageUrl: string
  link: string
}

export default function DataGrid<T extends Data>({ data, isLoading }: { data: T[] | undefined; isLoading: boolean }) {
  return (
    <Grid container spacing={4} columns={24} width="100%">
      {isLoading ? (
        <Grid size={{ desktop: 6, tablet: 12, mobile: 24 }}>
          <Skeleton variant="rectangular" width="100%" height="100%" />
        </Grid>
      ) : (
        data?.map((item, index) => (
          <Grid key={index} size={{ desktop: 6, tablet: 12, mobile: 24 }}>
            <Link href={item.link} style={{ width: 'fit-content' }}>
              <CardComponent title={item.name} imageUrl={item.imageUrl} />
            </Link>
          </Grid>
        ))
      )}
    </Grid>
  )
}
