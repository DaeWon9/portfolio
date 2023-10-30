import React, { useState } from "react";
import ProjectList from "../project/ProjectList";
import ProjectDetailCard from "../project/ProjectDetailCard";
import CategoryList from "../project/CategoryList";
import "./Slides.css";

const Project = (props) => {
    const [projectKey, setProjectKey] = useState("나홀로 편의점");
    const [category, setCategory] = useState("ALL");

    return (
        <div className="slide_container" style={{ backgroundColor: "rgb(0, 0, 85)" }}>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            {props.isDetailCardOpen ? (
                <ProjectDetailCard
                    isDetailCardOpen={props.isDetailCardOpen}
                    setIsDetailCardOpen={props.setIsDetailCardOpen}
                    projectKey={projectKey}
                />
            ) : (
                <></>
            )}
            <div className="slide_header">PROJECTS</div>
            <div className="slide_body">
                <div className="project_body_left">
                    <CategoryList category={category} setCategory={setCategory} />
                </div>
                <div className="project_body_right">
                    <ProjectList
                        category={category}
                        isDetailCardOpen={props.isDetailCardOpen}
                        setIsDetailCardOpen={props.setIsDetailCardOpen}
                        setProjectKey={setProjectKey}
                    />
                </div>
            </div>
        </div>
    );
};

export default Project;
