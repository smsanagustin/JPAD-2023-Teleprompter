import React from "react";
import TeleprompterIcon from "../assets/images/teleprompter_icon.png";

function Header() {
    return(
        <div className="header">
            {/* icon */}
            <div className="teleprompter-row">
                <img className="icon" src={TeleprompterIcon}></img>
                <div className="header-text inter-font">Teleprompter</div>
            </div>
        </div>
    )
}

export default Header;