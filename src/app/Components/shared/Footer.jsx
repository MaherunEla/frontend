import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import {BiLogoInstagram} from 'react-icons/bi'

const Footer = () => {
  return (
    <section>
      <div className='bg-[#232536] '>
        <div className='p-5 md:p-10 container'>
          {/* footer nav */}
        <div>
          <div className='relative bg-[#232536] px-0 md:px-20 py-5 md:py-3'>
            <div className='flex flex-col space-y-2 md:flex-row items-center justify-between'>
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
            <div className='flex flex-col md:flex-row font-inter items-start space-x-2 md:space-x-4 text-[#FFFFFF] text-base font-normal'>
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Contact Us</Link>
                <Link href="/privacy">Privacy policy</Link>

            </div>
            </div>
            

        </div>

        {/* footer middle */}
        <div className='bg-gray-700 mx-3 my-2 md:mx-20 md:my-3'>
          <div className='m-20 flex flex-col md:flex-row items-center justify-between'>
            <div className='maz-w-sm md:max-w-xl my-20 mx-15'>
              <h2 className='font-sen text-4xl font-medium text-[#FFFFFF]'>Subscribe to our news letter to get latest updates and news</h2>
            </div>
              <div className='flex flex-col md:flex-row my-10 space-y-2 md:space-y-0 md:space-x-4'>
              <input type="" className="font-inter pl-5 py-3 bg-gray-700 border-2 border-[#4C4C4C]" value="Enter Your Email" />


               <button className='font-sen px-10 py-3 border-2 border-[#4C4C4C]  bg-[#FFD050] '> Subscribe</button>

              </div>
             

          </div>

        </div>

        {/* footer icon */}
        <div className='flex flex-col md:flex-row items-center justify-between mx-20 my-3 '>
          <div className='text-[#FFFFFF] font-inter '>
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com  020 7993 2905</p>
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

      </div>
        
    </section>
  )
}

export default Footer