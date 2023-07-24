
"use client";
import React from 'react'
import { useParams } from 'next/navigation'

import Image from 'next/image';
import Link from 'next/link';
import { AllBlogdata } from '@/app/Components/view/blog/AllBlogdata';

const page = () => {
    const param = useParams()
    const data = AllBlogdata.find(e=>e.category.slug == param?.slug)
    console.log = ({param,data});
    const post = AllBlogdata.filter(item =>item.category.slug == param?.slug)  
    const categorytype = AllBlogdata.slice(0,4);
   // console.log({categorytype});
  return (
    <section>
        <div>
            <div className=' bg-[#F4F0F8] py-12 lg:py-32'>
              <div className=' container flex flex-col items-center space-y-3'>
              <h1 className='font-sen text-2xl md:text-5xl font-bold'>{data.category.name}</h1>
                <p className='max-w-lg text-center font-inter text-sm md:text-base font-normal text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <h4 className='font-inter text-sm md:text-base font-medium uppercase'>Blog &#8250; {data.category.name}</h4>

              </div>
                

                    
            </div>

            <div className='container py-12 lg:py-32 flex flex-col space-y-4 md:space-y-0 xl:flex-row'>
              {/* left side */}
              <div className='flex flex-col flex-1 gap-8'>
              { post.map((item,index)=>(
                
                <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row  items-center md:space-x-8 space-x-0 '>
                  <div className='w-full h-[250px]  lg:w-[294px] lg:h-[332px] relative'>
                  <Image
                   src={item.image}
                   fill
                   objectFit='cover'
                   alt="post"
                  />

                  </div>

                  <div className='max-w-lg'>
                  <div className='flex flex-col space-y-3  '>
                  <h4 className='font-inter text-base font-medium uppercase text-[#592EA9]'>{item.category.name}</h4>
                  <h1 className='font-sen text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold '>{item.title}</h1>
                  <p className='text-[#6D6E76] font-inter text-base font-normal'>{item.content}</p>
  
                  </div>

                  </div>
                  
                 
                </div>
  
                
                 
               
              ))


              }
               </div>
              

             
              
              {/* right side */}
              <div className='flex flex-col space-y-8'>
                <h1 className='font-sen text-2xl md:text-4xl font-bold'>Categories</h1>
              
              {
               categorytype.map((item,index)=>(
                <Link href={`/category/${item.category.slug}`} key={index}>

               
                
                  {/* categori item */}
                  
                    <div className='flex flex-col p-5  w-full h-[96px] xl:w-[296px] xl:h-[96px] border-2 border-[#C1C1C3] hover:bg-[#FFD050] '>
                      <div className='flex flex-row space-x-4 '>
                      <div className='border-1 border-stone-300 rounded-md bg-stone-100 w-[48px] h-[48px]'>
                      <Image
                      className='m-3'
                      src={item.icon}
                      width={23}
                      height={23}
                      alt="logo"
                      />
                      </div>
                      <h1 className='mt-2 md:mt-0 text-xl md:text-2xl font-bold'>{item.category.name}</h1>
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