import React from "react";
import ButtonFollow from "../buttonFollows/ButtonFollow";
import "./CardActivity.css";
function CardActivity(
  linkImage,
  srcImage = "3",
  name = "Jhon Doe",
  isOnline=true,
  isFollow=false
) {
  return (
    <div className="profile-user-activity">
      {isOnline ? <div className="status-profile"></div> : null}
      {isFollow ? null : 
        <img
          src={linkImage ? linkImage : `/assets/${srcImage}.png`}
          alt="Perfil"
          className="image-profile-user"
        />
      }
      <p className={"name-profile-user"}>{name}</p>
      {isFollow?<ButtonFollow />:null}
    </div>
  );
}

export default CardActivity;
