import React from "react";
import TeleprompterIcon from "../assets/images/teleprompter_icon.png";

function AppIconText() {
    return(
        <div className="AppIconText">
            {/* icon */}
            <img className="icon" src={TeleprompterIcon}></img>
            <div className="header-text inter-font">Teleprompter</div>
        </div>
    )
}

export default AppIconText;