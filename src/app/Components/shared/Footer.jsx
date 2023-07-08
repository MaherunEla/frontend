import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <section>
      <div className=' bg-[#232536]'>
        <div className='p-10'>
          {/* footer nav */}
        <div>
          <div className='relative bg-[#232536] px-20 py-3'>
            <div className='flex items-center justify-between'>
                {/* logo */}

            <div>
                <Link href="/">
                    <Image 
                    className=''
                    src="/assets/images/Logo.svg"
                    width={140}
                    height={28}
                    />
                </Link>

            </div>
            {/* menu items*/}
            <div className='hidden md:flex items-center space-x-4 text-[#FFFFFF] text-base font-normal'>
                <Link href="/">Home</Link>
                <Link href="/">Blog</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Contact Us</Link>
                <Link href="/">Privacy policy</Link>

            </div>
            </div>
            

        </div>

        {/* footer middle */}
        <div className='bg-[#6D6E76]'>
          <div className='m-20 flex flex-row items-center justify-between'>
            <div className='max-w-xl'>
              <h2 className='text-4xl font-medium text-[#FFFFFF]'>Subscribe to our news letter to get latest updates and news</h2>
            </div>
          </div>

        </div>

        </div>
        
        </div>

      </div>
        
    </section>
  )
}

export default Footer