import React from "react";
import ProfilePicture from "../common/ProfilePicture";
import "./Slides.css";

const Career = () => {
    return(
        <div className="slide_container" style={{backgroundColor:"blue"}}>
            <div className="slide_header">
                CAREER
            </div>
            <div className="slide_body">
                <div className="career_left">
                    <ProfilePicture />
                </div>
                <div className="career_right">
                    <p className="career_content">🎓 Department of Software in Sejong Univ.</p>
                    <p className="career_content">👨🏻‍💻 Sejong Univ. En# 22th</p>
                    <p className="career_content">🏆 2022 개방형 클라우드 플랫폼 기반 서비스 개발 공모전 특별상 수상</p>
                </div>
            </div>
        </div>
    )
}

export default Career;