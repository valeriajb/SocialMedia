import React, { useContext, useState } from "react";
import CardProfile from "../cardProfile/CardProfile";
import { ContextDark } from "../../context/contextDark";
import "./PostComponent.css";
import "../../DarkMode.css";
import { BsHeart, BsFillShareFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { BiCommentDetail } from "react-icons/bi";
import Comments from "../comments/Comments";
import { useEffect } from "react";
function PostComponent({
  image = "/assets/login.jpg",
  textMessage = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
}) {
  const { currentMode } = useContext(ContextDark);

  return (
    <>
      <div className={"container-post " + (currentMode && "dark")}>
        <CardProfile link="profile/:id" isTag={false} />
        <p className={"text-post " + (currentMode && "dark")}>{textMessage}</p>
        <img src={image} alt="" className="image-post" />
        <div className="container-icons">
          <div className="container container-like">
            <BsHeart className={"iconPost " + (currentMode && "dark")} />
            <p className={"text-icons " + (currentMode && "dark")}>10 Likes</p>
          </div>
          <div className="container container-comments">
            <BiCommentDetail
              className={"iconPost " + (currentMode && "dark")}
            />
            <p className={"text-icons " + (currentMode && "dark")}>
              10 Comments
            </p>
          </div>
          <div className="container">
            <BsFillShareFill
              className={"iconPost " + (currentMode && "dark")}
            />
            <p className={"text-icons " + (currentMode && "dark")}>Share</p>
          </div>
        </div>
        <Comments />
      </div>
    </>
  );
}

export default PostComponent;
