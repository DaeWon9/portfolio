import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { useRecoilState } from "recoil";
import { WINDOW_SIZE } from "../recoil/Atoms";
import Introduction from "../components/slides/Introduction";
import Career from "../components/slides/Career";
import Skills from "../components/slides/Skills";
import Project from "../components/slides/Project";
import NavBar from "../components/common/NavBar";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Home.css";

const Home = () => {
    const [swiper, setSwiper] = useState();
    const [isDetailCardOpen, setIsDetailCardOpen] = useState(false);
    const [windowSize, setWindowSize] = useRecoilState(WINDOW_SIZE);

    const handleResize = () => {
        let width = window.innerWidth;
        setWindowSize({ width: width });
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (swiper) {
            if (isDetailCardOpen) {
                swiper.mousewheel.disable();
                swiper.allowTouchMove = false;
            } else {
                swiper.mousewheel.enable();
                swiper.allowTouchMove = true;
            }
        }
    }, [isDetailCardOpen]);

    useEffect(() => {
        if (swiper) {
            if (windowSize.width > 480) {
                swiper.allowTouchMove = false;
            } else {
                swiper.allowTouchMove = true;
            }
        }
    }, [windowSize.width]);

    return (
        <>
            <NavBar swiper={swiper} />
            <Swiper
                onSwiper={(swiper) => {
                    setSwiper(swiper);
                }}
                direction={"vertical"}
                slidesPerView={1}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                allowTouchMove={false}
                speed={1000}
                modules={[Mousewheel, Pagination]}
                className="slider"
            >
                <SwiperSlide>{({ isActive }) => <Introduction isActive={isActive} />}</SwiperSlide>

                <SwiperSlide>
                    <Career />
                </SwiperSlide>

                <SwiperSlide>
                    {({ isActive }) => (
                        <Skills isActive={isActive} swiper={swiper} setIsDetailCardOpen={setIsDetailCardOpen} />
                    )}
                </SwiperSlide>

                <SwiperSlide>
                    <Project isDetailCardOpen={isDetailCardOpen} setIsDetailCardOpen={setIsDetailCardOpen} />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Home;
