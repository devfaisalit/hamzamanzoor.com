import React from "react";
import Container from "../pages/Container";
 
function Aboutme() {
  return (
    <section id="about" className=" px-[3px]  text-[#ffffffe6] h-screen relative flex justify-center pt-12 items-center md:items-start flex-col  z-0">
      <Container>

<fieldset className="border-2 border-white px-2 border-opacity-40 md:border-none">
<legend className="text-4xl md:text-7xl lg:text-[100px] tracking-wider font-Varino text-[#ffffff2a]  font-normal">
        About me
      </legend>
      <div className=" md:w-full items-start space-y-5 -mt-6 sm:-mt-0  py-6  flex flex-col">
        <h2 className="text-2xl md:text-4xl font-Varino text-opacity-100 font-medium">
          KNOW WE MORE
        </h2>
        <h3 className="text-xl sm:text-2xl">
          Every great design begin with an even
        </h3>

        <p className="max-w-[800px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          dicta similique alias impedit quia, libero ullam sed nam veritatis
          nulla vitae consequatur repudiandae reiciendis officiis ut laudantium,
          quo repellendus quisquam. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit.{" "}
        </p>
      </div>

</fieldset>
      </Container>
    </section>
  );
}

export default Aboutme;
