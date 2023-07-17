import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <section>
        <nav className='relative  bg-[#232536] px-20 py-3'>
            <div className='flex container items-center justify-between'>
                {/* logo */}

            <div>
                <Link href="/">
                    <Image 
                    className=''
                    src="/assets/images/Logo.svg"
                    width={140}
                    height={28}
                    alt="logo"
                    />
                </Link>

            </div>
            {/* menu items*/}
            <div className='hidden md:flex items-center space-x-4 text-[#FFFFFF] text-base font-normal'>
                <Link href="/" className='font-inter '>Home</Link>
                <Link href="/blog" className='font-inter '>Blog</Link>
                <Link href="/aboutus" className='font-inter '>About Us</Link>
                <Link href="/contactus" className='font-inter '>Contact Us</Link>
                <Link href="/" className='font-sen border-2 px-10 py-2 border-[#232536] bg-[#FFFFFF] text-[#232536] hover:bg-[#FFD050]' >Subscribes</Link>

            </div>
            </div>
            

        </nav>
    </section>
  )
}

export default Header