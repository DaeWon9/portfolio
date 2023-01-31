import React, { useState, useEffect } from "react";
import ProjectList from "../project/ProjectList";
import ProjectDetailCard from "../project/ProjectDetailCard";
import "./Slides.css";

const Project = () => {
    const [isDetailCardOpen, setIsDetailCardOpen] = useState(false)
    const [projectIndex, setProjectIndex] = useState(0)

    return(
        <div className="slide_container" style={{backgroundColor:"navy"}}>
            <div className="slide_header">
                Project
            </div>
            <div className="slide_body">
                {
                    isDetailCardOpen ?
                    <ProjectDetailCard 
                        setIsDetailCardOpen = {setIsDetailCardOpen}
                    />
                    :
                    <></>
                }
                <div className="project_body_left">
                    그동안 제가 진행했던 프로젝트입니다.
                </div>
                <div className="project_body_right">
                    <ProjectList 
                        isDetailCardOpen = {isDetailCardOpen}
                        setIsDetailCardOpen = {setIsDetailCardOpen}
                    />
                </div>
            </div>
        </div>
    )
}

export default Project;