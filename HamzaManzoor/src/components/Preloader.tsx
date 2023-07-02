import React from "react";
import { BarLoader } from "react-spinners";
export default function Preloader() {
    return (
        <div className=' text-white space-y-5 flex-col font-Varino flex justify-center fixed bg-black left-0 top-0 items-center w-full h-full'>
            <h1 className='text-[34px]'>
                Loading...
            </h1>
            <p className="w-[240px] sm:w-auto overflow-hidden ">
            <BarLoader color="#36d7b7" height={'25px'} width={'300px'} />
            </p>
        </div>
    )
}
