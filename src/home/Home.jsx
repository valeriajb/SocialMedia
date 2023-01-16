import React from 'react'
import NavBar from '../components/navbar/NavBar';
import { Outlet } from "react-router-dom";
import {dataProfile} from '../hooks/DataCards';
import LeftBar from '../components/leftBar/LeftBar';
import Layout from '../views/Layout/Layout';

function Home() {
  return (
    <>
      {/* <NavBar />
      <LeftBar isBar={true} listCard={dataProfile.filter((i)=>i.id<=5)}/>
      <LeftBar title="Your ShortCuts" isBar={true} listCard={dataProfile.filter((i)=>5<i.id && i.id<=10)}/>
      <LeftBar title="Others" isBar={true} listCard={dataProfile.filter((i)=>10<i.id && i.id<=13)}/>

      <Outlet/> */}
      <Layout/>
    
    </>
  )
}

export default Home