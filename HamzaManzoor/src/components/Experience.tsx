import React from 'react'
import Container from '../pages/Container'
import Swiped from './SwiperExp';

import { useContext, useEffect } from "react";
import { FirebaseContext } from "../context/Firebase";
import { InfoProps } from "../Confige/Types";

function Experience() {

  const { InfoData , getInfoData} = useContext(FirebaseContext);
  useEffect(() => {
    getInfoData();
  }, []);

  return (
    <Container>
     <div>
     <section id='experience' className=" relative z-10 hidden md:flex flex-wrap tracking-wider leading-6 justify-center items-center pt-16 md:space-x-10 ">
{
  InfoData.map((obj:InfoProps) => (

    <div key={obj.skill} className=" max-w-[491px] ml-10 px-5 mb-10 pb-6 mt-8 relative border-y border-opacity-30  border-white">
      <h1 className="text-[28px] flex w-full justify-between text-[#00B7DF] font-poppins font-medium text-opacity-80 pt-6">
      {obj.skill}
        <ul className="border text-[16px] text-white  mb-0 border-white w-[112px] h-[47px] flex justify-center items-center ">
          {obj.box}
        </ul>
      </h1>
      <h3 className=" text-white text-[16px] font-poppins font-semibold text-opacity-80 ">
      {obj.company}
      </h3>
      <p className="text-[16px] font-poppins pt-5 text-white font-normal text-opacity-60">
      {obj.date} <br />
{obj.time}      </p>
    </div>
  ))
}
    
  </section>
  <Swiped/>
     </div>
    </Container>
  )
}

export default Experience
