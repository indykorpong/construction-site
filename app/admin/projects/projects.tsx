'use client'
import {
  Drawer,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Button,
} from '@mui/material'
import { FC, Fragment, useState } from 'react'
import { ProjectEditor } from './projects-editor'
import { ProjectData } from '@/lib/db/project'
import { ProductData } from '@/lib/db/product'

type ProjectTableProps = {
  projects: ProjectData[]
  products: ProductData[]
  isLoading: boolean
  refetchProjects: () => void
}

export const ProjectTable: FC<ProjectTableProps> = ({ projects, products, isLoading, refetchProjects }) => {
  const defaultProject: ProjectData = {
    id: -1,
    name: '',
    description: '',
    siteId: null,
    images: [],
    projectProducts: [],
  }

  const [openDrawer, setOpenDrawer] = useState(false)
  const [selected, setSelected] = useState<ProjectData>(defaultProject)

  const handleCreateProduct = () => {
    setSelected(defaultProject)
    setOpenDrawer(true)
  }

  const handleEdit = (project: ProjectData) => () => {
    setSelected(project)
    setOpenDrawer(true)
  }

  const handleSubmit = () => {
    setOpenDrawer(false)
  }

  if (isLoading) {
    return (
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <>
      <Drawer
        open={openDrawer}
        onSubmit={handleSubmit}
        anchor={'right'}
        onClose={() => setOpenDrawer(false)}
        slotProps={{ paper: { sx: { width: '30%', maxWidth: '700px', minWidth: '550px' } } }}
      >
        <ProjectEditor
          project={selected}
          products={products}
          setOpenDrawer={setOpenDrawer}
          refetchProjects={refetchProjects}
        />
      </Drawer>

      <Box marginBottom={'8px'}>
        <Button variant="contained" onClick={handleCreateProduct}>
          Create
        </Button>
      </Box>

      <Box>
        <TableContainer sx={{ maxHeight: 'calc(100vh - 10rem)' }}>
          <Table sx={{ maxWidth: '100%' }} stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="center">Image</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {projects.map((project, index) => (
                <Fragment key={`${index}-product-${project.id}`}>
                  <TableRow onClick={handleEdit(project)} hover sx={{ cursor: 'pointer' }}>
                    <TableCell align="center">{project.id}</TableCell>
                    <TableCell align="left" width={'200px'}>
                      {project.name}
                    </TableCell>
                    <TableCell>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: project.description,
                        }}
                        style={{
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 3,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          lineClamp: 3,
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Box
                        key={`${index}-project-${project.id}`}
                        component={'img'}
                        src={project.images[0]?.url}
                        alt={project.name}
                        width={100}
                        height={100}
                        marginRight={1}
                        sx={{ objectFit: 'cover' }}
                      />
                    </TableCell>
                  </TableRow>
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}
