import React from "react";
import "./LeftBar.css";
import CardProfile from "../cardProfile/CardProfile";
function LeftBar({ title, isBar, listCard }) {
  return (
    <div
      style={
        isBar
          ? {
              margin: "0px",
            }
          : {
              margin: "20px",
            }
      }
      className="container-bar"
    >
      <label className="title-container">{title}</label>
      {listCard.map((item) => (
        <CardProfile name={item.name} srcImage={item.id} />
      ))}
    </div>
  );
}

export default LeftBar;
