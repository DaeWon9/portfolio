import React, { useState, useEffect } from "react";
import ProjectList from "../project/ProjectList";
import ProjectDetailCard from "../project/ProjectDetailCard";
import "./Slides.css";

const Project = () => {
    const [isDetailCardOpen, setIsDetailCardOpen] = useState(false)
    const [projectIndex, setProjectIndex] = useState(0)

    return(
        <div className="slide_container" style={{backgroundColor:"navy"}}>
            {
                isDetailCardOpen ?
                <ProjectDetailCard 
                    isDetailCardOpen = {isDetailCardOpen}
                    setIsDetailCardOpen = {setIsDetailCardOpen}
                    projectIndex = {projectIndex}
                />
                :
                <></>
            }
            <div className="slide_header">
                Project
            </div>
            <div className="slide_body">
                <div className="project_body_left">
                    
                </div>
                <div className="project_body_right">
                    <ProjectList 
                        isDetailCardOpen = {isDetailCardOpen}
                        setIsDetailCardOpen = {setIsDetailCardOpen}
                        setProjectIndex = {setProjectIndex}
                    />
                </div>
            </div>
        </div>
    )
}

export default Project;