import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getProjectData } from "../../datas/ProjectData";
import "./ProjectDetailCard.css"

const ProjectDetailCard = (props) =>{

    let [projectData, setProjectData] = useState()

    useEffect( () => {
        setProjectData(getProjectData(props.projectIndex))
    },[props.projectIndex])
    
    return(
        <div className="detail_card_container">
            <div className="detail_card_top_bar">
                <div className="closed_button" onClick={() => props.setIsDetailCardOpen(false)}>
                    X
                </div>
            </div>
            <div className="detail_card_body">
                <div className="detail_card_body_left">
                    <img src={projectData && projectData.image} width="100%" height="auto"></img>
                </div>

                <div className="detail_card_body_right">
                    <div className="detail_card_title">
                        {projectData && projectData.heading}
                    </div> 

                    <div className="detail_card_background">
                        {projectData && projectData.background}
                    </div>        

                    <div className="detail_card_extra">
                        {projectData && projectData.takeAway}
                    </div>    

                    <div className="detail_card_extra">
                        {projectData && projectData.service}
                    </div>         
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailCard;