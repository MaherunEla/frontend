"use client";
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import {A11y } from 'swiper/modules';
import Image from 'next/image';
import { HomeTestimonialData } from './HomeAboutData';
import SwiperPreviousButton from './SwiperPreviousButton';
import SwiperNextButton from './SwiperNextButton';

const Testimonial = () => {
  return (
    <div className='container bg-[#FBF6EA] py-12 px-8 lg:py-24 lg:px-28 '>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-24'>
        <div>
          <span className='tracking-[3px] font-medium mb-6 inline-block'>TESTIMONIALS</span>
          <h2 className='mb-4 text-3xl font-bold md:text-4xl font-sen'>What people say about our blog</h2>
                <p className='text-sm font-normal leading-7 md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>

        <Swiper
         modules={[A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={()=>{}}
        onSwiper={(swiper)=>{}}
        className='mt-8 lg:mt-0 w-full relative'
        >
          <div className='flex absolute bottom-0 right-0 z-10 gap-6'>
                  <SwiperPreviousButton />
                  <SwiperNextButton />
                </div>
          {
            HomeTestimonialData.map((item,index)=>(
              <SwiperSlide key={index}>
                <div>
                 
                  <h4 className='mb-32 text-xl  font-semibold leading-[130%] font-sens lg:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                  <div className='flex flex-col sm:flex-row justify-start gap-4 sm:justify-between sm:items-center'>
                 <div className='flex gap-4 flex-col sm:flex-row'>
                 <div className='w-[48px] h-[48px] relative'>
                    <Image src={item.image} fill alt={item.caption}/>
                  </div>
                  <div>
                    <h4 className='text-xl  font-semibold leading-[130%] font-sens lg:text-2xl'>{item.name}</h4>
                    <p className='text-sm font-normal leading-7 md:text-base font-inter'>{item.address}</p>
                  </div>
                 </div>
                 

                  </div>
                </div>
               
               
              </SwiperSlide>
            )
            )

          }
        </Swiper>
        

      </div>
        

    </div>
  )
}

export default Testimonial