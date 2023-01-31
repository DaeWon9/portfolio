import React from "react";

const PICTURE_SIZE = window.innerWidth / 5;

const ProfilePicture = () =>{

    return(
        <div 
            style={{
                width:PICTURE_SIZE, 
                height:PICTURE_SIZE, 
                borderRadius:PICTURE_SIZE, 
                backgroundColor:"beige",
                marginRight:"5%"
            }}>
        </div>
    )
}

export default ProfilePicture;
