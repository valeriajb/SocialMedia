import React from "react";
import "./LeftBar.css";
import CardProfile from "../cardProfile/CardProfile";
function LeftBar({ nameCard,srcImage,title, isBar, listCard }) {
  return (
    <div
      style={
        isBar
          ? {
              margin: "0px",
              height:"100%"
            }
          : {
              margin: "20px",
            }
      }
      className="container-bar"
    >
      <label className="title-container">{title}</label>
      {
        listCard?
        listCard.map((item) => (
          <CardProfile name={item.name} srcImage={item.id} />
        )):<CardProfile name={nameCard} srcImage={srcImage} />
      }
    </div>
  );
}

export default LeftBar;
