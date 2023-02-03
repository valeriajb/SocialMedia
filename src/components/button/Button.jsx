import React, {useContext}from "react";
import { Link } from "react-router-dom";
import {UserContext} from '../../context/contextUser'

import "./Button.css";

function Button({ isTag, isActive, title, link }) {
  const{currentUser, changeUser}=useContext(UserContext);

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
