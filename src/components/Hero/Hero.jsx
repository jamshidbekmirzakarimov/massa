import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Hero.scss";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import TextImg from "../../assets/svg/textimg.svg";
import arrowRight from "../../assets/svg/arrowRight.svg";
import heroImg from "../../assets/images/heroImg.png";
const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="h-[496px] w-full mt-[80px] relative">
          <div className="hero-section pt-[80px] px-[80px] ">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]} // Autoplay modulini import qilish
              autoplay={{ delay: 1000 }} // autoplay eigizini true qilib berish
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex relative">
                  <img src={TextImg} alt="" />
                  <button className="flex items-center gap-[32px] absolute bottom-0 right-[320px] max-w-[300px] bg-[#265AD9] py-[26px] px-[37px] rounded-[110px] text-[24px] font-semibold uppercase leading-normal text-black">
                    view now all
                    <img src={arrowRight} alt="" />
                  </button>
                </div>
                <img src={heroImg} alt="" />
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
