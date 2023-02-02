import Carousel from "react-spring-3d-carousel";
import { useState, useEffect, useRef } from "react";
import { config } from "react-spring";

const CustomCarousel = (props) => {

    const table = props.cards.map((element, index) => {
        return { ...element, onClick: () => onClickCard(index) };
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState(0);
    const currentSlide = useRef(goToSlide);

    function onClickCard(index){
        if (currentSlide.current === index){
            props.setProjectKey(table[index].key)
            props.setIsDetailCardOpen(true)
        }
        else{
            if (!props.isDetailCardOpen){
                setGoToSlide(index)
            }
        }
    }
    
    useEffect(() =>{
        if (!props.isDetailCardOpen){
            currentSlide.current = goToSlide;
        }
    }, [goToSlide])

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);

    return (
        <div style={{ width: props.width, height: props.height, margin: props.margin }}>
            <Carousel
                slides={table}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={config.gentle}
            />
        </div>
    );
}

export default CustomCarousel;