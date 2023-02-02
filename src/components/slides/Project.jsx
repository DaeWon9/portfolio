import React, { useState } from "react";
import ProjectList from "../project/ProjectList";
import ProjectDetailCard from "../project/ProjectDetailCard";
import "./Slides.css";

const Project = (props) => {
    const [projectIndex, setProjectIndex] = useState(0)

    return(
        <div className="slide_container" style={{backgroundColor:"navy"}}>
            {
                props.isDetailCardOpen ?
                <ProjectDetailCard 
                    isDetailCardOpen = {props.isDetailCardOpen}
                    setIsDetailCardOpen = {props.setIsDetailCardOpen}
                    projectIndex = {projectIndex}
                />
                :
                <></>
            }
            <div className="slide_header">
                PROJECTS
            </div>
            <div className="slide_body">
                <div className="project_body_left">
                    
                </div>
                <div className="project_body_right">
                    <ProjectList 
                        isDetailCardOpen = {props.isDetailCardOpen}
                        setIsDetailCardOpen = {props.setIsDetailCardOpen}
                        setProjectIndex = {setProjectIndex}
                    />
                </div>
            </div>
        </div>
    )
}

export default Project;