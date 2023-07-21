import React from 'react'
import Image from 'next/image'

const AboutBlog = () => {
  return (
    <div className='container grid grid-cols-1 gap-[121px] py-[91px]'>
        <div className='flex flex-col xl:flex-row xl:items-center xl:justify-between gap-16'>
            <div className='w-full md:w-[430px] lg:w-[519px]'>
            <h2 className='mb-4 text-3xl md:text-4xl font-sen font-bold '>Our team of creatives</h2>
                <h4 className='mb-4 font-sen text-xl leading-[130%] lg:text-2xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>

            </div>
            <div className='relative'>
                <div className='w-[624px] h-[480px]'>
                    <Image src='/assets/images/About/abouthero.png' fill objectFit="cover" alt="image"/>

                </div>
                <div className='w-[103px] h-[116px] bg-[#FFD050] rounded-tl-3xl -ml-12 -mt-[400px] absolute'></div>

            </div>
        </div>
        <div className='flex flex-col xl:flex-row xl:items-center xl:justify-between gap-16'>
        <div className='relative'>
                <div className='w-[624px] h-[480px]'>
                    <Image src='/assets/images/About/abouthero2.png' fill objectFit="cover" alt="image"/>

                </div>
                <div className='w-[74px] h-[74px] bg-[#592EA9] rounded-full ml-12 -mt-[40px] absolute'></div>

            </div>
            <div className='w-full lg:w-[519px]'>
            <h2 className='mb-4 text-3xl md:text-4xl font-sen font-bold '>Why we started this Blog</h2>
                <h4 className='mb-4 font-sen text-xl leading-[130%] lg:text-2xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>

            </div>
            
        </div>
    </div>
  )
}

export default AboutBlog