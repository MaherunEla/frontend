import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IoIosArrowForward } from "react-icons/io"
import {BsFacebook,BsArrowRight,BsArrowLeft} from 'react-icons/bs'
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import {BiLogoInstagram} from 'react-icons/bi'

const CategoryHome = () => {
  return (
    <section>
        <div className='container m-10'>
            <h1 className='text-4xl font-bold text-center'>Choose A Catagory</h1>
            {/* categori option */}
            <div className='m-10 flex flex-row items-center justify-between '>
              
                  {/* categori item */}
                    <div className='flex flex-col p-5 space-y-3 w-[296px] h-[228px] border-2 border-stone-100 hover:bg-[#FFD050]'>
                    <div className='border-1 border-stone-300 rounded-md bg-stone-100 w-[48px] h-[48px]'>
                      <Image
                      src="/assets/images/Home/Icon.svg"
                      width={48}
                      height={48}
                      alt="logo"
                      />
                      </div>
                      <h1 className='text-2xl font-bold'>Business</h1>
                      <p className='font-normal text-base'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        

                    </div>

                     {/* categori item */}
                  <div className='flex flex-col p-5 space-y-3 w-[296px] h-[228px] border-2 border-stone-100 hover:bg-[#FFD050]'>
                    <div className='border-1 border-stone-300 rounded-md bg-stone-100  w-[48px] h-[48px]'>
                     <Image
                      className='m-3'
                      src="/assets/images/Home/shuttle.svg"
                      width={23}
                      height={23}
                      alt="logo"
                      />

                    </div>
                      
                      <h1 className='text-2xl font-bold'>Startup</h1>
                      <p className='font-normal text-base'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        

                    </div>
                     {/* categori item */}
                  <div className='flex flex-col space-y-3 p-5 w-[296px] h-[228px] border-2 border-stone-100 hover:bg-[#FFD050]'>
                  <div className='border-1 border-stone-300 rounded-md bg-stone-100  w-[48px] h-[48px]'>
                      <Image
                      className='m-3'
                      src="/assets/images/Home/economy.svg"
                      width={23}
                      height={24}
                      alt="logo"
                      />
                      </div>
                      <h1 className='text-2xl font-bold'>Economy</h1>
                      <p className='font-normal text-base'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        

                    </div>

                     {/* categori item */}
                     <div className='flex flex-col p-5 space-y-3 w-[296px] h-[228px] border-2 border-stone-100 hover:bg-[#FFD050]'>
                     <div className='border-1 border-stone-300 rounded-md bg-stone-100 w-[48px] h-[48px]'>
                      <Image
                      className='m-3'
                      src="/assets/images/Home/cyborg.svg"
                      width={24}
                      height={24}
                      alt="logo"
                      />
                      </div>
                      <h1 className='text-2xl font-bold'>Technology</h1>
                      <p className='font-normal text-base'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        

                    </div>

                </div>

                <div className='m-10 flex flex-row items-center'>
                  
                    <Image
                    className='relative z-20'
                    src="/assets/images/Home/group.png"
                    width={949}
                    height={700}
                    alt="image"
                    />
               


                 
                 
                  <div className='z-40 -ml-[370px] mt-[120px] w-[706px] h-[590px] border-2 border-white bg-white'>
                    <div className='flex flex-col m-20 space-y-3'>
                      <h4 className='text-base font-semibold uppercase'>
                      Why we started 
                      </h4>
                      <h1 className='max-h-48 w-[440px] text-4xl font-bold  '>
                      It started out as a simple idea and evolved into our passion
                      </h1>
                      <p className='text-[#6D6E76] w-[546px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                      <div className='flex flex-row items-center border-2 w-[270px] h-[56px] border-[#FFD050] bg-[#FFD050]'>
                        <Link href="/" className='max-w-[204px] pl-[35px] text-lg font-bold text-[#232536]'>Discover our story  </Link>
                        <IoIosArrowForward />
                       

                        </div>

                      
                    </div>

                  </div>

                </div>
                {/* author part */}

                <div className='m-10'>
                  <h1 className='text-4xl font-bold text-center'>
                  List of Authors
                  </h1>

                  {/* author list */}
                  <div className='mt-10 flex flex-row items-center justify-between'>
                    {/* author box 1 */}
                    <Link href="/author">
                    <div className='flex flex-col w-[296px] h-[324px] border-2 border-[#F4F4F4] bg-[#F4F4F4] hover:bg-[#FBF6EA] items-center space-y-5'>
                      <Image
                      className='mt-5'
                      src="/assets/images/Home/author1.png"
                      width={128}
                      height={128}
                      alt="author pic"
                      />
                      <h1 className='font-bold text-2xl'>Floyd Miles</h1>
                      <p className='text-[#6D6E76] text-sm font-base'>Content Writer @Company</p>
                      <div className='flex flex-row items-center space-x-3 '>
                         <BsFacebook className='fill-[#232536] ' />
                        <AiOutlineTwitter className='fill-[#232536]' />
                        <BiLogoInstagram />
                        <AiFillLinkedin className='fill-[#232536]' />
                      </div>

                    </div>


                    </Link>
                   
                    {/* author box 2 */}
                    <Link href="/author">
                    <div className='flex flex-col w-[296px] h-[324px] border-2 border-[#F4F4F4] bg-[#F4F4F4] hover:bg-[#FBF6EA] items-center space-y-5'>
                      <Image
                      className='mt-5'
                      src="/assets/images/Home/author2.png"
                      width={128}
                      height={128}
                      alt="author pic"
                      />
                      <h1 className='font-bold text-2xl'>Dianne Russell</h1>
                      <p className='text-[#6D6E76] text-sm font-base'>Content Writer @Company</p>
                      <div className='flex flex-row items-center space-x-3 '>
                         <BsFacebook className='fill-[#232536] ' />
                        <AiOutlineTwitter className='fill-[#232536]' />
                        <BiLogoInstagram />
                        <AiFillLinkedin className='fill-[#232536]' />
                      </div>

                    </div>

                    </Link>
                   

                    {/* author box 3 */}
                    <Link href="/author">
                    <div className='flex flex-col w-[296px] h-[324px] border-2 border-[#F4F4F4] bg-[#F4F4F4] hover:bg-[#FBF6EA] items-center space-y-5'>
                      <Image
                      className='mt-5'
                      src="/assets/images/Home/author3.png"
                      width={128}
                      height={128}
                      alt="author pic"
                      />
                      <h1 className='font-bold text-2xl'>Jenny Wilson</h1>
                      <p className='text-[#6D6E76] text-sm font-base'>Content Writer @Company</p>
                      <div className='flex flex-row items-center space-x-3 '>
                         <BsFacebook className='fill-[#232536] ' />
                        <AiOutlineTwitter className='fill-[#232536]' />
                        <BiLogoInstagram />
                        <AiFillLinkedin className='fill-[#232536]' />
                      </div>

                    </div>
                    </Link>
                   

                    {/* author box 4*/}
                    <Link href="/author">
                    <div className='flex flex-col w-[296px] h-[324px] border-2 border-[#F4F4F4] bg-[#F4F4F4] hover:bg-[#FBF6EA] items-center space-y-5'>
                      <Image
                      className='mt-5'
                      src="/assets/images/Home/author4.png"
                      width={128}
                      height={128}
                      alt="author pic"
                      />
                      <h1 className='font-bold text-2xl'>Leslie Alexander</h1>
                      <p className='text-[#6D6E76] text-sm font-base'>Content Writer @Company</p>
                      <div className='flex flex-row items-center space-x-3 '>
                         <BsFacebook className='fill-[#232536] ' />
                        <AiOutlineTwitter className='fill-[#232536]' />
                        <BiLogoInstagram />
                        <AiFillLinkedin className='fill-[#232536]' />
                      </div>

                    </div>

                    </Link>
                    

                    

                  </div>

                </div>

                {/* logo */}

                <div className='m-10 flex flex-row items-center justify-between'>
                  <div>
                  <p className='text-[#6D6E76]'>We are</p>
                    <h1 className='text-2xl font-bold'>Featured in</h1>

                  </div>
                  <Image
                  src="/assets/images/Home/Logo 1.svg"
                  width={160}
                  height={32}
                  alt="logo"
                  />

                  <Image
                  src="/assets/images/Home/Logo 2.svg"
                  width={135}
                  height={32}
                  alt="logo"
                  />

                  <Image
                  src="/assets/images/Home/Logo 3.svg"
                  width={153}
                  height={32}
                  alt="logo"
                  />

                  <Image
                  src="/assets/images/Home/Logo 4.svg"
                  width={153}
                  height={32}
                  alt="logo"
                  />

                  <Image
                  src="/assets/images/Home/Logo 2.svg"
                  width={136}
                  height={32}
                  alt="logo"
                  />
                  

                </div>
                {/* TESTIMONIALs parts */}

                <div className='h-[646px] bg-[#FBF6EA] m-10'>
                  <div className='flex flex-row items-center justify-between'>
                    {/* left */}
                  <div className='m-20 space-y-5 flex flex-col'>
                    <h4 className='text-base font-semibold uppercase'>TESTIMONIALs</h4>
                    <h1 className='text-4xl max-w-xs font-bold'>What people say about our blog</h1>
                    <p className='max-w-xs text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    
                    </div>
                    {/* border */}
                    <div className=' h-[350px] w-[2px] bg-[#6D6E76] m-10'>

                    </div>
                    {/* right side */}
                    <div className='m-10 flex flex-col space-y-10'>
                      <p className='max-w-md text-2xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-row space-x-3'>
                        <Image
                      src="/assets/images/Home/Profile.png"
                      width={48}
                      height={48}
                      alt="Profile"
                      />  
                      <div>

                      <h2 className='text-2xl font-bold'>Jonathan Vallem</h2>
                      <p className='text-base font-normal text-[#6D6E76]'>New york, USA</p>
                      </div>

                      </div>
                      
                      <div className='flex flex-row space-x-20'>

                      <BsArrowLeft />

                      <BsArrowRight />
                      </div>

                      
                      



                    </div>
                    </div>
                    


                  </div>

                  


                </div>

                {/* join our team */}

                <div className='m-20 flex flex-col items-center space-y-5'>
                  <h1 className='max-w-sm text-4xl font-bold text-center'>Join our team to be a part of our story</h1>
                  <p className='w-[404px] text-center text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  <Link href="/" className='px-10 py-3 text-lg font-bold border-2 border-[#FFD050] bg-[#FFD050] font-sen'>Join Now</Link>
                  </div>

            
        </div>
    </section>
  )
}

export default CategoryHome