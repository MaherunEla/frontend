import React from 'react'
import Link from 'next/link'
const Jointeam = () => {
  return (
    <div className='container py-20'>
        <div className=' flex flex-col items-center space-y-5'>
                  <h1 className='font-sen max-w-sm text-xl md:text-4xl font-bold text-center'>Join our team to be a part of our story</h1>
                  <p className='font-inter w-[150px] md:w-[404px] text-center text-sm md:text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  <Link href="/" className='px-10 py-3 text-sm md:text-lg font-bold border-2 border-[#FFD050] bg-[#FFD050] font-sen'>Join Now</Link>
    </div>

    </div>
  )
}

export default Jointeam
