import React from 'react'
import {BsInstagram} from "react-icons/bs"
import {CiYoutube} from "react-icons/ci"
import {FiFacebook} from "react-icons/fi"
import {FiTwitter} from "react-icons/fi"
import logo from "../assets/img/in.png"

function Boxes() {
  return (
    <div>
      <ul className='flex space-x-2 sm:space-x-4 sm:pr-5'>
    <a href='https://www.linkedin.com/company/hm-zones/?original_referer=https%3A%2F%2Fhmzones.com%2F' className=' bg-[linear-gradient(135deg,#272727,#474747,#3D3D3D)] border-[2px] border-[#3D3D3D] border-opacity-80 shadow-lg shadow-black w-[36px] md:w-[49px] h-[36px] md:h-[49px] flex items-center justify-center text-white text-opacity-80 '><img src={logo} alt="" className='w-[15px] md:w-auto' /></a>
    <a href='https://www.facebook.com/HMZones1' className=' bg-[linear-gradient(135deg,#272727,#474747,#3D3D3D)] border-[2px] border-[#3D3D3D] border-opacity-80 shadow-lg shadow-black w-[36px] md:w-[49px] h-[36px] md:h-[49px] text-[15px] md:text-[20px] flex items-center justify-center text-white text-opacity-80 '> <FiFacebook/></a>
    <a href='https://www.instagram.com/hmzones/' className=' bg-[linear-gradient(135deg,#272727,#474747,#3D3D3D)] border-[2px] border-[#3D3D3D] border-opacity-80 shadow-lg shadow-black w-[36px] md:w-[49px] h-[36px] md:h-[49px] text-[15px] md:text-[20px] flex items-center justify-center text-white text-opacity-80 '> <BsInstagram/></a>
    <a href='https://twitter.com/HmZones' className=' bg-[linear-gradient(135deg,#272727,#474747,#3D3D3D)] border-[2px] border-[#3D3D3D] border-opacity-80 shadow-lg shadow-black w-[36px] md:w-[49px] h-[36px] md:h-[49px] text-[15px] md:text-[20px] flex items-center justify-center text-white text-opacity-80 '> <FiTwitter/></a>
    <li
     className=' bg-[linear-gradient(135deg,#272727,#474747,#3D3D3D)] border-[2px] border-[#3D3D3D] border-opacity-80 shadow-lg shadow-black w-[36px] md:w-[49px] h-[36px] md:h-[49px] text-[15px] md:text-[20px] flex items-center justify-center text-white text-opacity-80 '> <CiYoutube/></li>
</ul>
    </div>
  )
}

export default Boxes
