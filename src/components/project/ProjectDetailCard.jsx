import React from "react";
import "./ProjectDetailCard.css"

const ProjectDetailCard = (props) =>{
    return(
        <div className="detail_card_container">
            <div className="detail_card_top_bar">
                <div className="closed_button" onClick={() => props.setIsDetailCardOpen(false)}>
                    X
                </div>
            </div>
            <div className="detail_card_body">
                <div className="detail_card_body_left">
                    PICUTRE
                </div>

                <div className="detail_card_body_right">
                    <div className="detail_card_title">
                        프로젝트명
                    </div>

                    <div className="detail_card_introduction">
                        무슨무슨무슨 프로젝트입니다.
                    </div>        

                    <div className="detail_card_extra">
                        <p>주요기능 : </p>
                        <p>github : </p>
                        <p>skills : </p>
                    </div>             
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailCard;