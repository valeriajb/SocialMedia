import React from "react";
import "./CardProfile.css";

function CardProfile({ srcImage="3", name="Jhon Doe"}) {

   const boldWord = {
    fontWeight: "600"
  }
  const thinWord={ 
    fontWeight: "400"
  }

  return (
    <div className="profile-user">
      <div className="container-image-user">
        <img
          src={`/assets/${srcImage}.png`}
          alt="Perfil"
          className="image-profile-user"
        />
      </div>
      <p className={"name-profile-user"}>{name}</p>
    </div>
  );
}

export default CardProfile;
