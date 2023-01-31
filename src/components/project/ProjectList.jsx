import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import CustomCarousel from "./CustomCarousel";
import { getProjectData } from "../../datas/ProjectData";

const ProjectList = (props) =>{
        
    let [projectCards, setProjectCards] = useState([]);
    let [projectData, setProjectData] = useState([]);

    useEffect( () => {
        setProjectData(getProjectData())
    }, []) 

    useEffect( () => {
        let cards = []
        projectData.map( (project, index) => {
            cards.push({
                key: index,
                content: 
                <ProjectCard 
                    image={project.image}
                    date={project.date}
                    heading={project.heading}
                    body={project.body}
                    link={project.link}
                />
            })
        })
        setProjectCards(cards)
    },[projectData])

    return (
        <CustomCarousel
            cards={projectCards}
            height="100%"
            width="100%"
            margin="0 auto"
            offset={2}
            showArrows={false}
            isDetailCardOpen = {props.isDetailCardOpen}
            setIsDetailCardOpen = {props.setIsDetailCardOpen}
        />
    );
}

export default ProjectList;
