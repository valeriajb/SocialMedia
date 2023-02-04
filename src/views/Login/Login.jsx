import React, { useContext } from "react";
import { dataLogin } from "../../components/form/Form";
import Form from "../../components/form/Form.jsx";
import "../../DarkMode.css"
import {ContextDark} from "../../context/contextDark"

function Login() {
  const{ currentMode}=useContext(ContextDark)
  return (
    <div className={"containerLogin " + (currentMode && "dark")}>
      <Form
        isLogin={true}
        titleForm="Login"
        dataLogin={dataLogin.filter((d) => d.login)}
        titleImage="Hello World"
      />
    </div>
  );
}

export default Login;
