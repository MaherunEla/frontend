import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import {BiLogoInstagram} from 'react-icons/bi'

const Footer = () => {
  return (
   
      <div className='bg-[#232536] py-12'>
        <div className='container'>
          {/* footer nav */}
        
          <nav>
            <div className='flex flex-col gap-4 lg:flex-row items-center justify-between mb-[54px]'>
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
            <div className='gap-8'>
              <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
              <Link href="/" className='text-white text-base font-normal leading-6 font-inter'>Home</Link>
                <Link href="/blog" className='text-white text-base font-normal leading-6 font-inter'>Blog</Link>
                <Link href="/aboutus" className='text-white text-base font-normal leading-6 font-inter'>About Us</Link>
                <Link href="/contactus" className='text-white text-base font-normal leading-6 font-inter'>Contact Us</Link>
                <Link href="/privacy" className='text-white text-base font-normal leading-6 font-inter'>Privacy policy</Link>

              </div>
            </div>
            </div>
            

        </nav>

        {/* footer middle */}
        
          <div className='grid grid-cols-1 lg:grid-cols-2  items-center py-10 px-8 lg:py-20 lg:px-[64px] justify-between bg-[#2E3040] gap-[64px] '>
           
              <h2 className='font-sen text-2xl md:text-4xl font-medium text-[#FFFFFF] text-center md:text-start'>Subscribe to our news letter to get latest updates and news</h2>
           
              <form action="/" className='flex flex-col gap-7 md:flex-row'>
                <div>
                <input type="email" className="font-inter pl-[25px] py-[14px] bg-[#2E3040] w-full border font-normal text-lg border-[#4C4C4C]" placeholder="Enter Your Email" value="" />

                </div>
              


               <button className='font-sen px-12 font-bold text-lg py-4 border-2 border-[#FFD050] leading-6  bg-[#FFD050] '> Subscribe</button>

              </form>
             

          </div>

        

        {/* footer icon */}
        <div className='pt-12 flex flex-col md:flex-row items-center justify-between  space-y-2'>
          <div className='text-[#FFFFFF] font-inter '>
            <p className='text-center md:text-start'>Finstreet 118 2561 Fintown</p>
            <p className='text-center md:text-start'>Hello@finsweet.com  020 7993 2905</p>
          </div>
          <div className='flex flex-row items-center space-x-3 '>
            <BsFacebook className='fill-[#6D6E76] ' />
            <AiOutlineTwitter className='fill-[#6D6E76]' />
            <BiLogoInstagram className='fill-[#6D6E76]'/>
            <AiFillLinkedin className='fill-[#6D6E76]' />
          </div>
        </div>

        </div>
        
        </div>

      
        
    
  )
}

export default Footer