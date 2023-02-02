import React,{useContext} from 'react'
import CardProfile from '../cardProfile/CardProfile';
import {ContextDark} from '../../context/contextDark';
import './PostComponent.css'
import "../../DarkMode.css"
function PostComponent({image="/assets/login.jpg", textMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit."}) {
  
  const{currentMode}=useContext(ContextDark);

  return (
    <div className={"container-post " + (currentMode && "dark")}>
        <CardProfile isTag={false}/>
        <p className={"text-post "+ (currentMode && "dark")}>{textMessage}</p>
        <img src={image}  alt="" className="image-post" />
    </div>
  )
}

export default PostComponent