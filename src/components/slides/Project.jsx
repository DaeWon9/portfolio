import React, { useState } from "react";
import ProjectList from "../project/ProjectList";
import ProjectDetailCard from "../project/ProjectDetailCard";
import CategoryList from "../project/CategoryList";
import "./Slides.css";

const Project = (props) => {
    const [projectIndex, setProjectIndex] = useState(0)
    const [category, setCategory] = useState('ALL')

    return(
        <div className="slide_container" style={{backgroundColor:"rgb(0, 0, 85)"}}>
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
                    <CategoryList 
                        category = {category}
                        setCategory = {setCategory}
                    />
                </div>
                <div className="project_body_right">
                    <ProjectList 
                        category = {category}
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