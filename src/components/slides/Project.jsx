import React from "react";
import ProjectList from "../project/ProjectList";
import "./Slides.css";

const Project = () => {

    return(
        <div className="slide_container" style={{backgroundColor:"navy"}}>
            <div className="slide_header">
                Project
            </div>
            <div className="slide_body">
                <div className="project_body_left">
                    그동안 제가 진행했던 프로젝트입니다.
                </div>
                <div className="project_body_right">
                    <ProjectList />
                </div>
            </div>
        </div>
    )
}

export default Project;