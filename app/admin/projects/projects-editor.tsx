'use client'
import { Box, TextField, Button } from '@mui/material'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { updateProject } from '../../../lib/db/project'
import { ContentBox } from '../../_components/content-box'
import { CarouselComponent } from '../../_components/carousel'
import dynamic from 'next/dynamic'
import { ProjectData } from '@/lib/db/project'

const TextEditor = dynamic(() => import('../../_components/text-editor').then((mod) => mod.TextEditor), {
  ssr: false,
})

type ProjectEditorProps = {
  project: ProjectData
  setOpenDrawer: (v: boolean) => void
}

export const ProjectEditor: React.FC<ProjectEditorProps> = ({ project, setOpenDrawer }) => {
  const [formData, setFormData] = useState<ProjectData>(project)

  if (!project) {
    return <Box>Project not found</Box>
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleEditorChange = (value: string) => {
    setFormData((prev) => ({ ...prev, description: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const requiredAlert = []

    if (!formData.name) {
      requiredAlert.push('name')
    }

    if (requiredAlert.length > 0) {
      toast.error('Required fields: ' + requiredAlert.join(', '))
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { images, ...data } = formData

    const res = await updateProject(project.id, data)

    if (res.ok) {
      toast.success('Project updated')
      setOpenDrawer(false)
    } else {
      toast.error('Failed to update project ')
      console.error('Failed to update project', res.error)
    }
  }

  return (
    <Box mx={3} display={'flex'} justifyContent={'flex-start'} flexDirection={'column'} gap={'1rem'} component="form">
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={250} width={'100%'}>
        <ContentBox sx={{ maxWidth: '200px', maxHeight: '200px' }}>
          <CarouselComponent loop={false} className={'swiper-dark'}>
            {project.images.map((image, index) => (
              <Box
                key={`${index}-project-${project.id}`}
                component={'img'}
                src={image.url}
                alt={project.name}
                width={200}
                height={200}
                sx={{ objectFit: 'cover' }}
              />
            ))}
          </CarouselComponent>
        </ContentBox>
      </Box>

      <Box display={'flex'} justifyContent={'flex-start'} gap={'3rem'}>
        <TextField
          error={!formData.name || typeof formData.name !== 'string'}
          defaultValue={formData.name}
          id="name"
          label="Name"
          variant="outlined"
          onChange={handleChange}
          required
        />
      </Box>

      <Box mb={1}>
        <h3>Description</h3>
        <TextEditor value={formData.description} onChange={handleEditorChange} />
      </Box>

      <Box mb={2} sx={{ display: 'flex', gap: '1rem', flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button variant="contained" sx={{ width: '40%' }} type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>

        <Button variant="outlined" sx={{ width: '40%' }} color="error" onClick={() => setOpenDrawer(false)}>
          Discard
        </Button>
      </Box>
    </Box>
  )
}
