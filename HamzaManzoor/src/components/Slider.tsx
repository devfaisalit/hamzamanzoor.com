// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
// import required modules
import { Link } from "react-router-dom";
import { AiOutlineLink } from "react-icons/ai";
import AppIcons from "../icons/AppIcons";

import { useContext, useEffect } from "react";
import { FirebaseContext } from "../context/Firebase";
import { projectsProps } from "../Confige/Types";

export default function Slide() {
  const { projectsData , getProjectData} = useContext(FirebaseContext);
  useEffect(() => {
    getProjectData();
  }, []);
  
  return (
    <>
      <div className="m-2 md:hidden relative group">
        <div className="flex justify-center items-center z-50 transition duration-300 ease-in-out text-white">
          <div className="flex flex-wrap w-full items-center justify-center">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="w-full"
            >
              {projectsData.map((obj: projectsProps) => (
                <SwiperSlide key={obj.title}>
                    <div className="absolute cursor-pointer z-20 duration-500 hover:opacity-100 hover:bg-gradient-to-t from-[#000000a2] w-full h-full flex-col text-center flex justify-center items-center opacity-0">
                      <div className=" font-semibold text-xl py-2">
                        {obj.title}
                      </div>
                      <div className="border-4 bg-slate-600 bg-opacity-70 hover:bg-opacity-90 border-transparent mx-auto my-3 rounded-full w-14 h-14 flex items-center justify-center">
                        <Link to={obj.link}>
                          <AiOutlineLink className=" text-center h-10 w-10" />
                        </Link>
                      </div>
                      <div className=" flex justify-evenly w-full items-center">
                        {(obj.tech || []).map((obj: any) => (
                          <div key={obj.id + obj}>{AppIcons(obj, 35)}</div>
                        ))}
                      </div>

                      <div className="text-sm py-2 text-center">{obj.catg}</div>
                    </div>
                    <div>
                      {
                        <img
                          key={Math.random()}
                          src={obj.img}
                          className="w-full"
                        />
                      }
                    </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
