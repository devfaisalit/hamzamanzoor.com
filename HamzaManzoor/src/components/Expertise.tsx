import pen from "../assets/img/pen.png";
import Container from "../pages/Container";
function Expertise() {
  return (
    <Container>
<section id="expertise" className=" h-[100vh] text-[#ffffffe6] relative z-10 space-y-5 md:space-y-10 lg:space-y-16 justify-center flex flex-col ">
      <h1 className="text-[34px] md:text-7xl lg:text-[100px] md:tracking-wider text-center md:text-start font-Varino text-[#ffffff2a] font-normal">
        My Expertise
      </h1>
      <h2 className="text-white font-Varino text-medium text-center text-2xl md:text-4xl">
        WHAT I DO
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-evenly space-y-5 sm:space-y-10 md:space-y-5 w-full">
        {/* BOX #1 */}
        <ul className="border border-white md:mt-5 flex justify-evenly items-center -ml-4 sm:ml-0  w-[210px] sm:w-[298px] h-[65px] sm:h-[82px] px-[2px]">
          <li className="border-[5px] border-white border-t-[12px] ml-1 sm:ml-0 w-[40px] md:w-[50px] h-[40px]"></li>
          <li className="text-white sm:tracking-widest font-bold">
            Web Development
          </li>
        </ul>
        {/* BOX #2 */}
        <ul className="border border-white flex justify-evenly ml-10 sm:ml-20 md:ml-0 items-center w-[210px] sm:w-[298px] h-[65px] sm:h-[82px]">
          <li className="border-[5px] border-white border-y-[10px] w-[25.47px] h-[40px]"></li>
          <li className="text-white sm:tracking-widest font-bold">
            APP Development
          </li>
        </ul>
        {/* BOX #3 */}
        <ul className="border border-white flex justify-evenly items-center -ml-4 sm:ml-0  w-[210px] sm:w-[298px] h-[65px] sm:h-[82px]">
          <li className="w-[50px] h-[40px]">
            <img src={pen} alt="" />
          </li>
          <li className="text-white  sm:tracking-widest font-bold">
            UI / UX
          </li>
        </ul>
      </div>
    </section>
    </Container>
  );
}

export default Expertise;
