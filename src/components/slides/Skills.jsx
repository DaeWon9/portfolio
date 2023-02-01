import React from "react";
import { useEffect } from "react";
import "./Slides.css";

const Skills = (props) => {
    useEffect( () => {
        if (props.isActive){
            props.setIsDetailCardOpen(false)
        }
    }, [props.isActive])
    return(
        <div className="slide_container" style={{backgroundColor:"bisque"}}>
            <div className="slide_header">
                SKILLS
            </div>
            <div className="slide_body">
                
            </div>
        </div>
    )
}

export default Skills;