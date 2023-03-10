import React, { useState, useEffect, useRef } from "react";
import { getProjectData } from "../../datas/ProjectData";
import { useStopwatch } from "react-timer-hook";
import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ProjectDetailCard.css"

const ProjectDetailCard = (props) =>{
    const [projectData, setProjectData] = useState()
    const modalRef = useRef(null);
    const { isRunning, pause, reset } = useStopwatch({autoStart: false});

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target) && isRunning) {
                props.setIsDetailCardOpen(false)
            }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [modalRef, isRunning]);

    useEffect( () => {
        if (props.isDetailCardOpen){
            reset()
        }
        else{
            pause()
        }
    },[props.isDetailCardOpen])

    useEffect( () => {
        setProjectData(getProjectData(props.projectKey)[0])
    },[props.projectKey])
    
    return(
        <div className="detail_card_container" ref={modalRef}>
            <div className="detail_card_top_bar">
                <div className="closed_button" onClick={() => props.setIsDetailCardOpen(false)}>
                    X
                </div>
            </div>
            <div className="detail_card_body">
                <div className="detail_card_body_left">
                    <Swiper
                        pagination={{
                            type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        style={{height:"99%"}}
                    >
                        {projectData && projectData.image}
                    </Swiper>
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