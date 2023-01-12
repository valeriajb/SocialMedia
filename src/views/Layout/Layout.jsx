import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import { Outlet } from "react-router-dom";
import LeftBar from '../../components/leftBar/LeftBar';
function Layout() {
  return (
    <>
      <NavBar />
      <LeftBar isBar={true}/>
    
    </>
  )
}

export default Layout