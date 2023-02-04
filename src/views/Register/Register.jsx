import React, {useContext}from "react";
import { dataLogin } from "../../components/form/Form";
import Form from "../../components/form/Form.jsx";
import "./Register.css";
import "../../DarkMode.css"
import {ContextDark} from "../../context/contextDark"

function Register() {
  const{ currentMode}=useContext(ContextDark)

  return (
    <div className={"containerRegister " + (currentMode && "dark")}>
      <Form
        isLogin={false}
        titleForm="Registro"
        dataLogin={dataLogin}
        titleImage="Social Media."
      />
    </div>
  );
}

export default Register;
