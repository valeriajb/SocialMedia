import React from "react";
import NavBar from "../components/navbar/NavBar";
import { Outlet } from "react-router-dom";
import { dataProfile } from "../hooks/DataCards";
import LeftBar from "../components/leftBar/LeftBar";
import Layout from "../views/Layout/Layout";
import './Home.css'
import { Routes, Route } from "react-router-dom";
function Home() {
  return (
    <>
      <NavBar />
      <div className="container-home">
        <div className="container-left-home">
          <LeftBar
            isBar={true}
            listCard={dataProfile.filter((i) => i.id <= 5)}
          />
          <LeftBar
            title="Your ShortCuts"
            isBar={true}
            listCard={dataProfile.filter((i) => 5 < i.id && i.id <= 10)}
          />
          <LeftBar
            title="Others"
            isBar={true}
            listCard={dataProfile.filter((i) => 10 < i.id && i.id <= 13)}
          />
        </div>
        <Layout />
         <div className="container-left-home">
          <LeftBar
            follow={true}
            isBar={false}
            listCard={dataProfile.filter((i) => i.id <= 2)}
            profile={false}
            isFollow={false}
            title="Suggests For You"
          />
          <LeftBar
            title="Latest Activities"
            isBar={false}
            listCard={dataProfile.filter((i) => 5 < i.id && i.id <= 10)}
          />
          <LeftBar
            title="Online Friends"
            isBar={false}
            listCard={dataProfile.filter((i) => 10 < i.id && i.id <= 13)}
            isOnline={true}
            profile={false}
            isFollow={false}
          />
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Home;
