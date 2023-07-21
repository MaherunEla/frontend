import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IoIosArrowForward} from 'react-icons/io'
import { HomeAboutData } from './HomeAboutData'
const AboutHome = () => {
  return (
    
        <div className='container pt-12 lg:pt-32'>
            {/* feature */}
            <div className=' flex flex-col space-y-3 md:space-y-0  lg:flex-row  gap-8 '>
                {/* left side */}
                <div className=' lg:w-[733px] w-full flex flex-col space-y-10  '>
                    <h1 className='font-sen text-center md:text-start text-2xl md:text-4xl font-bold text-[#232536]'>Featured Post</h1>
                    <div className='lg:p-8 p-4 border-[1px] border-inherit   space-y-5'>
                        <Image
                        src="/assets/images/Home/homeab.png"
                        width={669}
                        height={352}
                        alt="image"
                        />
                        <h5 className='font-inter text-[#4C4C4C] text-xs md:text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>
                        <h1 className='font-sen  text-[#232536] font-bold text-base md:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
                        <p className='font-sen  text-[#6D6E76] font-normal text-xs md:text-base'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        <div className='flex flex-row items-center border-2 w-[204px] h-[56px] border-[#FFD050] bg-[#FFD050]'>
                        <Link href="/" className='font-sen  pl-[45px] text-base md:text-lg font-bold text-[#232536]'>Read More </Link>
                        <IoIosArrowForward />
                       

                        </div>

                    </div>

                </div>

                {/* right side */}
                <div className='w-full md:w-[517px]'>
                <div className='flex flex-col '>
                  <div className='flex flex-row items-center  space-x-20 justify-between mb-[32px] '>
                        <h1 className='font-sen ml-5 text-[#232536] font-bold  text-xl md:text-4xl'>All Posts</h1>
                        
                        <button className='font-inter text-[#592EA9] '>View All</button>
                </div> 
                        <div className=' flex flex-col '> 
                            
                            {/* post */}

                          <div className='hover:bg-[#FBF6EA] hover:border-2 hover:border-[#FBF6EA] p-8 '>
                             <h5 className='font-sen mb-2 text-[#4C4C4C] text-sm md:text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>
                             <p className='font-sen  text-xl md:text-2xl font-bold '>8 Figma design systems that you can download for free today.</p>
                         </div>

                           {/* post */}

                           <div className='hover:bg-[#FBF6EA] hover:border-2 hover:border-[#FBF6EA] p-8 '>
                             <h5 className='font-sen mb-2 text-[#4C4C4C] text-sm md:text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>
                             <p className='font-sen  text-xl md:text-2xl font-bold '>8 Figma design systems that you can download for free today.</p>
                         </div>

                          {/* post */}

                          <div className='hover:bg-[#FBF6EA] hover:border-2 hover:border-[#FBF6EA] p-8 '>
                             <h5 className='font-sen mb-2 text-[#4C4C4C] text-sm md:text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>
                             <p className='font-sen  text-xl md:text-2xl font-bold '>8 Figma design systems that you can download for free today.</p>
                         </div>

                          {/* post */}

                          <div className='hover:bg-[#FBF6EA] hover:border-2 hover:border-[#FBF6EA] p-8 '>
                             <h5 className='font-sen mb-2 text-[#4C4C4C] text-sm md:text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>
                             <p className='font-sen  text-xl md:text-2xl font-bold '>8 Figma design systems that you can download for free today.</p>
                         </div>

                
                         
                       
                        </div>



                    

                </div>

                </div>
                 

                
            </div>

            {/* about us */}

            <div className='pt-12 lg:pt-32 '>
              <div className='flex flex-row justify-end'>
                    
                    <div className='w-[779px] h-[23px] bg-[#FFD050]'></div>
                    <div className='w-[282px] h-[23px] bg-[#592EA9]'></div>



                </div> 

                <div className='grid grid-cols-1 xl:grid-cols-2 gap-[61px] bg-[#F4F0F8] px-8 py-12 lg:py-24 lg:px-20 '>
                    {
                        HomeAboutData.map((item,index)=>(
                            <div className='xl:w-[515px] ' key={index}>
                                <span className='tracking-[3px] font-inter text-sm md:text-base font-semibold inline-block mb-12 uppercase'>{item.title}</span>
                                <h3 className='mb-4 font-sen text-xl md:text-4xl font-bold'>{item.subTitle}</h3>
                                <p className='font-inter text-sm md:text-base font-normal'>{item.description}</p>

                            </div>
                        ))
                    }

                </div>

                <div>

                </div>

               

            </div>

        </div>
    
  )
}

export default AboutHome