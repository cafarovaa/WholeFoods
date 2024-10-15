import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Companents/Header/Header'
import Footer from '../Companents/Footer/Footer'

function Layout() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout