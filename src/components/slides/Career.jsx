import React from "react";
import ProfilePicture from "../common/ProfilePicture";
import "./Slides.css";

const Career = () => {
    return (
        <div className="slide_container">
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
            <div className="slide_header">CAREER</div>
            <div className="slide_body">
                <div className="career_left">
                    <ProfilePicture
                        image={require("../../assets/Image/profile/profileImage1.png")}
                        backgroundColor="white"
                    />
                </div>
                <div className="career_right">
                    <p className="career_content">🎓 Department of Software in Sejong Univ.</p>
                    <p className="career_content">👨🏻‍💻 Sejong Univ. En# 22th</p>
                    <p
                        className="career_content_link"
                        onClick={() =>
                            window.open(
                                "http://paas-ta.co.kr/awardList_2022.jsp;jsessionid=6386EA48141BC18857A1721004DA4FE6",
                                "_blank"
                            )
                        }
                    >
                        🏆 2022 개방형 클라우드 플랫폼 기반 서비스 개발 공모전 - 특별상 수상
                    </p>
                    <p
                        className="career_content_link"
                        onClick={() =>
                            window.open(
                                "https://techcommunity.microsoft.com/t5/student-developer-blog/meet-the-2023-imagine-cup-world-finalists/ba-p/3754378",
                                "_blank"
                            )
                        }
                    >
                        🎖 2023 Microsoft Imagine Cup - World Finalists ( Asia 대표 )
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Career;
