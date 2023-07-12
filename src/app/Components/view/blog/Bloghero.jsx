import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IoIosArrowForward } from "react-icons/io"

const Bloghero = () => {
  return (
    <section>
        <div className='container  bg-[#F4F0F8]'>
            
            <div className=' px-10 py-10 flex flex-col md:flex-row items-center justify-between'>
              <div className='p-10 flex flex-col space-y-5 '>
                  <h4 className='text-base font-inter uppercase font-medium text-[#232536]'>Featured Post</h4>
                  <h1 className='max-w-xl text-4xl font-bold '>Step-by-step guide to choosing great font pairs</h1>
                   <p className='font-inter'>By <span className='text-[#592EA9] font-medium '>John Doe</span>  l   May 23, 2022 </p>
                   <p className='max-w-xl font-inter'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                   <div className='flex flex-row items-center border-2 w-[204px] h-[56px] border-[#FFD050] bg-[#FFD050]'>
                        <Link href="/" className='max-w-[204px] pl-[45px] text-lg font-bold text-[#232536]'>Read More </Link>
                        <IoIosArrowForward className='mt-[2px]'/>
                       

                        </div>
              </div>
              <div className='p-10 '>
                 <Image
                  src="/assets/images/Blog/blogbg.png"
                  width={515}
                  height={360}
                  alt="bg"
                  />

              </div>
        </div>
       </div>
       

        </section>
  )
}

export default Bloghero