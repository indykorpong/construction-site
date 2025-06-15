'use client'
import { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import toast from 'react-hot-toast'
import dynamic from 'next/dynamic'

import { ProjectData } from '@/lib/db/project'
import { createProject, updateProject } from '@/lib/api/project'
import { ImageUploadComponent } from '../../_components/file-upload-component'

const TextEditor = dynamic(() => import('../../_components/text-editor').then((mod) => mod.TextEditor), {
  ssr: false,
})

type ProjectEditorProps = {
  project: ProjectData
  setOpenDrawer: (v: boolean) => void
  refetchProjects: () => void
}

export const ProjectEditor: React.FC<ProjectEditorProps> = ({ project, setOpenDrawer, refetchProjects }) => {
  const [projData, setProjData] = useState<ProjectData>(project)

  if (!project) {
    return <Box>Project not found</Box>
  }

  const refreshProject = async () => {
    const res = await fetch('/api/projects/' + project.id, { method: 'GET' })
    if (!res.ok) {
      console.error('Failed to fetch product data:', res.statusText)
      toast.error('Something went wrong')
      return
    }
    const newData = await res.json()
    setProjData(newData)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setProjData((prev) => ({ ...prev, [id]: value }))
  }

  const handleEditorChange = (value: string) => {
    setProjData((prev) => ({ ...prev, description: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const requiredAlert = []

    if (!projData.name) {
      requiredAlert.push('name')
    }

    if (requiredAlert.length > 0) {
      toast.error('Required fields: ' + requiredAlert.join(', '))
      return
    }

    try {
      if (projData.id === -1) {
        await createProject(projData)
        toast.success('Project created')
      } else {
        await updateProject(project.id, projData)
        toast.success('Project updated')
      }

      refetchProjects()
      setOpenDrawer(false)
    } catch (error) {
      toast.error('Submit failed')
      console.error('Failed to update product: ', error)
    }
  }

  const handleUploadImage = async (files: FileList | null) => {
    if (!files || files.length === 0) {
      toast.error('No files selected')
      return
    }

    try {
      const formDataObj = new FormData()
      formDataObj.append('projectId', `${project.id}`)
      formDataObj.append('projectName', projData.name)
      Array.from(files).forEach((file) => {
        formDataObj.append('images', file)
      })

      const response = await fetch('/api/projects/image', {
        method: 'POST',
        body: formDataObj,
      })

      if (!response.ok) {
        throw new Error('Failed to upload images')
      }

      refreshProject()
      toast.success('Image upload successful')
    } catch (err) {
      console.error('Error uploading: ', err)
      toast.error('Upload failed')
    }
  }

  const handleDeleteImage = async (imageId: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this image? \nThis action cannot be undone.')
    if (!confirmDelete) {
      return
    }

    if (!imageId) {
      toast.error('Image URL not found')
      return
    }

    try {
      const response = await fetch(`/api/projects/image?id=${encodeURIComponent(imageId)}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete image')
      }
      refreshProject()
      toast.success('Image deleted successfully')
    } catch (err) {
      console.error('Error deleting image: ', err)
      toast.error('Delete failed')
    }
  }

  return (
    <Box
      mx={3}
      fontSize={'0.75rem'}
      display={'flex'}
      justifyContent={'space-between'}
      flexDirection={'column'}
      gap={'1rem'}
      component="form"
      height={'100vh'}
    >
      <Box overflow={'auto'} marginTop={2}>
        <Box display={'flex'} justifyContent={'flex-start'} gap={'3rem'} paddingTop={2}>
          <TextField
            error={!projData.name || typeof projData.name !== 'string'}
            defaultValue={projData.name}
            id="name"
            label="Name"
            variant="outlined"
            onChange={handleChange}
            required
          />
        </Box>

        <Box mb={1}>
          <h3>Description</h3>
          <TextEditor value={projData.description} onChange={handleEditorChange} />
        </Box>

        <Box>
          <b>Images</b>
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            border={'1px solid #ccc'}
            overflow={'auto'}
            padding={1}
            flexWrap={'wrap'}
            maxWidth={'590px'}
          >
            {projData.images.map((image, index) => (
              <Box
                key={index}
                border={'1px solid #ccc'}
                margin={0.5}
                padding={0.5}
                display={'flex'}
                alignItems={'center'}
                borderRadius={2}
                onClick={() => handleDeleteImage(image.id)}
              >
                <Box
                  component={'img'}
                  src={image.url}
                  alt={project.name}
                  height={100}
                  width={100}
                  sx={{ objectFit: 'cover', aspectRatio: '1/1', marginre: '0.5rem' }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box marginTop={2}>
          <ImageUploadComponent onChange={(f) => handleUploadImage(f)} />
        </Box>
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
