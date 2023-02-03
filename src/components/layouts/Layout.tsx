import Head from 'next/head'
import React from 'react'
import { Navbar } from '../ui'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '20px 50px' }}>{children}</main>
    </>
  )
}

export default Layout
