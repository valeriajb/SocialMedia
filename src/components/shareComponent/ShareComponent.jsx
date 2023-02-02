import React,{useContext}from "react";
import CardProfile from "../cardProfile/CardProfile";
import Input from "../input/Input";
import Button from '../button/Button';
import {ContextDark} from '../../context/contextDark';
import "./ShareComponent.css";
import "../../DarkMode.css"

function ShareComponent() {
    const{currentMode}=useContext(ContextDark);

    return (
        <div className={"container-share "+ (currentMode && "dark")}>
            <div className="container-top">
                <CardProfile
                    linkImage="/assets/login.jpg"
                    element={
                        <Input isComment={true} placeholder="What´s on your mind John?" />
                    }
                />
            </div>
            <div className="container-button">
                <div className="button-card">
                    <CardProfile isTag={true} srcImage="2" name="Add Friends" />
                    <CardProfile isTag={true} srcImage="map" name="Add Place" />
                    <CardProfile isTag={true} srcImage="friend" name="Tag Friends" />
                </div>
                <Button isTag={true} title="Share" />
            </div>
        </div>
    );
}

export default ShareComponent;
