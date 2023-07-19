"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'




const Passion = () => {
  return (
    
        <div className='container pt-12 lg:pt-32'>
                 
           
                <div className='pt-12 lg:pt-32  flex flex-col md:flex-row items-center'>
                  
                    <Image
                    className='relative z-20'
                    src="/assets/images/Home/group.png"
                    width={949}
                    height={700}
                    alt="image"
                    />

              
                 
                  <div className='z-40 md:-ml-[370px] mt-[120px] w-[400px] md:w-[706px]  md:h-[590px] border-2 border-white bg-white'>
                    <div className='flex flex-col m-20 space-y-3'>
                      <h4 className='font-inter text-center md:text-start text-base font-semibold uppercase'>
                      Why we started 
                      </h4>
                      <h1 className='font-sen text-center md:text-start max-h-48 md:w-[440px] text-xl md:text-4xl font-bold  '>
                      It started out as a simple idea and evolved into our passion
                      </h1>
                      <p className='font-inter text-center md:text-start text-[#6D6E76] md:w-[546px] text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                      <div className='flex flex-row ml-5 md:ml-0 items-center border-2 w-[220px] md:w-[270px] h-[56px] border-[#FFD050] bg-[#FFD050]'>
                        <Link href="/" className='font-sen max-w-[204px] pl-[35px] text-base md:text-lg font-bold text-[#232536]'>Discover our story  </Link>
                        <IoIosArrowForward />
                       

                        </div>

                      
                    </div>

                  </div>

                </div>
                
                

            
        </div>
    
  )
}

export default Passion;