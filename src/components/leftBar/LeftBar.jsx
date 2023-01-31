import React from "react";
import "./LeftBar.css";
import CardProfile from "../cardProfile/CardProfile";
import ButtonFollow from "../buttonFollows/ButtonFollow";
import CardActivity from "../cardActivity/CardActivity";
function LeftBar({ nameCard, srcImage, title, isBar, listCard, profile = true }, isFollow, isOnline) {
  return (
    <div
      style={
        isBar
          ? {
            margin: "0px",
            height: "100%",
          }
          : {
            margin: "20px",
          }
      }
      className="container-bar"
    >
      <label className="title-container">{title}</label>
      <div className="cardFollow">
        {listCard ? (
          listCard.map((item) => (
            profile ? <CardProfile key={item.id} name={item.name} srcImage={item.id} /> :
              <CardActivity key={item.id} isOnline={isOnline} isFollow={isFollow} name={item.name} srcImage={item.id} />
          ))
        ) : (
          profile ? <CardProfile name={nameCard} srcImage={srcImage} /> : <CardActivity name={nameCard} srcImage={srcImage}isOnline={isOnline} isFollow={isFollow} />
        )}

      </div>
    </div>
  );
}

export default LeftBar;
