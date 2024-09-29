import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import FooterPage from './FooterPage'
function Layout() {
  return (
      <div>
          <Navbar />
          <Outlet />
          <FooterPage/>
    </div>
  )
}

export default Layout