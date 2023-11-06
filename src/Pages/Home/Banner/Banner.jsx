import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
    return (
        <div>
            <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {/* Slider-1 */}
        <SwiperSlide>
          <div
            className="hero min-h-screen "
            style={{ backgroundImage: "url(https://i.imgur.com/hDhmvKK.jpg)" }}
          >
            <div className=" mr-56">
              <div className="max-w-md my-4">
                <h1 className="  text-3xl mb-3 lg:text-6xl font-bold">
                Solution For <br /> All Home Service
                </h1>
                <p className="  font-serif">
                Home services encompass a variety of tasks performed at home, such as cleaning, repairs, maintenance, and renovations, enhancing domestic comfort and functionality.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slider-2 */}
        <SwiperSlide>     
          <div
            className="hero min-h-screen "
            style={{ backgroundImage: "url(https://i.imgur.com/td7qMNZ.jpg)" }}
          >
            <div className=" bg-gradient-to-r from-stone-900">
              <div className="max-w-md my-4">
                <h1 className="text-white  text-3xl mb-3 lg:text-6xl font-bold">
                Solution For <br /> All Home Service
                </h1>
                <p className="text-white  font-serif">
                Home services encompass a variety of tasks performed at home, such as cleaning, repairs, maintenance, and renovations, enhancing domestic comfort and functionality.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        {/* Slider-3 */}
        <SwiperSlide>
          <div
            className="hero min-h-screen "
            style={{ backgroundImage: "url(https://i.imgur.com/NMX3Fx1.jpg)" }}
          >
            <div className=" mr-56">
              <div className="max-w-md my-4">
                <h1 className="  text-3xl mb-3 lg:text-6xl font-bold">
                Solution For <br /> All Home Service
                </h1>
                <p className="  font-serif">
                Home services encompass a variety of tasks performed at home, such as cleaning, repairs, maintenance, and renovations, enhancing domestic comfort and functionality.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide> 
      </Swiper>
        </div>
    );
};

export default Banner;