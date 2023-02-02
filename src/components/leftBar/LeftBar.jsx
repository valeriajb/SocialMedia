import React from "react";
import "./LeftBar.css";
import "../../DarkMode.css"
import CardProfile from "../cardProfile/CardProfile";
import ButtonFollow from "../buttonFollows/ButtonFollow";
import CardActivity from "../cardActivity/CardActivity";
import { ContextDark } from '../../context/contextDark';
import { useContext } from "react";
function LeftBar({ nameCard, srcImage, title, isBar, listCard, profile = true }, isFollow, isOnline) {
  const { currentMode } = useContext(ContextDark)
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
      className={"container-bar " + (currentMode && "dark")}
    >
      <label className={"title-container " + (currentMode && "dark")}>{title}</label>
      <div className="cardFollow">
        {listCard ? (
          listCard.map((item) => (
            profile ? <CardProfile key={item.id} name={item.name} srcImage={item.id} /> :
              <CardActivity key={item.id} isOnline={isOnline} isFollow={isFollow} name={item.name} srcImage={item.id} />
          ))
        ) : (
          profile ? <CardProfile name={nameCard} srcImage={srcImage} /> : <CardActivity name={nameCard} srcImage={srcImage} isOnline={isOnline} isFollow={isFollow} />
        )}

      </div>
    </div>
  );
}

export default LeftBar;
