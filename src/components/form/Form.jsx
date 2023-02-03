import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import "./Form.css";

function Form({ isLogin, titleForm, dataLogin, titleImage }) {
  return (
    <div className={"form " + (isLogin && "active")}>
      <div className="form-left">
        <h1 className="title-form">{titleForm}</h1>
        <div className="inputs-form">
          {dataLogin.map((d) => (
            <Input key={d.id} type={d.type} placeholder={d.name} />
          ))}
        </div>
        <Button
          title={isLogin ? "Ingresar" : "Registrar"}
          isActive={false}
          link="/register"
        />
      </div>
      <div
        className="form-right"
        style={{
          background:
            "linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url(https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600) center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="title-image">{titleImage}</h1>
        <p className="text-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          eveniet voluptatum temporibus molestiae animi atque voluptatibus
          tenetur architecto, deserunt amet consequuntur veniam reprehenderit at
          asperiores. Eum mollitia temporibus placeat at!
        </p>
        <p className="text-description">
          {isLogin ? "¿No tienes cuenta?" : "¿Tienes Cuenta?"}
        </p>
        <Button
          title={isLogin ? "Registrar" : "Ingresar"}
          isActive={true}
          link="/"

        />
      </div>
    </div>
  );
}

export default Form;
