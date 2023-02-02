import React from "react";
import {ContextDark} from '../../context/contextDark'
import "./Input.css";
import "../../DarkMode.css"
import { useContext } from "react";

function Input({ type, placeholder, isComment }) {
  const{currentMode}=useContext(ContextDark)
  return (
    <input
      type={type}
      className={"input-item " + (currentMode && "dark")}
      style={
        isComment
          ? {
              borderBottomColor: "white",
              width:"100%"
            }
          : {}
      }
      placeholder={placeholder}
    />
  );
}

export default Input;
