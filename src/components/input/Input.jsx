import React from "react";
import "./Input.css";

function Input({ type, placeholder, isComment }) {
  return (
    <input
      type={type}
      className="input-item"
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
