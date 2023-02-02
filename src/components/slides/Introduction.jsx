import React from "react";
import { TypeAnimation } from 'react-type-animation';
import "./Slides.css";

const Introduction = () => {

    return(
        <div className="slide_container" style={{backgroundColor:"wheat"}}>
            <div className="slide_header">
                About Me
            </div>
            <div className="slide_body">
                <div className="introduction">
                <TypeAnimation
                    sequence={[
                        '안녕하세요',
                        500,
                        '안녕하세요 어제보다 오늘, 더 성장하고 싶은 개발자 박대원입니다.',
                        1000,
                        '',
                        () => {
                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    speed={1}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em' }}
                />
                </div>
            </div>
        </div>
    )
}

export default Introduction;