import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IoIosArrowForward } from "react-icons/io"
const CategoryHome = () => {
  return (
    <section>
        <div className='container m-10'>
            <h1 className='text-4xl font-bold text-center'>Choose A Catagory</h1>
            {/* categori option */}
            <div className='m-10 flex flex-row items-center justify-between '>
              
                  {/* categori item */}
                    <div className='flex flex-col p-5 space-y-3 w-[296px] h-[228px] border-2 border-stone-100 hover:bg-[#FFD050]'>
                    <div className='border-1 border-stone-300 rounded-md bg-stone-100 w-[48px] h-[48px]'>
                      <Image
                      src="/assets/images/Home/Icon.svg"
                      width={48}
                      height={48}
                      alt="logo"
                      />
                      </div>
                      <h1 className='text-2xl font-bold'>Business</h1>
                      <p className='font-normal text-base'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        

                    </div>

                     {/* categori item */}
                  <div className='flex flex-col p-5 space-y-3 w-[296px] h-[228px] border-2 border-stone-100 hover:bg-[#FFD050]'>
                    <div className='border-1 border-stone-300 rounded-md bg-stone-100  w-[48px] h-[48px]'>
                     <Image
                      className='m-3'
                      src="/assets/images/Home/shuttle.svg"
                      width={23}
                      height={23}
                      alt="logo"
                      />

                    </div>
                      
                      <h1 className='text-2xl font-bold'>Startup</h1>
                      <p className='font-normal text-base'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        

                    </div>
                     {/* categori item */}
                  <div className='flex flex-col space-y-3 p-5 w-[296px] h-[228px] border-2 border-stone-100 hover:bg-[#FFD050]'>
                  <div className='border-1 border-stone-300 rounded-md bg-stone-100  w-[48px] h-[48px]'>
                      <Image
                      className='m-3'
                      src="/assets/images/Home/economy.svg"
                      width={23}
                      height={24}
                      alt="logo"
                      />
                      </div>
                      <h1 className='text-2xl font-bold'>Economy</h1>
                      <p className='font-normal text-base'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        

                    </div>

                     {/* categori item */}
                     <div className='flex flex-col p-5 space-y-3 w-[296px] h-[228px] border-2 border-stone-100 hover:bg-[#FFD050]'>
                     <div className='border-1 border-stone-300 rounded-md bg-stone-100 w-[48px] h-[48px]'>
                      <Image
                      className='m-3'
                      src="/assets/images/Home/cyborg.svg"
                      width={24}
                      height={24}
                      alt="logo"
                      />
                      </div>
                      <h1 className='text-2xl font-bold'>Technology</h1>
                      <p className='font-normal text-base'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        

                    </div>

                </div>

                <div className='m-10 flex flex-row items-center'>
                  
                    <Image
                    className='relative z-20'
                    src="/assets/images/Home/group.png"
                    width={949}
                    height={700}
                    alt="image"
                    />
               


                 
                 

                  
                 
                  <div className='z-40 -ml-[370px] mt-[120px] w-[706px] h-[590px] border-2 border-white bg-white'>
                    <div className='flex flex-col m-20 space-y-3'>
                      <h4 className='text-base font-semibold uppercase'>
                      Why we started 
                      </h4>
                      <h1 className='max-h-48 w-[440px] text-4xl font-bold  '>
                      It started out as a simple idea and evolved into our passion
                      </h1>
                      <p className='text-[#6D6E76] w-[546px] texd-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                      <div className='flex flex-row items-center border-2 w-[270px] h-[56px] border-[#FFD050] bg-[#FFD050]'>
                        <Link href="/" className='max-w-[204px] pl-[35px] text-lg font-bold text-[#232536]'>Discover our story  </Link>
                        <IoIosArrowForward />
                       

                        </div>

                      
                    </div>

                  </div>

                </div>

            
        </div>
    </section>
  )
}

export default CategoryHome