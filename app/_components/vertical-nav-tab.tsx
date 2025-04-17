'use client'
import { Tab, Tabs } from '@mui/material'
import { FC, SyntheticEvent, useState } from 'react'

interface VerticalTabsProps {
  tabs: string[]
}

export const VerticalNavTabs: FC<VerticalTabsProps> = ({ tabs }) => {
  const [tabIndex, setTabIndex] = useState(0)

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={tabIndex}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{ borderRight: 1, borderColor: 'divider' }}
    >
      {tabs.map((t, index) => (
        <Tab label={t} key={`vertical-tab-${index}`} {...tabProps(index)}></Tab>
      ))}
    </Tabs>
  )
}

const tabProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}
