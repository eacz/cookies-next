import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'
import NextLink from 'next/link'
const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        <IconButton size='large' edge='start'>
          <MenuOutlined />
        </IconButton>

        <NextLink href='/' passHref>
          <Typography variant='h6' color='white'>
            CookieMaster
          </Typography>
        </NextLink>

        <div style={{ flex: 1 }}></div>
        <NextLink href='/theme-changer' passHref>
          <Typography variant='h6' color='white'>
            Change Theme
          </Typography>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
