import React from "react";
import { useEffect } from "react";
import SkillBox from "../skill/SkillBox";
import "./Slides.css";

const skillImage = {
    front: require('../../assets/icons/front_icons.png'),
    back : require('../../assets/icons/back_icons.png'),
    app : require('../../assets/icons/app_icons.png'),
}

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
                <div className="skills_container">
                    <div style={{marginRight:"2%"}}> 
                        <SkillBox 
                            title="Front_End"
                            icons={<img src={skillImage.front} width="80%"></img>}
                            swiper = {props.swiper}
                        />
                    </div>
                    <div>
                        <SkillBox 
                            title="Back_end"
                            icons={<img src={skillImage.back} width="80%"></img>}
                            swiper = {props.swiper}
                        />
                        <SkillBox 
                            title="APP"
                            icons={<img src={skillImage.app} width="80%"></img>}
                            swiper = {props.swiper}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;