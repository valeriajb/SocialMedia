import React from "react";
import {ContextDark} from '../../context/contextDark';
import { useContext } from "react";
import "./CardProfile.css";
import "../../DarkMode.css"
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
  console.log(currentMode)
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
