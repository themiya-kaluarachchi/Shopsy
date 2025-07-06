import React from 'react'
import Image1 from "../../assets/hero/women.png"
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/sale.png"
import Slider from "react-slick"

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "upto 50% off on all Men's Wear",
    description: 
    "lorem his life afafua afhafha afjaifja a haiha afuhf ahfai a hak  ah ah aha ahfafhafafha a ha ha hfahfjafha  afhafhafha",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description: 
    "lorem his life afafua afhafha afjaifja a haiha afuhf ahfai a hak  ah ah aha ahfafhafafha a ha ha hfahfjafha  afhafhafha",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description: 
    "lorem his life afafua afhafha afjaifja a haiha afuhf ahfai a hak  ah ah aha ahfafhafafha a ha ha hfahfjafha  afhafhafha",
  },
]

const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
      {/* background pattern */}
      <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-9'></div>
      {/* hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider>
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              {/* text content section */}
              <div className='relative z-10 flex flex-col justify-center order-2 gap-4 pt-12 text-center sm:pt-0 sm:text-left sm:order-1'> 
                <h1 className='text-5xl font-bold sm:text-6xl lg:text-7xl'>Lorem ipsum dolor sit.</h1>
                <p className='text-sm'>
                  lorem afa kfalfa kalfkamma mdal akmdal dmadma ddmalda dkmalda adka paad lad dkad akdad amdamda?
                </p>
                <div>
                    <button className='px-4 py-2 text-white duration-200 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105'>
                        Order Now
                    </button>
                </div>
              </div> 
              {/* image section */}
              <div className='order-1 sm:order-2'> 
                <div className='relative z-10'> 
                  <img 
                    src={Image1} 
                    alt=""
                    className='w-[300px] h-[300px] sm:h-[400px] sm:w-[450px] sm:scale-125 object-contain mx-auto'  
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Hero