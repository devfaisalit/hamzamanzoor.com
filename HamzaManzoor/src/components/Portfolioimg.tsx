// import required modules
import { Link } from "react-router-dom";
import { AiOutlineLink } from "react-icons/ai";
import AppIcons from "../icons/AppIcons";

import { useContext, useEffect } from "react";
import { FirebaseContext } from "../context/Firebase";
import { projectsProps } from "../Confige/Types";
export default function Images() {

  const { projectsData , getProjectData} = useContext(FirebaseContext);
  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <>
      <div className="m-2 hidden md:block relative group">
        <div className="flex justify-center items-center z-50 transition duration-300 ease-in-out text-white">
          <div className="flex flex-wrap items-center justify-center">
           
              {projectsData.map((obj: projectsProps) => (
                <div key={obj.title}>
                    <div className="absolute cursor-pointer z-20 duration-500 lg:h-[346px] hover:opacity-100 hover:bg-gradient-to-t from-[#000000b8] lg:w-[380px] hover:bg-[#0000001d] m-5 h-[495px] md:w-[550px] lg:ml-6 lg:mt-10 flex-col text-center flex justify-center items-center opacity-0">
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
                          className="m-5 lg:m-6 lg:py-5 max-w-[550px] lg:max-w-[380px]"
                        />
                      }
                    </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
