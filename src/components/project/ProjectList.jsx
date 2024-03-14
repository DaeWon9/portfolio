import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import CustomCarousel from "./CustomCarousel";
import { getAllProjectData, getCategoryProjectData } from "../../datas/ProjectData";

const ProjectList = (props) => {
    let [projectCards, setProjectCards] = useState([]);
    let [projectData, setProjectData] = useState([]);

    useEffect(() => {
        if (props.category === "ALL") {
            setProjectData(getAllProjectData());
        } else {
            setProjectData(getCategoryProjectData(props.category));
        }
    }, [props.category]);

    useEffect(() => {
        let cards = [];
        projectData.map((project, index) => {
            cards.push({
                key: project.heading,
                content: (
                    <ProjectCard
                        index={index}
                        projectMembers={project.projectMembers}
                        award={project.award}
                        image={project.thumbnailImage}
                        date={project.date}
                        heading={project.heading}
                        body={project.body}
                        link={project.link}
                        skills={project.skills}
                        setIsDetailCardOpen={props.setIsDetailCardOpen}
                    />
                ),
            });
        });
        setProjectCards(cards);
    }, [projectData]);

    return (
        <CustomCarousel
            category={props.category}
            cards={projectCards}
            height="100%"
            width="100%"
            margin="0 auto"
            offset={2}
            showArrows={false}
            isDetailCardOpen={props.isDetailCardOpen}
            setIsDetailCardOpen={props.setIsDetailCardOpen}
            setProjectKey={props.setProjectKey}
        />
    );
};

export default ProjectList;
