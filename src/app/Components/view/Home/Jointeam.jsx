import React from 'react'
import Link from 'next/link'
const Jointeam = () => {
  return (
    <div className='container flex flex-col items-center py-12 lg:py-32'>
        <div className='sm:w-[280px] md:w-[414px] lg:[414px] flex flex-col items-center gap-4'>
                  <h1 className='font-sen  text-xl md:text-4xl font-bold text-center'>Join our team to be a part of our story</h1>
                  <p className='font-inter text-center text-sm md:text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  <Link href="/" className='px-12 py-4 text-sm md:text-lg font-bold border border-[#FFD050] bg-[#FFD050] font-sen'>Join Now</Link>
    </div>

    </div>
  )
}

export default Jointeam
