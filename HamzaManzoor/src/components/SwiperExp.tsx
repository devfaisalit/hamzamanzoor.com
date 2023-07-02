import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";

import { useContext, useEffect } from "react";
import { FirebaseContext } from "../context/Firebase";
import { InfoProps } from "../Confige/Types";


function Swiped() {
  
  const { InfoData , getInfoData} = useContext(FirebaseContext);
  useEffect(() => {
    getInfoData();
  }, []);
  
  return (
    <section className=" relative z-10  md:hidden flex justify-center pt-2 md:pt-0">
      <Swiper
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay]}
        className=" space-y-20 w-[550px] flex justify-center items-center"
      >
        {InfoData.map((obj:InfoProps) => (

          <SwiperSlide key={obj.skill}>

          <div className=" max-w-[491px] p-6 border-y border-opacity-30 space-y-5 py-5 border-white">
            <h1 className="text-[28px] text-[#00B7DF] font-poppins font-medium text-opacity-80">
              {obj.skill}
            </h1>
            <h3 className=" text-white text-[16px] font-poppins font-semibold text-opacity-80 ">
              {obj.company}
            </h3>
            <div className="text-[16px] flex flex-col items-end font-poppins text-white font-normal text-opacity-60">
              {obj.date} <br />
              {obj.time}
              <ul className="border text-white mt-4 mb-0 border-white w-[112px] h-[47px] flex justify-center items-center ">
                {obj.box}
              </ul>
            </div>
          </div>
        </SwiperSlide>
          ))
          }
        
      </Swiper>
    </section>
  );
}
export default Swiped;
