import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer, ScrollTop } from '../components/index'


const RootLayout = () => {
  return (
    <>
      <ScrollTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout
