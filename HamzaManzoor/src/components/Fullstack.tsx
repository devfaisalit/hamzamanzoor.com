import React from "react";
import Container from "../pages/Container";

function Fullstack() {
  return (
        <Container>
    <section id="home" className=" relative  flex  text-white justify-around min-h-screen">
        <div className="text-white space-y-10 text-center flex flex-col justify-center items-center w-full sm:tracking-widest">
          <h1 className="md:text-[70px] lg:text-[80px] text-[30px] font-Varino pr-[3px] sm:font-semibold l font-medium">
            Full-Stack Developer
          </h1>
          <h2 className="text-2xl md:text-4xl font-Varino font-light sm:font-normal">
            Hamza Manzoor
          </h2>
          <button className="text-[16px] relative top-16 w-[200px] h-[53px] bg-white bg-opacity-5 border-2 border-[#00B7DF] text-[#00B7DF] border-opacity-80 rounded-[100px] font-medium">
            Download CV
          </button>
        </div>
    </section>
        </Container>
  );
}

export default Fullstack;
