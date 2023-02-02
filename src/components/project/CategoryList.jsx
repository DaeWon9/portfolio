import React from "react";
import CategoryButton from "../common/CategoryButton";

const CategoryList = (props) => {
    
    return(
        <>
            <CategoryButton
                text="ALL"
                category = {props.category}
                onClick={() => props.setCategory('ALL')}
            />
            <CategoryButton
                text="WEB"
                category = {props.category}
                onClick={() => props.setCategory('WEB')}
            />
            <CategoryButton
                text="APP"
                category = {props.category}
                onClick={() => props.setCategory('APP')}
            />
            <CategoryButton
                text="ETC"
                category = {props.category}
                onClick={() => props.setCategory('ETC')}
            />
            <CategoryButton
                text="FRONT_END"
                category = {props.category}
                onClick={() => props.setCategory('FRONT_END')}
            />
            <CategoryButton
                text="BACK_END"
                category = {props.category}
                onClick={() => props.setCategory('BACK_END')}
            />
        </>
    )
}

export default CategoryList;