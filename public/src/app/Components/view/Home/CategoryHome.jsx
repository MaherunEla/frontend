"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

import { CategoryData } from '../blog/CategoryData'
import {IoIosArrowForward } from "react-icons/io"

import SwiperPreviousButton from './SwiperPreviousButton';
import SwiperNextButton from './SwiperNextButton';
import { authordata } from '../about/Authordata';
import { author } from './authordata';

const CategoryHome = () => {
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
                {/* author part */}

               
                    {/* author box 2 */}
                    {/* <Link href="/author">
                    <div className='flex flex-col w-[296px] h-[324px] border-2 border-[#F4F4F4] bg-[#F4F4F4] hover:bg-[#FBF6EA] items-center space-y-5'>
                      <Image
                      className='mt-5 w-[80px] h-[80px] md:w-[128px] md:h-[128px]'
                      src="/assets/images/Home/author2.png"
                      width={128}
                      height={128}
                      alt="author pic"
                      />
                      <h1 className='font-sen font-bold text-xl md:text-2xl'>Dianne Russell</h1>
                      <p className='font-inter text-[#6D6E76] text-sm font-base'>Content Writer @Company</p>
                      <div className='flex flex-row items-center space-x-3 '>
                         <BsFacebook className='fill-[#232536] ' />
                        <AiOutlineTwitter className='fill-[#232536]' />
                        <BiLogoInstagram />
                        <AiFillLinkedin className='fill-[#232536]' />
                      </div>

                    </div>

                    </Link>
                    */}

                    {/* author box 3 */}
                    {/* <Link href="/author">
                    <div className='flex flex-col w-[296px] h-[324px] border-2 border-[#F4F4F4] bg-[#F4F4F4] hover:bg-[#FBF6EA] items-center space-y-5'>
                      <Image
                      className='mt-5 w-[80px] h-[80px] md:w-[128px] md:h-[128px]'
                      src="/assets/images/Home/author3.png"
                      width={128}
                      height={128}
                      alt="author pic"
                      />
                      <h1 className='font-bold font-sen text-xl md:text-2xl'>Jenny Wilson</h1>
                      <p className='font-inter text-[#6D6E76] text-sm font-base'>Content Writer @Company</p>
                      <div className='flex flex-row items-center space-x-3 '>
                         <BsFacebook className='fill-[#232536] ' />
                        <AiOutlineTwitter className='fill-[#232536]' />
                        <BiLogoInstagram />
                        <AiFillLinkedin className='fill-[#232536]' />
                      </div>

                    </div>
                    </Link> */}
                   

                    {/* author box 4*/}
                    {/* <Link href="/author">
                    <div className='flex flex-col w-[296px] h-[324px] border-2 border-[#F4F4F4] bg-[#F4F4F4] hover:bg-[#FBF6EA] items-center space-y-5'>
                      <Image
                      className='mt-5 w-[80px] h-[80px] md:w-[128px] md:h-[128px]'
                      src="/assets/images/Home/author4.png"
                      width={128}
                      height={128}
                      alt="author pic"
                      />
                      <h1 className='font-bold font-sen  text-xl md:text-2xl'>Leslie Alexander</h1>
                      <p className='text-[#6D6E76] font-inter text-sm font-base'>Content Writer @Company</p>
                      <div className='flex flex-row items-center space-x-3 '>
                         <BsFacebook className='fill-[#232536] ' />
                        <AiOutlineTwitter className='fill-[#232536]' />
                        <BiLogoInstagram />
                        <AiFillLinkedin className='fill-[#232536]' />
                      </div>

                    </div>

                    </Link>
                    
                   
                    

                    

                  </div>*/}

                

                {/* logo */}

                {/* <div className='m-10 flex flex-col space-y-5 md:flex-row items-center justify-between'>
                  <div>
                  <p className='text-[#6D6E76] font-inter '>We are</p>
                    <h1 className='font-sen text-xl md:text-2xl font-bold'>Featured in</h1>

                  </div>
                  <Image
                  className='w-[120px] h-[32px] md:w-[160px]'
                  src="/assets/images/Home/Logo 1.svg"
                  width={160}
                  height={32}
                  alt="logo"
                  />

                  <Image
                   className='w-[110px] h-[32px] md:w-[135px]'
                  src="/assets/images/Home/Logo 2.svg"
                  width={135}
                  height={32}
                  alt="logo"
                  />

                  <Image
                   className='w-[120px] h-[32px] md:w-[153px]'
                  src="/assets/images/Home/Logo 3.svg"
                  width={153}
                  height={32}
                  alt="logo"
                  />

                  <Image
                   className='w-[120px] h-[32px] md:w-[153px]'
                  src="/assets/images/Home/Logo 4.svg"
                  width={153}
                  height={32}
                  alt="logo"
                  />

                  <Image
                   className='w-[120px] h-[32px] md:w-[136px]'
                  src="/assets/images/Home/Logo 2.svg"
                  width={136}
                  height={32}
                  alt="logo"
                  />
                  

                </div> */}
                {/* TESTIMONIALs parts */}
             
             <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log('swiper')}
      
    >
       {
          authordata.map((item,index)=>(
      <SwiperSlide key={index}>
       
            <div className='bg-[#FBF6EA]'>
                  <div className='flex flex-col md:flex-row items-center md:justify-between'>
                    {/* left */}
                  <div className='m-10 md:m-20 space-y-2 md:space-y-5 flex flex-col'>
                    <h4 className='font-inter text-sm md:text-base font-semibold uppercase'>TESTIMONIALs</h4>
                    <h1 className='font-sen text-xl md:text-4xl max-w-xs font-bold'>What people say about our blog</h1>
                    <p className='font-inter max-w-xs text-sm md:text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    
                    </div>
                    {/* border */}
                    <div className=' md:flex-row h-[2px] w-[150px] md:h-[350px] md:w-[2px] bg-[#6D6E76] m-10'>

                    </div>
                    {/* right side */}
                    <div className='m-10 flex flex-col space-y-10'>
                      <p className='font-sen max-w-md text-xl md:text-2xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <div className='flex flex-col space-y-10 md:flex-row items-center justify-between'>
                        <div className='flex flex-row space-x-3'>
                        <Image
                         className='w-[48px] h-[48px]'
                      src={item.image}
                      width={48}
                      height={48}
                      alt="Profile"
                      />  
                      <div>

                      <h2 className='font-sen text-xl md:text-2xl font-bold'>{item.author}</h2>
                      <p className='font-inter text-sm md:text-base font-normal text-[#6D6E76]'>New york, USA</p>
                      </div>

                      </div>
                      
                      <div className='flex flex-row space-x-2 md:space-x-5'>

                      <SwiperPreviousButton />

                      <SwiperNextButton />
                      </div>

                      
                      



                    </div>
                    </div>
                    


                  </div>

                  


                </div> 
         
      

      </SwiperSlide>
       )
       )



     }
      
      
    </Swiper> 

             
                

                {/* join our team */}

                

            
        </div>
    
  )
}

export default CategoryHome;