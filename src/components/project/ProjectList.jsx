import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import CustomCarousel from "./CustomCarousel";
import { getProjectData } from "../../datas/ProjectData";

const ProjectList = () =>{
        
    let [projectCards, setProjectCards] = useState([]);
    let [projectData, setProjectData] = useState([]);

    useEffect( () => {
        setProjectData(getProjectData())
    }, []) 

    useEffect( () => {
        let cards = []
        projectData.map( (project, index) => {
            console.log(index)
            console.log(project)
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
        console.log(cards)
        setProjectCards(cards)
    },[projectData])

    useEffect( () => {
        console.log(projectCards)
        if (projectCards.length === 2){
            setProjectCards(prevList => [...prevList, <></>])
        }
    }, [projectCards])


    return (
        <CustomCarousel
            cards={projectCards}
            height="100%"
            width="100%"
            margin="0 auto"
            offset={2}
            showArrows={false}
        />
    );
}

export default ProjectList;
