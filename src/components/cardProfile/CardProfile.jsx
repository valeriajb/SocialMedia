import React from "react";
import "./CardProfile.css";

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

  return (
    <div className="profile-user" style={isTag ? thinWord : boldWord}>
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
      {element ? element : <p className={"name-profile-user"}>{name}</p>}
      
    </div>
  );
}

export default CardProfile;
