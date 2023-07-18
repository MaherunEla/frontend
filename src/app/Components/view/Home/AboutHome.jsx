import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IoIosArrowForward} from 'react-icons/io'
const AboutHome = () => {
  return (
    
        <div className='container px-5 py-5 '>
            {/* feature */}
            <div className='flex flex-col space-y-3 md:space-y-0  md:flex-row justify-between space-x-4 '>
                {/* left side */}
                <div className=' flex flex-col space-y-10  '>
                    <h1 className='font-sen text-center md:text-start text-2xl md:text-4xl font-bold text-[#232536]'>Featured Post</h1>
                    <div className='border-[1px] border-inherit   space-y-5'>
                        <Image
                        src="/assets/images/Home/homeab.png"
                        width={669}
                        height={352}
                        alt="image"
                        />
                        <h5 className='font-inter text-[#4C4C4C] text-xs md:text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>
                        <h1 className='font-sen max-w-2xl text-[#232536] font-bold text-base md:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
                        <p className='font-sen max-w-xl text-[#6D6E76] font-normal text-xs md:text-base'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        <div className='flex flex-row items-center border-2 w-[204px] h-[56px] border-[#FFD050] bg-[#FFD050]'>
                        <Link href="/" className='font-sen max-w-[204px] pl-[45px] text-base md:text-lg font-bold text-[#232536]'>Read More </Link>
                        <IoIosArrowForward />
                       

                        </div>

                    </div>

                </div>

                {/* right side */}
                 <div className='flex flex-col '>
                  <div className='flex flex-row items-center  space-x-20 md:justify-between '>
                        <h1 className='font-sen ml-5 text-[#232536] font-bold  text-xl md:text-4xl'>All Posts</h1>
                        
                        <button className='font-inter text-[#592EA9] '>View All</button>
                </div> 
                        <div className='md:pt-[80px] flex flex-col '> 
                            
                            {/* post */}

                          <div className='hover:bg-[#FBF6EA] hover:border-2 hover:border-[#FBF6EA] px-5 py-10 md:w-[517px] md:h-[181px]'>
                             <h5 className='font-sen text-[#4C4C4C] text-sm md:text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>
                             <p className='font-sen   md:max-w-sm text-xl md:text-2xl font-bold '>8 Figma design systems that you can download for free today.</p>
                         </div>

                           {/* post */}

                           <div className='hover:bg-[#FBF6EA] hover:border-2 hover:border-[#FBF6EA]  px-5 py-10 md:w-[517px] md:h-[181px]'>
                             <h5 className='font-sen text-[#4C4C4C] text-sm md:text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>
                             <p className='font-sen  md:max-w-sm text-xl md:text-2xl font-bold '>8 Figma design systems that you can download for free today.</p>
                         </div>

                          {/* post */}

                          <div className='hover:bg-[#FBF6EA] hover:border-2 hover:border-[#FBF6EA] px-5 py-10 md:w-[517px] md:h-[181px]'>
                             <h5 className='font-sen text-[#4C4C4C] text-sm md:text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>
                             <p className='font-sen md:max-w-sm text-xl md:text-2xl font-bold '>8 Figma design systems that you can download for free today.</p>
                         </div>

                          {/* post */}

                          <div className='hover:bg-[#FBF6EA] hover:border-2 hover:border-[#FBF6EA]  px-5 py-10 md:w-[517px] md:h-[181px]'>
                             <h5 className='font-sen text-[#4C4C4C] text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>
                             <p className='font-sen  md:max-w-sm text-xl md:text-2xl font-bold '>8 Figma design systems that you can download for free today.</p>
                         </div>

                
                         
                       
                        </div>



                    

                </div>

                
            </div>

            {/* about us */}

            <div className='mx-5 md:mx-20  my-5 md:my-20'>
                 <div className='flex flex-row'>
                    <div className='flex-none w-[20px] md:w-[200px] md:h-[23px]'></div>
                    <div className='grow h-[23px] bg-[#FFD050]'></div>
                    <div className='flex-none w-[30px] md:w-[275px] h-[23px] bg-[#592EA9]'></div>



                </div> 

                <div className='bg-[#F4F0F8] h-full  md:h-[500px]'>
                    <div className='flex flex-col  md:flex-row items-center justify-between'> 
                        {/* left side */}
                   <div className='flex flex-col md:m-20 m-10 space-y-2 md:space-y-5 '>
                        <h4 className='font-inter text-sm md:text-base font-semibold'>ABOUT US</h4>
                        <h1 className='font-sen text-xl md:text-4xl font-bold max-w-lg h-[144px]'>We are a community of content writers who share their learnings</h1>
                        <p className='font-inter text-sm md:text-base font-normal max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='flex flex-row items-center'>
                        <Link href="/" className='font-sen text-sm md:text-lg font-bold text-[#592EA9]'>Read More</Link>
                        <IoIosArrowForward className='fill-[#592EA9]'/>

                        </div>
                       


                    </div> 

                     {/* right side */}
                     <div className='flex flex-col md:m-20 m-10 space-y-2 md:space-y-5 '>
                        <h4 className='font-inter text-sm md:text-base font-semibold uppercase'>Our mision</h4>
                        <h1 className='font-sen text-xl md:text-4xl font-bold max-w-lg h-[144px]'>Creating valuable content for creatives all around the world</h1>
                        <p className='font-inter text-sm md:text-base font-normal max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                       


                    </div>

                    </div>
                    

                </div> 

            </div>

        </div>
    
  )
}

export default AboutHome