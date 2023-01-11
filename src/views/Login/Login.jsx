import React from "react";
import { dataLogin } from "../../components/form/Form";
import Form from "../../components/form/Form.jsx";

function Login() {
  return (
    <Form
      isLogin={true}
      titleForm="Login"
      dataLogin={dataLogin.filter((d) => d.login)}
      titleImage="Hello World"
    />
  );
}

export default Login;
