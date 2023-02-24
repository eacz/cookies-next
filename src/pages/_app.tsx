import { useState, useEffect } from 'react'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import { darkTheme, lightTheme, customTheme } from '../themes'
import Cookies from 'js-cookie'

//interface Props extends AppProps {
//  theme: string
//}

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setcurrentTheme] = useState(lightTheme)
  //Using theme on cookies directly will trigger an error
  //Because Server cannot access to the cookie on build, producing a mismatch on content generated
  //Example: Server generating a light theme page and client a dark theme one
  //This is resolved triggering an useEffect that read and set the client theme's cookie after the first render

  useEffect(() => {
    let selectedTheme: Theme
    const theme = Cookies.get('theme') || 'light'
    console.log({ theme })

    switch (theme) {
      case 'light':
        selectedTheme = lightTheme
        break
      case 'dark':
        selectedTheme = darkTheme
        break
      case 'custom':
        selectedTheme = customTheme
        break
      default:
        selectedTheme = lightTheme
    }
    setcurrentTheme(selectedTheme)
  }, [])

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

//Using this on __app.tsx will force Next.js to generate all pages on demand, instead of using static pages when possible
//App.getInitialProps = async (ctx: AppContext) => {
//  const { theme } = ctx.ctx.req ? (ctx.ctx.req as any).cookies : { theme: 'light' }
//  const validThemes = ['light', 'dark', 'custom']
//  return {
//    theme: validThemes.includes(theme) ? theme : 'light',
//  }
//}
