import React from "react";
import "./Slides.css";

const Introduction = () => {

    return(
        <div className="slide_container" style={{backgroundColor:"wheat"}}>
            <div className="slide_header">
                About Me
            </div>
            <div className="slide_body">
                <div className="introduction">
                    안녕하세요 ~~~~개발자 박대원입니다.
                </div>
            </div>
        </div>
    )
}

export default Introduction;