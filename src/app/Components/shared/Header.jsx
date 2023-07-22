"use client"
import React ,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
    const [nav,setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
  return (
    <div className='w-full bg-[#232536] '>
        <nav className='container py-3'>
            <div className='flex  items-center justify-between'>
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
                <Link href="/blog?page=1" className='font-inter '>Blog</Link>
                <Link href="/aboutus" className='font-inter '>About Us</Link>
                <Link href="/contactus" className='font-inter '>Contact Us</Link>
                <Link href="/" className='font-sen border-2 px-10 py-2 border-[#232536] bg-[#FFFFFF] text-[#232536] hover:bg-[#FFD050]' >Subscribes</Link>

            </div>

            {/* Menu icon */}

            <button onClick={handleNav} className='flex  items-right md:hidden'>
                {nav ?(
                    <AiOutlineClose className='text-white w-10 h-10 ' />
                ):(
                    <FiMenu className='text-white w-10 h-10 ' />
                )


                }
                
            </button>
            </div>

            {/* Mobile menu */}
            { nav ? (

            < div className='h-[360px] bg-[#232536] md:hidden'>
                <div className=' absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-[#232536] text-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md '>
                <Link href="/" className='font-inter w-full h-[30px] text-center hover:bg-slate-300 hover:text-black transition delay-150'>Home</Link>
                <Link href="/blog" className='font-inter w-full h-[30px] text-center hover:bg-slate-300 hover:text-black transition delay-150'>Blog</Link>
                <Link href="/aboutus" className='font-inter w-full h-[30px] text-center hover:bg-slate-300 hover:text-black transition delay-150'>About Us</Link>
                <Link href="/contactus" className='font-inter w-full h-[30px] text-center hover:bg-slate-300 hover:text-black transition delay-150'>Contact Us</Link>
                <Link href="/" className='font-sen border-2 px-10 py-2 border-[#232536] bg-[#FFFFFF] text-[#232536] hover:bg-[#FFD050]' >Subscribes</Link>
                </div>

                
            </div>
            ):(

                <div></div>
            )
}

        </nav>


    </div>
        
    
  )
}

export default Header