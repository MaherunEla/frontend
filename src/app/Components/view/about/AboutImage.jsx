import React from 'react'
import Image from 'next/image'

const AboutImage = () => {
  return (
    <div className='container'>
        <div className=' w-full h-[200px] lg:w-[1280px] lg:h-[444px]  relative'> 
        <Image src="/assets/images/About/aboutbg.png" fill objectFit="cover" alt="image"/>

        </div>

        <div className='lg:-mt-[151px] xl:-mt-[175px] lg:ml-28 absolute hidden xl:block'>
            <div className='grid grid-cols-3 gap-16 bg-[#FFD050] py-8 px-12 lg:w-[630px] '>
                <div>
                    <h1 className='text-3xl font-bold sm:text-4xl md:text-5xl xl:text-[56px] xl:leading-[64px] font-sens'>12+</h1>
                    <p className='text-sm font-normal leading-7 md:text-base font-sen'>Blogs Published</p>
                    
                </div>
                <div>
                    <h1 className='text-3xl font-bold sm:text-4xl md:text-5xl xl:text-[56px] xl:leading-[64px] font-sens'>18K+</h1>
                    <p className='text-sm font-normal leading-7 md:text-base font-sen'>Views on Finsweet</p>
                    
                </div>
                <div>
                    <h1 className='text-3xl font-bold sm:text-4xl md:text-5xl xl:text-[56px] xl:leading-[64px] font-sens'>30K+</h1>
                    <p className='text-sm font-normal leading-7 md:text-base font-sen'>Total active Users</p>
                    
                </div>

            </div>
            <div className='flex justify-start'>
                <div className='w-[311px] h-[23] bg-[#592EA9]'></div>
                <div className='w-[550px] h-[23px] bg-[#FFD050]'></div>

            </div>

        </div>

    </div>
  )
}

export default AboutImage