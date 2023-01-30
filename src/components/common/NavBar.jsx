import React from "react";
import "./NavBar.css";

const NavBar = () => {
    return(
        <div className="nav_bar_container">
            <div className="logo">
                DaeWon
            </div>
            <div className="nav_bar_buttons">
                <div className="nav_bar_button">
                    Introduction
                </div>
                <div className="nav_bar_button">
                    Career
                </div>
                <div className="nav_bar_button">
                    Project
                </div>
            </div>
        </div>
    )
}

export default NavBar;