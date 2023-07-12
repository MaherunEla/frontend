import React from 'react'
import Image from 'next/image'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import {BiLogoInstagram} from 'react-icons/bi'


const page = () => {
  return (
    <section>
        <div className='container'>
            <div className='px-[200px] py-20 flex flex-row space-x-4 bg-[#F4F0F8]'>
                <Image
                src="/assets/images/Blog/author.png"
                width={251}
                height={294}
                alt="author"
                />
                <div className='flex flex-col space-y-4'>
                <h1 className='text-5xl font-bold font-sen max-w-3xl'>
                Hey there, I’m Andrew Jonhson and welcome to my Blog
                </h1>
                
                    <p className='max-w-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                    <div className='flex flex-row items-center space-x-3 '>
            <BsFacebook className='fill-[#232536] ' />
            <AiOutlineTwitter className='fill-[#232536]' />
            <BiLogoInstagram className='fill-[#232536]'/>
            <AiFillLinkedin className='fill-[#232536]' />
          </div>

                </div>
                
               
            </div>
            <div className='flex flex-row'>
                    <div className='flex-none w-[200px] h-[23px] bg-[#F4F0F8]'></div>
                    <div className='grow h-[23px] bg-[#FFD050]'></div>
                    <div className='flex-none w-[275px] h-[23px] bg-[#592EA9]'></div>



                </div>

                <div className='mx-[200px] mt-20 mb-[120px]'> 
                    <h1 className='text-5xl font-bold font-sen py-10'>My Posts</h1>
                    <div className='flex flex-col space-y-10 '>
                        <div className='flex flex-row items-center space-x-10  '>
                            <Image
                            src="/assets/images/Home/office.png"
                            width={412}
                            height={320}
                            alt="office"
                            />
                            <div className='flex flex-col  space-y-5 '>
                            <h4 className='text-[#592EA9] text-base font-medium'>BUSINESS</h4>
                            <h1 className='max-w-lg font-sen text-4xl font-bold'>Font sizes in UI design: The complete guide to follow</h1>
                            <p className='text-base font-normal text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            </div>
                            
                           
                            
                        </div>
                        <div className='flex flex-row items-center space-x-10 '>
                            <Image
                            src="/assets/images/Home/employe.png"
                            width={412}
                            height={320}
                            alt="office"
                            />
                            <div className='flex flex-col  space-y-5 '>
                            <h4 className='text-[#592EA9] text-base font-medium'>ECONOMY</h4>
                            <h1 className='max-w-lg font-sen text-4xl font-bold'>How to build rapport with your web design clients</h1>
                            <p className='text-base font-normal text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            </div>


                    </div>
                </div>
           

        </div>
        </div>
    </section>
  )
}

export default page