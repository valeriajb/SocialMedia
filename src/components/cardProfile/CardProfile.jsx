import React from "react";
import {ContextDark} from '../../context/contextDark';
import {UserContext} from '../../context/contextUser';


import { useContext } from "react";
import "./CardProfile.css";
import "../../DarkMode.css"
import { Link } from "react-router-dom";
function CardProfile({
  isTag,
  element,
  linkImage,
  srcImage = "3",
  name = "Jhon Doe",
}) {
  const boldWord = {
    fontSize: "15px",
  };
  const thinWord = {
    fontSize: "10px",
    width: "120px",
  };
  const {currentMode}=useContext(ContextDark);
  const {currentUser}=useContext(UserContext)
  return (
    <div className={"profile-user "+ (currentMode && "dark")} style={isTag ? thinWord : boldWord}>
      <img
        src={linkImage ? linkImage : `/assets/${srcImage}.png`}
        alt="Perfil"
        style={
          isTag
            ? {
                width: "20px",
                height: "20px",
              }
            : {}
        }
        className="image-profile-user"
      />
     {element ? element : <p className={"name-profile-user "+ (currentMode && "dark" )}>{name}</p>}
      
    </div>
  );
}

export default CardProfile;
