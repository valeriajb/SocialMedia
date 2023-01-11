import React from "react";
import { dataLogin } from "../../components/form/Form";
import Form from "../../components/form/Form.jsx";
import "./Register.css";
function Register() {
  return (
    <Form
      isLogin={false}
      titleForm="Registro"
      dataLogin={dataLogin}
      titleImage="Social Media."
    />
  );
}

export default Register;
