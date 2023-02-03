import React,{useState} from "react";
import {ContextDark} from '../../context/contextDark'
import {UserContext} from '../../context/contextUser'
import "./Input.css";
import "../../DarkMode.css"
import { useContext } from "react";
import { useEffect } from "react";

function Input({ type, placeholder, isComment }) {
  const{currentMode}=useContext(ContextDark)
  // const [valueInput, setValueInput] = useState()

  // useEffect(()=>{
  //   changeUser(valueInput)
  // },[valueInput])

  return (
    <input
      // onChange={(e)=>{
      //   setValueInput(e.target.value)
      //  }}

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
