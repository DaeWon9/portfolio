import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { WINDOW_SIZE } from "../../recoil/Atoms";
import { TiThMenu } from "react-icons/ti"
import { motion } from "framer-motion"
import "./NavBar.css";

const INTRODUCTION = 0;
const CAREER = 1;
const SKILLS = 2;
const PROJECT = 3;

const NavBar = (props) => {

    const windowSize = useRecoilValue(WINDOW_SIZE)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect( () => {
        if (windowSize.width > 480){
            setIsMenuOpen(false)
        }
    }, [windowSize])

    return(
        <>        
            <div className="nav_bar_container">
                <div className="logo">
                    DaeWon's Portfolio
                </div>
                {
                    windowSize.width >= 480 ?
                    <div className="nav_bar_buttons">
                        <div className="nav_bar_button" onClick={() => props.swiper.slideTo(INTRODUCTION)}>
                            About&nbsp;Me
                        </div>
                        <div className="nav_bar_button" onClick={() => props.swiper.slideTo(CAREER)}>
                            Career
                        </div>
                        <div className="nav_bar_button" onClick={() => props.swiper.slideTo(SKILLS)}>
                            Skills
                        </div>
                        <div className="nav_bar_button" onClick={() => props.swiper.slideTo(PROJECT)}>
                            Projects
                        </div>
                    </div>
                    :
                    <TiThMenu className="nav_bar_menu_button" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
                }
            </div>
            {
                isMenuOpen ?
                <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="nav_bar_menu_container">
                    <div className="nav_bar_menu" onClick={() => {props.swiper.slideTo(INTRODUCTION)
                                                                    setIsMenuOpen(false)}}>
                        About&nbsp;Me
                    </div>
                    <div className="nav_bar_menu" onClick={() => {props.swiper.slideTo(CAREER)
                                                                    setIsMenuOpen(false)}}>
                        Career
                    </div>
                    <div className="nav_bar_menu" onClick={() => {props.swiper.slideTo(SKILLS)
                                                                    setIsMenuOpen(false)}}>
                        Skills
                    </div>
                    <div className="nav_bar_menu" onClick={() => {props.swiper.slideTo(PROJECT)
                                                                    setIsMenuOpen(false)}}>
                        Projects
                    </div>
                </motion.div>
                :
                <></>
            }
        </>

    )
}

export default NavBar;