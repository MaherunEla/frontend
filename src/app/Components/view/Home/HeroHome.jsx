import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IoIosArrowForward} from 'react-icons/io'

const HeroHome = () => {
  return (
    <section>
        <div className=" brightness-50 bg-[url('/assets/images/Home/homebg.png')] bg-cover bg-center bg-no-repeat h-[720px]"> 
        < div className='flex flex-col px-10 py-[128px] space-y-5'>
           
                <h4 className='text-[#FFFFFF] text-base font-light text-[#FFFFFF] '>Posted on <span className='font-medium'>startup</span></h4>
            
            
                <h1 className='text-[#FFFFFF] font-bold text-5xl max-w-3xl'>Step-by-step guide to choosing great font pairs</h1>
                <h5 className='text-[#FFFFFF] text-base font-normal'>By <span className='text-[#FFD050]'>James West </span> |  May 23, 2022 </h5>
                <p className='max-w-xl text-base text-[#FFFFFF]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <div className='flex flex-row items-center border-2 w-[204px] h-[56px] border-[#FFD050] bg-[#FFD050]'>
                        <Link href="/" className='max-w-[204px] pl-[45px] text-lg font-bold text-[#232536]'>Read More </Link>
                        <IoIosArrowForward />
                       

                        </div>

            

        </div>
       

        </div>
       
        
    </section>
  )
}

export default HeroHome