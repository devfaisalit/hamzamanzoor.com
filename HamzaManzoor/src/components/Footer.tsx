import hamza from "../assets/img/hamza.png"
import Boxes from './Boxes'

function Footer() {
  return (
    <div>

    <div className='bg-[#373737] bg-opacity-80 relative z-10 px-2 pt-5 md:pt-20 flex-wrap h-[420px] md:h-[495px] w-full flex justify-center'>
        <footer className='px-5  md:px-0 font-poppins flex-col sm:flex-row flex items-start sm:items-center justify-evenly w-full'>
<div className='space-y-5 md:space-y-20'>
<h2 className='text-[20px] flex items-center font-medium text-white'><img src={hamza} alt=""  className='h-[40px] md:h-[55px] w-[40px] md:w-[55px] rounded-full '/> Hamza Manzoor</h2>

<div className=" hidden sm:block">
<Boxes/>
</div>
</div>

<main className='w-full sm:w-[450px] border-l mt-4 sm:mt-0 border-white border-opacity-20 h-[240px] md:h-[280px] text-[14px] sm:text-[16px] font-poppns font-medium tracking-wider text-white text-opacity-80 flex justify-between sm:justify-between items-center pl-8 sm:pl-10'>
    <ul className='space-y-10'>
      
    <a href="#home"><li className='hover:cursor-pointer hover:text-[#00B7DF]'>Home</li></a>
    <a href="#about"><li className='hover:cursor-pointer pt-3 hover:text-[#00B7DF]'>About</li></a>
    <a href="#expertise"><li className='hover:cursor-pointer pt-3 hover:text-[#00B7DF]'>My Skills</li></a>
    </ul>
    <ul className='space-y-5 basis-1/2 sm:basis-auto'>
    <a href="#portfolio"><li className='hover:cursor-pointer hover:text-[#00B7DF]'>My Portfolio</li></a>
       <a href="#education"> <li className='hover:cursor-pointer pt-3 hover:text-[#00B7DF]'>My Education</li></a>
        <a><li className='hover:cursor-pointer hover:text-[#00B7DF] pt-3'>My Experience</li></a>
    </ul>
</main>
<li className='-mt-20 sm:hidden pl-8'>
<Boxes/>
  </li>        </footer>
      <h1 className='text-[10px]  font-light sm:text-[28px] sm:font-light font-poppins w-full mx-10 md:w-[1045px] text-center border-t border-white border-opacity-20 text-white text-opacity-30 pt-5 mt-8 md:mt-0 '>© 2023. All rights reserved by HM-Zones</h1>
    </div>
    </div>
  )
}

export default Footer
