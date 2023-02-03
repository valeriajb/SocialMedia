import React from "react";
import Input from "../input/Input";
import CardProfile from "../cardProfile/CardProfile";
import Button from "../button/Button";
import { ContextDark } from "../../context/contextDark";
import "./Comments.css";
import { useContext } from "react";
function Comments() {
  const { currentMode } = useContext(ContextDark);
  return (
    <div className="comments">
      <div className="comment">
        <CardProfile
          linkImage="/assets/friend.png"
          element={<Input isComment={true} placeholder="Write your comment" />}
        />
        <Button isTag={true} title="Send" />
      </div>
      <CardProfile
        element={
          <p className={"name-profile-user " + (currentMode && "dark")}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque?
          </p>
        }
      />
      <CardProfile
        srcImage="4"
        element={
          <p className={"name-profile-user " + (currentMode && "dark")}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque?
            
          </p>
        }
      />
    </div>
  );
}

export default Comments;
