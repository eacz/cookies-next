import { ChangeEvent, useState } from 'react'
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

import Layout from '../components/layouts/Layout'

const ThemeChangerPage = () => {
  const [currentTheme, setCurrentTheme] = useState('light')

  const onThemeChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(ev.target.value)
  }

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Theme</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel value='light' control={<Radio />} label='Light' />
              <FormControlLabel value='dark' control={<Radio />} label='Dark' />
              <FormControlLabel value='custom' control={<Radio />} label='Custom' />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  )
}

export default ThemeChangerPage
