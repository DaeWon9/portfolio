import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { WINDOW_SIZE } from "../../recoil/Atoms";
import "./SkillBox.css";

const SkillBox = (props) => {
    const [isHover, setIsHover] = useState(false);
    const [isShowExtra, setIsShowExtra] = useState(false);
    const windowSize = useRecoilValue(WINDOW_SIZE);

    useEffect(() => {
        if (windowSize.width > 480 && isHover) {
            setIsShowExtra(true);
        } else {
            setIsShowExtra(false);
        }
    }, [isHover]);

    return (
        <motion.div
            style={{ border: `0.2rem solid ${props.color}` }}
            whileHover={windowSize.width > 480 ? { scale: 1.1 } : {}}
            className="skill_box"
            onHoverStart={() => {
                setIsHover(true);
            }}
            onHoverEnd={() => {
                setIsHover(false);
            }}
        >
            <div
                className="skill_name"
                style={{ color: "#060919", backgroundColor: props.color, border: `0.2rem solid ${props.color}` }}
            >
                {props.name}
            </div>
            {isShowExtra || windowSize.width < 480 ? (
                <div className="skill_contents">
                    {props.contents.map((content, idx) => (
                        <div key={idx}>{content}</div>
                    ))}
                </div>
            ) : (
                <div className="skill_chip_contents">{props.chips}</div>
            )}
        </motion.div>
    );
};

export default SkillBox;
