import Container from '../pages/Container'
import Images from './Portfolioimg'
import Slide from './Slider'

function Portfolio() {
  return (
    <section id='portfolio' className='relative z-10 justify-start pt-20 sm:pt-16 pb-16 md:pt-1 lg:pt-10 xl:pt-16 flex flex-col'>
    <Container>
      <div className='space-y-6 md:space-y-5 lg:space-y-9 lg:pb-2 pb-4 sm:pb-0'>
    <h1 className='text-[33px] md:text-7xl lg:text-[100px] sm:tracking-widest font-Varino text-center md:text-start text-[#ffffff2a] font-normal'>
      Portfolio
    </h1>
    <h2 className='text-white text-2xl md:text-4xl font-medium font-Varino text-center'>MY WORK</h2>
    <ul className='text-white text-[16px] font-medium justify-evenly lg:justify-center lg:space-x-[120px] flex flex-wrap w-full'>
      <li className=' cursor-pointer'>All</li>
      <li className='flex cursor-pointer'>Web <h1 className='pl-2 hidden sm:block cursor-pointer'> Development</h1></li>
      <li className='flex cursor-pointer'>App <h1 className='pl-2 hidden sm:block cursor-pointer'>Development </h1></li>
      <li className='flex cursor-pointer'>Ui & UX  <h1 className='pl-2 hidden sm:block cursor-pointer'>Design</h1></li>
    </ul>
    </div>
    </Container>
    <Images/>
    <Slide/>
    </section>
  )
}

export default Portfolio
