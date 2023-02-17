import { ChangeEvent, useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Cookies from 'js-cookie'
import Layout from '../components/layouts/Layout'

interface Props {
  theme: 'light' | 'dark' | 'custom'
}

const ThemeChangerPage = ({ theme }: Props) => {
  const [currentTheme, setCurrentTheme] = useState<typeof theme>(theme)

  const onThemeChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = ev.target.value as typeof theme
    setCurrentTheme(selectedTheme)
    Cookies.set('theme', selectedTheme)
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = 'light' } = req.cookies
  return {
    props: {
      theme,
    },
  }
}

export default ThemeChangerPage
