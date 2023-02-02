import React from "react";
import ButtonFollow from "../buttonFollows/ButtonFollow";
import {ContextDark} from '../../context/contextDark'
import "./CardActivity.css";
import "../../DarkMode.css"
import { useContext } from "react";
function CardActivity(
  linkImage,
  srcImage = "3",
  name = "Jhon Doe",
  isOnline=true,
  isFollow=false
) 
{
  const{currentMode}=useContext(ContextDark)

  return (
    <div className={"profile-user-activity " + (currentMode && "dark")}>
      {isOnline ? <div className="status-profile"></div> : null}
      {isFollow ? null : 
        <img
          src={`/assets/${srcImage}.png`}
          alt="Perfil"
          className="image-profile-user"
        />
      }
      <p className={"name-profile-user "+ (currentMode && "dark")}>{name}</p>
      {isFollow?<ButtonFollow />:null}
    </div>
  );
}

export default CardActivity;
