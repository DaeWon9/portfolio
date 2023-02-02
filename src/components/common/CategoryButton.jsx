import React from "react";
import "./CategoryButton.css"

const CategoryButton = (props) => {
    return(
        <div 
            className="category_button" 
            onClick={props.onClick}
            style={{
                backgroundColor: props.text.includes(props.category) ? "white" : "inherit",
                color : props.text.includes(props.category) ? "rgb(0, 0, 85)" : "white",
            }}
        >
            {props.text}
        </div>
    )
}

export default CategoryButton;