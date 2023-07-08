import React from 'react'
import Image from 'next/image'
const AboutHome = () => {
  return (
    <section>
        <div className='container mx-10 my-20'>
            {/* feature */}
            <div className='flex flex-row justify-between '>
                {/* left side */}
                <div className='flex flex-col space-y-10'>
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
                        <button className='max-w-[204px] border-2 px-12 py-2 border-[#FFD050] bg-[#FFD050] text-lg font-bold text-[#232536]'>Read More</button>

                    </div>

                </div>

                {/* right side */}
                <div className='flex flex-col'>
                  
                        <h1 className='text-[#232536] font-bold  text-4xl'>All Posts</h1>
                        <div className=''>
                        <h5 className='text-[#4C4C4C] text-base font-normal'>By <span className='text-[#592EA9]'>James West </span> |  May 23, 2022 </h5>

                        </div>



                    

                </div>

                <div className='pt-2'>
                    <button className='text-[#592EA9]'>View All</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutHome