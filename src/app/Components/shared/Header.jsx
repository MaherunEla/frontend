import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <section>
        <nav className='relative bg-[#232536] px-20 py-3'>
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
                <Link href="/" className='border-2 px-10 py-2 border-[#232536] bg-[#FFFFFF] text-[#232536]' >Subscribes</Link>

            </div>
            </div>
            

        </nav>
    </section>
  )
}

export default Header