import React, { useContext } from "react";
import Button from "../../components/button/Button";
import PostComponent from "../../components/postComponent/PostComponent";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import { BiMessageDetail } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import "./Profile.css";
import "../../DarkMode.css"
import CardUser from "../../components/CardUser";
import {ContextDark} from "../../context/contextDark"
import {UserContext} from "../../context/contextUser"
function Profile() {
  const{currentMode}=useContext(ContextDark)
  const {currentUser}=useContext(UserContext)
  return (
    <div className={"containerProfile " +(currentMode && "dark") }>
      <img
        className="imagePortada"
        src="https://images.pexels.com/photos/461960/pexels-photo-461960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ></img>
      <img
        className="image"
        src={currentUser.src}
      ></img>
      <div className={"infoUser "+(currentMode && "dark")}>
        <div className="photoUser">
          <h2 className={"nameUser "+(currentMode && "dark")}>{currentUser.name}</h2>
        </div>
        <div className="socialmedias">
          <div className="socialMedia">
            <FaFacebookF className={"iconsocialMedia "+(currentMode && "dark") }/>
            <AiOutlineInstagram className={"iconsocialMedia "+(currentMode && "dark") } />
            <BsTwitter className={"iconsocialMedia "+(currentMode && "dark") } />
            <AiFillLinkedin className={"iconsocialMedia "+(currentMode && "dark") }/>
            <BsPinterest className={"iconsocialMedia "+(currentMode && "dark") } />
          </div>
          <div className="locationUser">
            <div className="itemLocation">
              <HiLocationMarker className={"iconLocation "+(currentMode && "dark")} />
              <p className={"nameUser "+(currentMode && "dark")}>Colombia</p>
            </div>
            <div className="itemLocation">
              <TfiWorld className={"iconLocation "+(currentMode && "dark") }/>
              <p className={"nameUser "+(currentMode && "dark")}>valeriaJ.com</p>
            </div>
          </div>
          <div className="container-message">
            <BiMessageDetail className={"iconMessage "+ (currentMode && "dark")} />
            <CgMenuRight className={"iconMessage "+(currentMode && "dark")} />
          </div>
        </div>
        <Button className="btnProfile" isTag={true} title="Follow" />
      </div>
      <PostComponent />
    </div>
  );
}

export default Profile;
