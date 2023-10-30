import Carousel from "react-spring-3d-carousel";
import { useState, useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { config } from "react-spring";
import { CENTER_PROJECT } from "../../recoil/Atoms";
import { useRecoilValue } from "recoil";
import { WINDOW_SIZE } from "../../recoil/Atoms";

const CustomCarousel = (props) => {
    const table = props.cards.map((element, index) => {
        return { ...element, onClick: () => onClickCard(index) };
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState(0);
    const setCenterProject = useSetRecoilState(CENTER_PROJECT);
    const windowSize = useRecoilValue(WINDOW_SIZE);
    const currentSlide = useRef(goToSlide);

    function onClickCard(index) {
        if (currentSlide.current === index) {
            props.setProjectKey(table[index].key);
            if (windowSize.width < 480) {
                props.setIsDetailCardOpen(true);
            }
        } else {
            if (!props.isDetailCardOpen) {
                setGoToSlide(index);
            }
            props.setIsDetailCardOpen(false);
        }

        setTimeout(() => setCenterProject(index), 300);
    }

    useEffect(() => {
        if (currentSlide.current >= props.cards.length) {
            if (props.cards.length > 0) {
                setCenterProject(props.cards.length - 1);
                setGoToSlide(props.cards.length - 1);
            }
        }
    }, [props.cards]);

    useEffect(() => {
        if (!props.isDetailCardOpen) {
            currentSlide.current = goToSlide;
        }
    }, [goToSlide]);

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
};

export default CustomCarousel;
