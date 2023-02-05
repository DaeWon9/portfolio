import React from "react";
import { motion } from "framer-motion"
import "./SkillBox.css"

const SkillBox = (props) => {

    return(
        <motion.div whileHover={{ scale: 1.1 }} className="skill_box">
            <div className="skill_box_title">
                {props.title}
            </div>
            <div className="skill_box_icons_container">
                {props.icons}
            </div>
        </motion.div>
    )
}

export default SkillBox;