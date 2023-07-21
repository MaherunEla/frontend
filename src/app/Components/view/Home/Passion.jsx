"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'





const Passion = () => {
  return (
    <div className='container py-12 lg:py-32'>
      <div className='flex flex-col xl:flex-row gap-4'>
        <div className='xl:w-[949px] xl:h-[705px] w-full h-[350px] relative'>
          <Image
          src="/assets/images/Home/group.png"
          fill
          objectFit='cover'
          alt="group"/>


        </div>

        <div className='xl:z-40 xl:-ml-[343px] xl:w-[706px] xl:h-[584px] xl:mt-[125px]'>
        <div className=' bg-white xl:p-20'>
            <p className='tracking-[3px] mb-6 font-inter text-base font-medium uppercase'>Why we started </p>
            <h1 className='text-3xl sm:text-4xl mb-4 -tracking-[2px] md:text:[40px] xl:leading-[64px] font-sen font-bold xl:text-5xl'>It started out as a simple idea and evolved into our passion</h1>
            <p className='mb-8 font-inter text-base font-normal leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <Link href="/" className='px-12 py-4 text-sm md:text-lg font-bold border border-[#FFD050] bg-[#FFD050] font-sen'>Discover our story</Link>
        </div>
        </div>
        {/* <div className='xl:-ml[343px] xl:w-[706px] xl:h-[584px] xl:mt-[125px]'>
          <div className='bg-white xl:p-20'>
            <p className='tracking-[3px] mb-6 font-inter text-base font-medium uppercase'>Why we started</p>
            <h1 className='mb-4 -tracking-[2px] font-sen font-bold text-5xl'>It started out as a simple idea and evolved into our passion</h1>
            <p className='mb-8 font-inter text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <Link href="/" className='px-12 py-4 text-sm md:text-lg font-bold border border-[#FFD050] bg-[#FFD050] font-sen'>Discover our story</Link>

          </div>

        </div> */}
      </div>
    </div>
    
        
                

            
      
    
  )
}

export default Passion;