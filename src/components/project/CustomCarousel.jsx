import Carousel from "react-spring-3d-carousel";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { config } from "react-spring";

const CustomCarousel = (props) => {

    const table = props.cards.map((element, index) => {
        return { ...element, onClick: () => onClickCard(index) };
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState(0);
    const [cards] = useState(table);
    const currentSlide = useRef(goToSlide);
    const navigate = useNavigate();

    function onClickCard(index){
        if (currentSlide.current === index){
            // if (cards[index].key === WORKSPACE_ADD_KEY){
            //     props.setModalIsOpen(true)
            //     document.body.style.overflow = "hidden";
            // }
            // else {
            //     setWorkspaceId(cards[index].key)
            //     setAccessedDepartment({
            //         id: cards[index].key  + "_1",
            //         name: "📢 공지방"
            //     })
            //     localStorage.setItem('accessedWorkspaceId', cards[index].key)
            //     localStorage.setItem('accessedDepartmentId', cards[index].key)
            //     navigate("/workspace/" + cards[index].key + "/chat/department/" + cards[index].key) // 로그인한 유저 정보, 워크스페이스 정보 state 넘기기 or recoil
            // }
        }
        else{
            setGoToSlide(index)
        }
    }
    
    useEffect(() =>{
        currentSlide.current = goToSlide;
    }, [goToSlide])

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);

    return (
        <div
        style={{ width: props.width, height: props.height, margin: props.margin }}
        >
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