import React from 'react'
import { Link } from "react-router-dom"
import "./Button.css"

function Button({ isActive, title, link }) {
  return (
    <Link to={link}>
      <button className={"button-form " + (isActive && "active")}>{title}</button>
    </Link>
  )
}

export default Button