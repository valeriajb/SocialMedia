import React, { useContext } from "react"
import { ContextDark } from "../context/contextDark"
import { UserContext } from "../context/contextUser"
import { Link } from "react-router-dom"
function CardUser() {
    const{currentMode}=useContext(ContextDark)
    const {currentUser}=useContext(UserContext)
    return (
        <div
            className={"profile-user " + (currentMode && "dark")}
        >
            <img src={currentUser.src}
                className="image-profile-user"
            />

            <Link to={`/profile/:${currentUser.id}`}>
            <p className={"name-profile-user " + (currentMode && "dark")}>
                {currentUser.name}
            </p>
            </Link>
        </div>
    )
}

export default CardUser