import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MdSignalCellularAlt } from "react-icons/md";
import { SlBookOpen } from "react-icons/sl";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import hamza from "../assets/img/hamza.png";
import circle from "../assets/img/cirlce.svg";
import portfolio from "../assets/img/portfolio.png";
import { ReactElement, useState, FC } from "react";
const Header: FC<{ children: ReactElement[] }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="">
        {/* fisrt nav */}
        <nav className="bg-[#00B7DF] fixed overflow-hidden z-30 w-[150px] text-white hidden  md:flex flex-col justify-around text-3xl items-center list-none h-screen ">
          <li className="h-[118px] hover:cursor-pointer border-b border-white border-opacity-30 hover:space-x-5 flex justify-between w-[500px] text-xl hover:shadow-[inset_20px_3px_10px_1px_rgba(0,0,0,0.8)] hover:w-full pr-[215px] hover:pl-[70px] duration-300 items-center ">
            <h1>Hamza,Manzoor</h1>
            <ol className="border border-opacity-30 w-[70px] h-[70px] overflow-hidden border-white rounded-full">
              <img src={hamza} className="w-[55px] h-[66px]" />
            </ol>
          </li>

          <a
            href="#home"
            className="h-[100px] hover:cursor-pointer border-b border-white border-opacity-30 flex justify-between w-[310px] hover:shadow-[inset_20px_3px_10px_1px_rgba(0,0,0,0.8)] hover:w-full pr-36 hover:pl-16 duration-300 items-center "
          >
            <h1>Home</h1>
            <li className="w-full h-full hover:text-[0px] flex justify-end items-center">
              <AiOutlineHome />
            </li>
          </a>

          <a
            href="#about"
            className="h-[100px] hover:cursor-pointer border-b border-white border-opacity-30 flex justify-between w-[400px] hover:shadow-[inset_20px_3px_10px_1px_rgba(0,0,0,0.8)] hover:w-full pr-48 hover:pl-16 duration-300 items-center "
          >
            <h1>AboutME</h1>
            <li className="w-full h-full hover:text-[0px] flex justify-end items-center">
              <BsPerson />
            </li>
          </a>

          <a
            href="#expertise"
            className="h-[100px] hover:cursor-pointer border-b border-white border-opacity-30 flex justify-between w-[410px] hover:shadow-[inset_20px_3px_10px_1px_rgba(0,0,0,0.8)] hover:space-x-7  hover:w-full pr-[195px] hover:pl-[70px] duration-300 items-center "
          >
            <h1>Expertise</h1>
            <li className="w-full h-full hover:text-[0px] flex justify-end items-center">
              <MdSignalCellularAlt className="border" />
            </li>
          </a>

          <a
            href="#portfolio"
            className="h-[100px] hover:cursor-pointer border-b border-white border-opacity-30 flex justify-between w-[375px] hover:shadow-[inset_20px_3px_10px_1px_rgba(0,0,0,0.8)] hover:w-full pr-[180px] hover:pl-16 duration-300 items-center "
          >
            <h1>Portfolio</h1>
            <li className="w-full h-full hover:text-[0px] flex justify-end items-center">
              <img src={portfolio} />
            </li>
          </a>
          <a
            href="#education"
            className="h-[100px] hover:cursor-pointer border-b border-white border-opacity-30 flex justify-between w-[440px] hover:shadow-[inset_20px_3px_10px_1px_rgba(0,0,0,0.8)] hover:w-full pr-[210px] hover:pl-16 duration-300 items-center "
          >
            <h1>Experience</h1>
            <li className="w-full h-full hover:text-[0px] flex justify-end items-center">
              <img src={circle} />
            </li>
          </a>
          <a
            href="#education"
            className="h-[100px] hover:cursor-pointer border-b border-white border-opacity-30 flex justify-between w-[410px] hover:shadow-[inset_20px_3px_10px_1px_rgba(0,0,0,0.8)] hover:w-full pr-48 hover:pl-16 duration-300 items-center "
          >
            {" "}
            <h1>Education</h1>
            <li className="w-full h-full hover:text-[0px] flex justify-end items-center">
              <SlBookOpen />
            </li>
          </a>
          <a
            href="#contactme"
            className="h-[100px] hover:cursor-pointer border-b border-white border-opacity-30 flex justify-between w-[440px] hover:shadow-[inset_20px_3px_10px_1px_rgba(0,0,0,0.8)] hover:w-full pr-52 hover:pl-16 duration-300 items-center "
          >
            <h1>ContactMe</h1>
            <li className="w-full h-full hover:text-[0px] flex justify-end items-center">
              <MdOutlineLocalPhone />
            </li>{" "}
          </a>
        </nav>
        {/* second nav */}
        <button
          onClick={() => setOpen(!open)}
          className="fixed text-2xl flex justify-center items-center z-20 md:hidden text-white w-[50px] h-[50px] bg-[#00B7DF]  "
        >
          <GiHamburgerMenu />
        </button>
        <nav
          className={`bg-[#00B7DF] text-white w-[255px] tracking-wider md:hidden fixed z-20 flex flex-col justify-center text-2xl items-center list-none px-4 pt-4 pb-2 h-screen ${
            open ? "max-w-[360px]" : "hidden"
          }`}
        >
          <h5 className="w-full border-b border-opacity-30 border-white justify-end flex">
            <button
              onClick={() => setOpen(!open)}
              className=" text-4xl h-[50px] -mt-3 mb-2 pl-3 border-l border-opacity-30 border-white w-[50px] "
            >
              <IoMdClose />
            </button>
          </h5>
          <li className="h-[90px] border-b border-white text-[14px] font-semibold border-opacity-30 flex justify-start items-center w-full">
            <ol className="border border-opacity-30 mr-4 md:w-[70px] w-[45px] h-[45px] md:h-[70px] overflow-hidden border-white rounded-full">
              <img src={hamza} className="w-[36px] h-[42px]" />
            </ol>
            Hamza Manzoor
          </li>
          <a
            href="#home"
            className="h-[70px] border-b border-white border-opacity-30 text-[14px] font-medium flex justify-start items-center w-full"
          >
            <AiOutlineHome className="mx-5 text-[20px]" />
            Home
          </a>
          <a
            href="#about"
            className="h-[70px] border-b border-white border-opacity-30 text-[14px] font-medium flex justify-start items-center w-full"
          >
            <BsPerson className="mx-5 text-[20px]" />
            AboutMe
          </a>
          <a
            href="#expertise"
            className="h-[70px] border-b border-white border-opacity-30 text-[14px] font-medium flex justify-start items-center w-full"
          >
            <img src={circle} className="mx-5 w-[20px]" />
            My Skills
          </a>
          <a
            href="#portfolio"
            className="h-[70px] border-b border-white border-opacity-30 text-[14px] font-medium flex justify-start items-center w-full"
          >
            <img src={portfolio} className="mx-5 text-[20px]" />
            My Porfolio
          </a>
          <a
            href="#education"
            className="h-[70px] border-b border-white border-opacity-30 text-[14px] font-medium flex justify-start items-center w-full"
          >
            <SlBookOpen className="mx-5 text-[20px]" />
            My Experience
          </a>
          <a
            href="#education"
            className="h-[70px] border-b border-white border-opacity-30 text-[14px] font-medium flex justify-start items-center w-full"
          >
            <MdSignalCellularAlt className="mx-5 border text-[20px]" />
            My Education
          </a>
          <a
            href="#contactme"
            className="h-[70px] border-b border-white border-opacity-30 text-[14px] font-medium flex justify-start items-center w-full"
          >
            <MdOutlineLocalPhone className="mx-5 text-[20px]" />
            ContactMe
          </a>
          <a
            href="#contactme"
            className="h-[100px] w-full"
          ></a>
        </nav>
        <ol className="list-none h-screen z-40 flex flex-col pb-6 mr-2 justify-center space-y-3 fixed right-0">
          <li className="w-[10px] h-[24px] bg-opacity-20 bg-white hover:bg-[#00B7DF]"></li>
          <li className="w-[10px] h-[24px] bg-opacity-20 bg-white hover:bg-[#00B7DF]"></li>
          <li className="w-[10px] h-[24px] bg-opacity-20 bg-white hover:bg-[#00B7DF]"></li>
          <li className="w-[10px] h-[24px] bg-opacity-20 bg-white hover:bg-[#00B7DF]"></li>
          <li className="w-[10px] h-[24px] bg-opacity-20 bg-white hover:bg-[#00B7DF]"></li>
          <li className="w-[10px] h-[24px] bg-opacity-20 bg-white hover:bg-[#00B7DF]"></li>
          <li className="w-[10px] h-[24px] bg-opacity-20 bg-white hover:bg-[#00B7DF]"></li>
        </ol>
      </header>
      <div className="md:pl-[150px] bg-black bg-opacity-30 ">{children}</div>
    </>
  );
};

export default Header;
