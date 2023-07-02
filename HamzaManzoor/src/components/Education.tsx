import React from "react";
import Container from "../pages/Container";
import Swipe from "./SwiperEdu";
import { useContext, useEffect } from "react";
import { FirebaseContext } from "../context/Firebase";
import { clientProps } from "../Confige/Types";

function Education() {
  const { clientData , getClientData} = useContext(FirebaseContext);
  useEffect(() => {
    getClientData();
  }, []);
  return (
    <Container>
      <div>
        <section
          id="education"
          className="relative z-10 hidden md:flex flex-wrap tracking-wider leading-6 justify-center items-center md:space-x-10 space-y-20"
        >
          {
             clientData.map((obj:clientProps) => (

              <div key={obj.cls} className=" max-w-[491px] md:max-h-[360px] mt-20 lg:ml-10 border-y border-opacity-30 space-y-7 py-6 border-white">
            <h1 className="text-[28px] text-[#00B7DF] font-poppins font-medium text-opacity-80">
              {obj.cls}
            </h1>
            <h3 className=" text-white text-[16px] font-poppins font-semibold text-opacity-80 ">
              {obj.date}
            </h3>
            <div className="text-[16px] flex flex-col items-end font-poppins text-white font-normal text-opacity-60">
{obj.ed}
              <ul className="border text-white mt-4 mb-0 border-white w-[112px] h-[47px] flex justify-center items-center ">
               {obj.box}
              </ul>
            </div>
          </div>
          
          ))
        }
        </section>
        <Swipe />
      </div>
    </Container>
  );
}

export default Education;
