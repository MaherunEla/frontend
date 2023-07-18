
"use client";
import React from 'react'
import { useParams } from 'next/navigation'
import { CategoryData } from '@/app/Components/view/blog/CategoryData';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    const param = useParams()
    const category = CategoryData.find(e=>e.slug === param?.slug)
    console.log = ({param,category});
  return (
    <section>
        <div className='container'>
            <div className='max-h-80 bg-[#F4F0F8] p-10'>
              <div className=' flex flex-col items-center space-y-3'>
              <h1 className='font-sen text-2xl md:text-5xl font-bold'>{category?.title}</h1>
                <p className='max-w-lg text-center font-inter text-sm md:text-base font-normal text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <h4 className='font-inter text-sm md:text-base font-medium uppercase'>Blog &#8250; {category?.title}</h4>

              </div>
                

                    
            </div>

            <div className='m-10 flex flex-col md:flex-row'>
              {/* left side */}
              <div className='flex flex-col flex-1 space-y-5'>
              <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row items-center space-x-5'>
                <Image
                className='w-[150px] h-[150px] md:w-[294px] md:h-[332px]'
                src="/assets/images/Home/categorypost.png"
                width={294}
                height={332}
                alt="post"
                />
                <div className='flex flex-col space-y-3 max-w-lg'>
                <h4 className='font-inter text-base font-medium uppercase text-[#592EA9]'>{category?.title}</h4>
                <h1 className='font-sen text-2xl md:text-4xl font-bold '>Top 6 free website mockup tools 2022</h1>
                <p className='text-[#6D6E76] font-inter text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>

                </div>
               
              </div>

              <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row items-center space-x-5'>
                <Image
                className='w-[150px] h-[150px] md:w-[294px] md:h-[332px]'
                src="/assets/images/Home/categorypost.png"
                width={294}
                height={332}
                alt="post"
                />
                <div className='flex flex-col space-y-3 max-w-lg'>
                <h4 className='font-inter  text-base font-medium uppercase text-[#592EA9]'>{category?.title}</h4>
                <h1 className='font-sen text-2xl md:text-4xl font-bold '>Top 6 free website mockup tools 2022</h1>
                <p className='text-[#6D6E76] font-inter text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>

                </div>
               
              </div>

              <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row items-center space-x-5'>
                <Image
                className='w-[150px] h-[150px] md:w-[294px] md:h-[332px]'
                src="/assets/images/Home/categorypost.png"
                width={294}
                height={332}
                alt="post"
                />
                <div className='flex flex-col space-y-3 max-w-lg'>
                <h4 className='font-inter text-base font-medium uppercase text-[#592EA9]'>{category?.title}</h4>
                <h1 className='font-sen text-2xl md:text-4xl font-bold '>Top 6 free website mockup tools 2022</h1>
                <p className='text-[#6D6E76] font-inter text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>

                </div>
               
              </div>

              <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row items-center space-x-5'>
                <Image
                className='w-[150px] h-[150px] md:w-[294px] md:h-[332px]'
                src="/assets/images/Home/categorypost.png"
                width={294}
                height={332}
                alt="post"
                />
                <div className='flex flex-col space-y-3 max-w-lg'>
                <h4 className='font-inter text-base font-medium uppercase text-[#592EA9]'>{category?.title}</h4>
                <h1 className='font-sen text-2xl md:text-4xl font-bold '>Top 6 free website mockup tools 2022</h1>
                <p className='text-[#6D6E76] font-inter text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>

                </div>
               
              </div>
              <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row items-center space-x-5'>
                <Image
                className='w-[150px] h-[150px] md:w-[294px] md:h-[332px]'
                src="/assets/images/Home/categorypost.png"
                width={294}
                height={332}
                alt="post"
                />
                <div className='flex flex-col space-y-3 max-w-lg'>
                <h4 className='font-inter text-base font-medium uppercase text-[#592EA9]'>{category?.title}</h4>
                <h1 className='font-sen text-2xl md:text-4xl font-bold '>Top 6 free website mockup tools 2022</h1>
                <p className='text-[#6D6E76] font-inter text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>

                </div>
               
              </div>

              </div>
              
              {/* right side */}
              <div className='flex flex-col mt-10 md:mt-0'>
                <h1 className='ml-4 font-sen text-2xl text-center md:text-4xl font-bold'>Categories</h1>
              
              {
               CategoryData.map((item,index)=>(
                <Link href={`/category/${item.slug}`}>

               
                
                  {/* categori item */}
                  
                    <div className='flex flex-col p-5 space-y-3 w-[250px] md:w-[296px] h-[96px] border-2 border-[#C1C1C3] hover:bg-[#FFD050] m-5'>
                      <div className='flex flex-row space-x-4 '>
                      <div className='border-1 border-stone-300 rounded-md bg-stone-100 w-[48px] h-[48px]'>
                      <Image
                      className='m-3'
                      src={item.image}
                      width={23}
                      height={23}
                      alt="logo"
                      />
                      </div>
                      <h1 className='mt-2 md:mt-0 text-xl md:text-2xl font-bold'>{item.title}</h1>
                      </div>
                    
                      
                        

                    </div>
                    </Link>
                 ))}
                 {/* all tegs */}

<div>
                <h4 className='m-4 font-sen text-2xl text-center md:text-start md:text-4xl font-bold '>All Tags</h4>
                <div className='grid grid-cols-2 gap-2'>

                  <p className='px-5 py-2 text-center text-[#232536] border-2 border-[#6D6E76] rounded-full'>Business</p>
                  <p className='px-5 py-2 text-center text-[#232536] border-2 border-[#6D6E76] rounded-full'>Experience</p>
                  <p className='px-5 py-2 text-center text-[#232536] border-2 border-[#6D6E76] rounded-full'>Screen</p>
                  <p className='px-5 py-2 text-center text-[#232536] border-2 border-[#6D6E76] rounded-full'>Technology</p>
                  <p className='px-5 py-2 text-center text-[#232536] border-2 border-[#6D6E76] rounded-full'>Marketing</p>
                  <p className='px-5 py-2 text-center text-[#232536] border-2 border-[#6D6E76] rounded-full'>Life</p>

                </div>


              </div>

              </div>

              
              

            </div>


        </div>
    </section>
  )
}

export default page