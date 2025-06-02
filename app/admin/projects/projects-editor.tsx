import { Box, TextField, Button } from '@mui/material'

import { TextEditor } from '../../_components/text-editor'
import { ProjectWithImage } from './page'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { updateProject } from '../../../lib/project'

type ProjectEditorProps = {
  project: ProjectWithImage
  setOpenDrawer: (v: boolean) => void
}

export const ProjectEditor: React.FC<ProjectEditorProps> = ({ project, setOpenDrawer }) => {
  const [formData, setFormData] = useState<ProjectWithImage>(project)

  if (!project) {
    return <div>project not found</div>
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
        <Box
          component={'img'}
          src={project.images[0]?.url}
          alt={project.name}
          width={200}
          height={200}
          sx={{ objectFit: 'cover' }}
        />
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
