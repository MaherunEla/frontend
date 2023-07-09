import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IoIosArrowForward} from 'react-icons/io'
const AboutHome = () => {
  return (
    <section>
        <div className='container mx-20  my-20 '>
            {/* feature */}
            <div className='flex flex-col md:flex-row justify-between space-x-4 '>
                {/* left side */}
                <div className='flex flex-col space-y-10  '>
                    <h1 className='text-4xl font-bold'>Featured Post</h1>
                    <div className='border-[1px] border-inherit  p-7 space-y-5'>
                        <Image
                        src="/assets/images/Home/homeab.png"
                        width={669}
                        height={352}
                        alt="image"
                        />
                        <h5 className='text-[#4C4C4C] text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>
                        <h1 className='max-w-2xl text-[#232536] font-bold text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
                        <p className='max-w-xl text-[#6D6E76] font-normal text-base'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        <div className='flex flex-row items-center border-2 w-[204px] h-[56px] border-[#FFD050] bg-[#FFD050]'>
                        <Link href="/" className='max-w-[204px] pl-[45px] text-lg font-bold text-[#232536]'>Read More </Link>
                        <IoIosArrowForward />
                       

                        </div>

                    </div>

                </div>

                {/* right side */}
                <div className='flex flex-col '>
                  <div className='flex flex-row items-center  justify-between '>
                        <h1 className='text-[#232536] font-bold  text-4xl'>All Posts</h1>
                        
                        <button className='text-[#592EA9] '>View All</button>
                </div> 
                        <div className='pt-[80px] flex flex-col '>
                            
                            {/* post */}

                          <div className='hover:bg-[#FBF6EA] hover:border-2 hover:border-[#FBF6EA] px-5 py-10 w-[517px] h-[181px]'>
                             <h5 className='text-[#4C4C4C] text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>
                             <p className=' max-w-xs md:max-w-sm text-2xl font-bold '>8 Figma design systems that you can download for free today.</p>
                         </div>

                           {/* post */}

                           <div className='hover:bg-[#FBF6EA] hover:border-2 hover:border-[#FBF6EA]  px-5 py-10 w-[517px] h-[181px]'>
                             <h5 className='text-[#4C4C4C] text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>
                             <p className='max-w-xs md:max-w-sm text-2xl font-bold '>8 Figma design systems that you can download for free today.</p>
                         </div>

                          {/* post */}

                          <div className='hover:bg-[#FBF6EA] hover:border-2 hover:border-[#FBF6EA] px-5 py-10 w-[517px] h-[181px]'>
                             <h5 className='text-[#4C4C4C] text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>
                             <p className='max-w-xs md:max-w-sm text-2xl font-bold '>8 Figma design systems that you can download for free today.</p>
                         </div>

                          {/* post */}

                          <div className='hover:bg-[#FBF6EA] hover:border-2 hover:border-[#FBF6EA]  px-5 py-10 w-[517px] h-[181px]'>
                             <h5 className='text-[#4C4C4C] text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>
                             <p className='max-w-xs md:max-w-sm text-2xl font-bold '>8 Figma design systems that you can download for free today.</p>
                         </div>

                
                         
                       
                        </div>



                    

                </div>

                
            </div>

            {/* about us */}

            <div className='mt-20'>
                <div className='flex flex-row'>
                    <div className='flex-none w-[200px] h-[23px]'></div>
                    <div className='grow h-[23px] bg-[#FFD050]'></div>
                    <div className='flex-none w-[275px] h-[23px] bg-[#592EA9]'></div>



                </div>

                <div className='bg-[#F4F0F8] h-[500px]'>
                    <div className='flex flex-row items-center justify-between'>
                        {/* left side */}
                    <div className='flex flex-col m-20 space-y-5 '>
                        <h4 className='text-base font-semibold'>ABOUT US</h4>
                        <h1 className='text-4xl font-bold max-w-lg h-[144px]'>We are a community of content writers who share their learnings</h1>
                        <p className='text-base font-normal max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='flex flex-row items-center'>
                        <Link href="/" className='text-lg font-bold text-[#592EA9]'>Read More</Link>
                        <IoIosArrowForward className='fill-[#592EA9]'/>

                        </div>
                       


                    </div>

                     {/* right side */}
                     <div className='flex flex-col m-20 space-y-5 '>
                        <h4 className='text-base font-semibold uppercase'>Our mision</h4>
                        <h1 className='text-4xl font-bold max-w-lg h-[144px]'>Creating valuable content for creatives all around the world</h1>
                        <p className='text-base font-normal max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                       


                    </div>

                    </div>
                    

                </div>

            </div>

        </div>
    </section>
  )
}

export default AboutHome