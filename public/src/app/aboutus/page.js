import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Authorlist from '../Components/view/about/Authorlist'

const page = () => {
  return (
    <section>
        
          <div className='relative container px-20 mt-10 flex flex-col md:flex-row items-center space-x-5'>
            <div className='z-10  md:-mb-10 py-10 md:py-20 px-5 md:px-10 md:w-[624px] md:h-[356px] border-1 border-white bg-white flex flex-col space-y-2' >
              <h4 className='text-base font-medium uppercase font-inter'>ABOUT US</h4>
              <h1 className='max-w-xl font-sen font-bold text-2xl md:text-5xl '>We are a team of content writers who share their learnings</h1>

            </div>
            <p className='mb-5 max-w-md text-sm md:text-base font-inter font-normal text-[#4C4C4C] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="relative container  md:-mt-10 w-full h-[200px] md:h-[444px] bg-cover bg-center bg-[url('/assets/images/About/aboutbg.png')]">
          {/* <Image
            src="/assets/images/About/aboutbg.png"
            width={1280}
            height={444}
            alt="group"
            /> */}
          <div className='hidden pt-[277px]  md:flex flex-col'>
            <div className='ml-[100px] p-10  max-h-36 max-w-xl bg-[#FFD050] border-2 border-[#FFD050]'>
              <div className='flex flex-col md:flex-row space-x-10'>
                <div>
                <h1 className='font-sen text-base md:text-5xl font-bold'>12+</h1>
                <p className='text-sm font-inter font-normal'>Blogs Published</p>

                </div>
                <div>
                <h1 className='font-sen text-base md:text-5xl font-bold'>18K+</h1>
                <p className='text-sm font-inter font-normal'>Views on Finsweet</p>

                </div>

                <div>
                <h1 className='font-sen text-base md:text-5xl font-bold'>30K+</h1>
                <p className='text-sm font-inter font-normal'>Total active Users</p>

                </div>
                

          </div>

            </div> 
            <div className='flex flex-row'>
                    <div className='flex-none w-[30px] md:w-[100px] h-[23px]'></div>
                    <div className='flex-none w-[70px] md:w-[275px] h-[23px] bg-[#592EA9]'></div>
                    <div className='flex-none w-[150px] md:w-[550px] h-[23px] bg-[#FFD050]'></div>
                    



                </div>
           </div>

           

          </div>
            
          


          <div className=' container bg-[#F4F0F8] h-full md:max-h-96 '>
            <div className=' p-20 flex flex-col space-y-10  md:flex-row md:space-x-4'>
              <div className='flex flex-col'>
                <h4 className='text-base font-medium font-sen uppercase'>Our mision</h4>
                <h1 className='max-w-md text-xl md:text-2xl font-bold font-sen'>Creating valuable content for creatives all around the world</h1>
                <p className='max-w-lg font-inter text-base font-normal text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
              </div>

              <div className='flex flex-col'>
                <h4 className='text-base font-medium font-sen uppercase'>Our Vision</h4>
                <h1 className='max-w-md text-xl md:text-2xl font-bold font-sen'>A platform that empowers individuals to improve</h1>
                <p className='max-w-lg font-inter text-base font-normal text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
              </div>


            </div>


          </div>


          <div className='relative container grid grid-cols-1 gap-y-5 md:grid-cols-2 items-center'>
            
              <div className='flex flex-col  space-y-2 '>
                <h1 className='pt-5 text-2xl md:text-4xl font-sen font-bold '>Our team of creatives</h1>
                <h4 className='max-w-lg font-sen text-lg md:text-2xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                <p className='max-w-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
              </div>
              <div className='flex flex-row'>
              <Image
             className='hidden md:-mt-[200px] -mr-10 z-10'
             src="/assets/images/About/shapes.svg"
             width={74}
             height={74}
             alt="shapes"
             />
             <Image
             src="/assets/images/About/abouthero.png"
             width={620}
             height={480}
             alt="abouthero"
             />
            

              </div>
              
              <div>
              <Image
              src="/assets/images/About/abouthero2.png"
              width={624}
              height={480}
              alt="abouthero"
              />
              <Image
              className='hidden md:ml-20 -mt-10'
              src="/assets/images/About/circle.svg"
              width={74}
              height={74}
              alt="circle"
              />

              </div>
              

              <div className='flex flex-col space-y-2'>
             
                <h1 className='text-2xl md:text-4xl font-sen font-bold '>Why we started this Blog</h1>
                <h4 className='font-sen text-xl md:text-2xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
              </div>
             

           

          </div>
            <Authorlist />
            {/* join our team */}

            <div className='m-10 md:m-20 flex flex-col items-center space-y-5'>
                  <h1 className='font-sen w-[200px] md:max-w-sm text-xl md:text-4xl font-bold text-center'>Join our team to be a part of our story</h1>
                  <p className='font-inter w-[150px] md:w-[404px] text-center text-sm md:text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  <Link href="/" className='px-10 py-3 text-sm md:text-lg font-bold border-2 border-[#FFD050] bg-[#FFD050] font-sen'>Join Now</Link>
                  </div>

        
    </section>

    
  )
}

export default page