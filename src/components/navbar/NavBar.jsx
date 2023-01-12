import React from "react";
import { FaHome } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineBell } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { BsMoonFill } from "react-icons/bs";
import CardProfile from '../cardProfile/CardProfile';
import "./NavBar.css"
function NavBar() {
  return (
    <div className="container-nav">
      <div className="container-left">
        <span className="logo-navBar">lamasocial</span>
        <FaHome className="iconNav" />
        <BsMoonFill className="iconNav" />
        <CgMenuGridO className="iconNav" />
        <div className="container-search">
          <BsSearch className="icon-search" />
          <input type="text" className="input-search" placeholder="Buscar..." />
        </div>
      </div>
      <div className="container-right">
        <BiUser className="iconNavBar" />
        <HiOutlineMail className="iconNavBar" />
        <AiOutlineBell className="iconNavBar" />
        <CardProfile srcImage="1" name="Jhon Doe"/>
      </div>
    </div>
  );
}

export default NavBar;
