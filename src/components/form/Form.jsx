import React, { useContext } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import {ContextDark} from "../../context/contextDark"
import "./Form.css";
import "../../DarkMode.css"

function Form({ isLogin, titleForm, dataLogin, titleImage }) {
  const{ currentMode}=useContext(ContextDark);
  return (
    <div className={"form " + (isLogin && "active") + (currentMode && "dark")}>
      <div className={"form-left "+ (currentMode && "dark")}>
        <h1 className={"title-form " + (currentMode && "dark")}>{titleForm}</h1>
        <div className="inputs-form">
          {dataLogin.map((d) => (
            <Input className="inputForm" key={d.id} type={d.type} placeholder={d.name} />
          ))}
        </div>
        <Button
          title={isLogin ? "Ingresar" : "Registrar"}
          isActive={false}
          link="/register"
        />
      </div>
      <div
        className={"form-right "+ (currentMode && "dark")}
        style={{
          background:
            "linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url(https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600) center",
          backgroundSize: "cover",
        }}
      >
        <h1 className={"title-image " + (currentMode && "dark")}>{titleImage}</h1>
        <p className={"text-description " + (currentMode && "dark")}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          eveniet voluptatum temporibus molestiae animi atque voluptatibus
          tenetur architecto, deserunt amet consequuntur veniam reprehenderit at
          asperiores. Eum mollitia temporibus placeat at!
        </p>
        <p className={"text-description " + (currentMode && "dark") }>
          {isLogin ? "¿No tienes cuenta?" : "¿Tienes Cuenta?"}
        </p>
        <Button
          clickBtn={true}
          title={isLogin ? "Registrar" : "Ingresar"}
          isActive={true}
          link="/"

        />
      </div>
    </div>
  );
}

export default Form;
