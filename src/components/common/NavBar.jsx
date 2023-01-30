import React from "react";
import "./NavBar.css";

const INTRODUCTION = 0;
const CAREER = 1;
const PROJECT = 2;

const NavBar = (props) => {
    return(
        <div className="nav_bar_container">
            <div className="logo">
                DaeWon
            </div>
            <div className="nav_bar_buttons">
                <div className="nav_bar_button" onClick={() => props.swiper.slideTo(INTRODUCTION)}>
                    About Me
                </div>
                <div className="nav_bar_button" onClick={() => props.swiper.slideTo(CAREER)}>
                    Career
                </div>
                <div className="nav_bar_button" onClick={() => props.swiper.slideTo(PROJECT)}>
                    Projects
                </div>
            </div>
        </div>
    )
}

export default NavBar;