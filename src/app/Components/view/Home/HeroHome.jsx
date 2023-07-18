import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IoIosArrowForward} from 'react-icons/io'

const HeroHome = () => {
  return (
    <section >
      <div className="relative bg-[url('/assets/images/Home/homebg.png')] bg-cover bg-center bg-no-repeat h-auto w-auto md:w-full  md:h-screen"> 
        <div className='absolute bg-black/50 h-full inset-0'></div>
        
        < div className='container flex relative z-10 flex-col  py-[128px] space-y-5 items-center md:items-start md:ml-[100px] '>
           
                <h4 className='text-white font-inter text-base font-light  '>Posted on <span className='font-medium'>startup</span></h4>
            
            
                <h1 className='font-sen text-[#FFFFFF] font-bold text-3xl md:text-5xl max-w-3xl text-center md:text-start'>Step-by-step guide to choosing great font pairs</h1>
                <h5 className='font-inter text-[#FFFFFF] text-base font-normal'>By <span className='text-[#FFD050]'>James West </span> |  May 23, 2022 </h5>
                <p className='font-inter max-w-xl text-base text-[#FFFFFF] text-center md:text-start'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <div className='flex flex-row items-center border-2 w-[204px] h-[56px] border-[#FFD050] bg-[#FFD050]'>
                        <Link href="/" className='font-sen max-w-[204px] pl-[45px] text-lg font-bold text-[#232536]'>Read More </Link>
                        <IoIosArrowForward />
                       

                        </div>

            

        </div>
       

        </div>
       
        
    </section>
  )
}

export default HeroHome