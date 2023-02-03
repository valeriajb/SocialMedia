import React from "react";
import { FaHome } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineBell } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { BsMoonFill,BsFillSunFill } from "react-icons/bs";
import CardProfile from '../cardProfile/CardProfile';
import { useContext } from "react";
import {ContextDark} from "../../context/contextDark"
import {UserContext} from '../../context/contextUser'
import "./NavBar.css"
import "../../DarkMode.css"
function NavBar() {
  const {  currentMode, changeCurrentMode}=useContext(ContextDark);
  const {currentUser, changeUser} =useContext(UserContext)
  return (
    <div className={"container-nav " + ( currentMode && "dark" )}>
      <div className="container-left">
        <span className={"logo-navBar " + (currentMode && "dark" )}>lamasocial</span>
        <FaHome className={"iconNav " + (currentMode && "dark" )} />
        {!currentMode ? <BsMoonFill onClick={changeCurrentMode} className={"iconNav "+ (currentMode && "dark" )}/>:<BsFillSunFill onClick={changeCurrentMode} className="iconNavSun"/>}
        <CgMenuGridO className={"iconNav "+ (currentMode && "dark" )} />
        <div className="container-search">
          <BsSearch className={"icon-search "+(currentMode && "dark" )} />
          <input type="text" className={"input-search "+ (currentMode && "dark" )} placeholder="Buscar..." />
        </div>
      </div>
      <div className="container-right">
        <BiUser className={"iconNavBar "+ (currentMode && "dark" ) }/>
        <HiOutlineMail className={"iconNavBar "+ (currentMode && "dark" )} />
        <AiOutlineBell className={"iconNavBar "+ (currentMode && "dark" )} />
        <CardProfile />
      </div>
    </div>
  );
}

export default NavBar;
