import React from "react";
import ProfilePicture from "../common/ProfilePicture";
import { TypeAnimation } from 'react-type-animation';
import "./Slides.css";

const Introduction = (props) => {

    return(
        <div className="slide_container" style={{backgroundColor:"bisque"}}>
            <div className="slide_header_picture">
                <ProfilePicture />
            </div>
            <div className="slide_body">
                <div className="introduction">
                    {
                        props.isActive ?
                        <TypeAnimation
                            sequence={[
                                '안녕하세요!\n',
                                500,
                                '안녕하세요!\n 어제보다 오늘, 더 성장하고 싶은 개발자 박대원입니다.',
                                1000,
                                '',
                            ]}
                            speed={1}
                            deletionSpeed={45}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: 'larger', whiteSpace: 'pre-line' }}
                        />
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default Introduction;