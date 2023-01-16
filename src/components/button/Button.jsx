import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ isTag, isActive, title, link }) {


  return (
    <Link to={link}>
      <button
        style={
          isTag
            ? {
              width: "50px",
              height: "20px",
              backgroundColor: "#087aba",
              textAlign: "center",
              padding: "0"
            }
            : {}
        }
        className={"button-form " + (isActive && "active")}
      >
        {title}
      </button>
    </Link>
  );
}

export default Button;
