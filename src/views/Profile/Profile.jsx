import React from "react";
import Button from "../../components/button/Button";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import { BiMessageDetail } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import "./Profile.css";
function Profile() {
  return (
    <div className="containerProfile">
      <img
        className="imagePortada"
        src="https://images.pexels.com/photos/461960/pexels-photo-461960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ></img>
      <div className="infoUser">
        <div className="photoUser">
          <img
            className="image"
            src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          ></img>
          <h2>Jhon Doe</h2>
        </div>
        <div className="socialmedias">
          <div className="socialMedia">
            <FaFacebookF className="iconsocialMedia" />
            <AiOutlineInstagram className="iconsocialMedia" />
            <BsTwitter className="iconsocialMedia" />
            <AiFillLinkedin className="iconsocialMedia" />
            <BsPinterest className="iconsocialMedia" />
          </div>
          <div className="locationUser">
            <div className="itemLocation">
              <HiLocationMarker className="iconLocation" />
              <p>Colombia</p>
            </div>
            <div className="itemLocation">
              <TfiWorld className="iconLocation" />
              <p>valeriaJ.com</p>
            </div>
          </div>
          <div className="container-message">
            <BiMessageDetail className="iconMessage" />
            <CgMenuRight className="iconMessage" />
          </div>
        </div>
        <Button isTag={true} title="Follow" />
      </div>
    </div>
  );
}

export default Profile;
