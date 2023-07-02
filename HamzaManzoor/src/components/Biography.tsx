import React from "react";
// import Swiped from "./SwiperEdu";
import { Link } from 'react-router-dom';
import Container from "../pages/Container";

function Biography() {
  return (
      <Container>
    <section  id="education" className="relative pt-36 sm:pt-20 md:pt-12 lg:pt-10 xl:pt-[80px] space-y-5 lg:space-y-10">
      <h1 className="text-[33px] md:text-7xl lg:text-[100px] md:tracking-widest text-center md:text-start font-Varino text-[#ffffff2a] font-normal">
        Biography
      </h1>
      <h2 className="text-white text-2xl md:text-4xl font-Varino font-medium text-center">
        EDUCATION & EXPERIENCE
      </h2>
      <div className="w-full lg:flex justify-evenly items-center px-2 md:px-0">
        <div className="h-[54px] sm:h-[84px] border space-x-3 lg:w-[850px] px-2 sm:px-4 border-opacity-30 flex items-center justify-evenly text-white border-white ">
          
         <Link className="border hover:border-[#00B7DF] w-[146px] sm:w-[300px] h-[32px] sm:h-[60px] hover:text-[#00B7DF] hover:bg-white active:bg-opacity-0 hover:bg-opacity-10 text-opacity-80 justify-center flex items-center" to="Education">My Education</Link>
          
          
          <Link className="border hover:border-[#00B7DF] w-[146px] sm:w-[300px] h-[32px]  sm:h-[60px] hover:text-[#00B7DF] hover:bg-white active:bg-opacity-0 hover:bg-opacity-10 text-opacity-80 justify-center flex items-center" to="Expertise">My Experience</Link>
         
        </div>
      {/* <Swiped/> */}
      </div>
    </section>
      </Container>
  );
}

export default Biography;
