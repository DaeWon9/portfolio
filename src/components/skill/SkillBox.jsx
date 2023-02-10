import React from "react";
import { useRecoilValue } from "recoil";
import { WINDOW_SIZE } from "../../recoil/Atoms";
import { motion } from "framer-motion"
import "./SkillBox.css"

const SkillBox = (props) => {
    
    const windowSize = useRecoilValue(WINDOW_SIZE)

    return(
        windowSize.width >= 480 ? 
            <motion.div whileHover={{ scale: 1.1 }} className="skill_box">
                <div className="skill_box_title">
                    {props.title}
                </div>
                <div className="skill_box_icons_container">
                    {props.icons}
                </div>
            </motion.div>
        :
            <div className="skill_box">
                <div className="skill_box_title">
                    {props.title}
                </div>
                <div className="skill_box_icons_container">
                    {props.icons}
                </div>
            </div>
    )
}

export default SkillBox;