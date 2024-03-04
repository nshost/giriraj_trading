import React from 'react'
import Menubar from './Menubar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Menubar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout