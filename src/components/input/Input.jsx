import React from 'react';
import "./Input.css"

function Input({ type, placeholder }) {
  return (
    <input type={type} className="input-item" placeholder={placeholder} />
  )
}

export default Input