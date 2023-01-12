import React from "react";
import "./LeftBar.css";
import CardProfile from "../cardProfile/CardProfile";
function LeftBar({ title, isBar }) {
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
      <CardProfile />
      <CardProfile />
    </div>
  );
}

export default LeftBar;
