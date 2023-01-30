import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper';
import Introduction from "../components/slides/Introduction";
import Career from "../components/slides/Career";
import Project from "../components/slides/Project";
import NavBar from "../components/common/NavBar";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "./Home.css"

const Home = () => {
    const [swiper, setSwiper] = useState()

    return(
        <>
        <NavBar 
            swiper = {swiper}
        />
        <Swiper
            onSwiper={(swiper) => {
                setSwiper(swiper)
            }}
            direction={"vertical"}
            slidesPerView={1}
            // spaceBetween={30}
            mousewheel={true}
            pagination={{
                clickable: true,
            }}
            speed={1000}
            modules={[Mousewheel, Pagination]}
            className="slider"
        >
            <SwiperSlide>
                <Introduction />
            </SwiperSlide>
            
            <SwiperSlide>
                <Career />
            </SwiperSlide>

            <SwiperSlide>
                <Project 
                />
            </SwiperSlide>
        </Swiper>
        </>
    )
}

export default Home;