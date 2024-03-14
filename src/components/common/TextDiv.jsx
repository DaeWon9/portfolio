import React from "react";

const TextDiv = (props) => {
    return <span style={{ display: "block", fontWeight: "bold", lineHeight: "25px" }}>{props.text}</span>;
};

export default TextDiv;
