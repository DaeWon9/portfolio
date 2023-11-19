import React from "react";
import "./ProfilePicture.css";

const ProfilePicture = (props) => {
    return (
        <div className="profile_picture" style={{ backgroundColor: props.backgroundColor }}>
            <img className="profile_image" src={props.image} alt="Profile" />
        </div>
    );
};

export default ProfilePicture;
