import React, { useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper';
import Introduction from "../components/slides/Introduction";
import Career from "../components/slides/Career";
import Skills from "../components/slides/Skills";
import Project from "../components/slides/Project";
import NavBar from "../components/common/NavBar";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "./Home.css"

const Home = () => {
    const [swiper, setSwiper] = useState()
    const [isDetailCardOpen, setIsDetailCardOpen] = useState(false)

    useEffect( () => {
        if (swiper){
            if (isDetailCardOpen){
                swiper.mousewheel.disable()
                swiper.allowTouchMove = false
            }
            else{
                swiper.mousewheel.enable()
                swiper.allowTouchMove = true
            }
        }

    }, [isDetailCardOpen])

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
            mousewheel={true}
            pagination={{
                clickable: true,
            }}
            allowTouchMove={true}
            speed={1000}
            modules={[Mousewheel, Pagination]}
            className="slider"
        >
            <SwiperSlide>
                {({ isActive }) => <Introduction isActive={isActive}/>}
            </SwiperSlide>

            <SwiperSlide>
                <Career />
            </SwiperSlide>
            
            <SwiperSlide>
                {({ isActive }) => <Skills isActive={isActive} swiper={swiper} setIsDetailCardOpen={setIsDetailCardOpen} />}
            </SwiperSlide>

            <SwiperSlide>
                <Project 
                    isDetailCardOpen = {isDetailCardOpen}
                    setIsDetailCardOpen = {setIsDetailCardOpen}
                />
            </SwiperSlide>
        </Swiper>
        </>
    )
}

export default Home;