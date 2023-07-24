"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useParams } from 'next/navigation'

import Jointeam from '@/app/Components/view/Home/Jointeam'
import { AllBlogdata } from '@/app/Components/view/blog/AllBlogdata'

const page = () => {
    const param = useParams()
    
    const blog = AllBlogdata.find(e=>e.slug == param?.slug)
    
    console.log({param,blog});
    const post = AllBlogdata.filter(item=>item.slug == param?.slug && (blog.id!= item.id))
   console.log({post});
  return (
    <section>
        <div className='container py-12 lg:py-32'>
            <div className='flex justify-center my-16'>
                <div className='w-[768px]'>
                    <div className='flex gap-4 flex-col sm:flex-row mb-6'>
                        <div className='w-[48px] h-[48px] relative'>
                            <Image src={blog.authors.image} fill alt="author" />
                        </div>
                        <div>
                            <h4 className='text-xl  font-semibold leading-[130%] font-sens lg:text-2xl text-[#592EA9]'>{blog.authors.title}</h4>
                            <p className='font-inter text-sm font-normal leading-7 md:text-base text-[#6D6E76]'>Posted on 27th January 2022</p>
                        </div>


                    </div>
                    <h1 className='mb-8 text-3xl font-bold sm:text-4xl md:text-[40px] xl:text-5xl xl:leading-[64px]  font-sen'>{blog.title}</h1>
                    <div className='flex gap-2 items-center  '>
                        <div className='w-[24px] h-[24px] relative'>
                            <Image src={blog.icon}  fill alt="logo"/>
                        </div>
                        <h4 className='text-xl text-[#232536] font-semibold leading-8 font-sens lg:text-2xl'>{blog.category.name}</h4>


                    </div>

                </div>

                
                

                    
                    

               
               
               
                
                


    
            </div>
            {/* blog post image */}
           <div   className='w-full h-[300px] lg:h-[582px] relative'>
           <Image
            src={blog.image}
            fill
            alt="post"
            />
           </div>

            <div className='max-w-3xl md:mx-[220px] my-20'>
            <div className=' flex flex-col space-y-10'>
                <h2 className='text-2xl md:text-4xl font-sen font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                <p className='pb-10 text-base font-inter font-base text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>

            </div>
            <div className=' flex flex-col space-y-10'>
                <h2 className='text-2xl md:text-4xl font-sen font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                <p className='text-base font-inter font-base text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                <p className='pb-5 text-base font-inter font-base text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                
               


            </div>

            <div className='flex flex-col space-y-3'>
            <div className='flex flex-row space-x-2 '>
                <Image
                src="/assets/images/Blog/pointer.svg"
                width={5}
                height={5}
                alt="pointer"
                />
                <p className='font-sen text-2xl font-bold text-[#161722]'>Lorem ipsum dolor sit amet</p>

                </div>

                <div className='flex flex-row space-x-2 '>
                <Image
                src="/assets/images/Blog/pointer.svg"
                width={5}
                height={5}
                alt="pointer"
                />
                <p className='font-sen text-2xl font-bold text-[#161722]'>Non blandit massa enim nec scelerisque</p>

                </div>

                <div className='flex flex-row space-x-2 '>
                <Image
                src="/assets/images/Blog/pointer.svg"
                width={5}
                height={5}
                alt="pointer"
                />
                <p className='font-sen text-2xl font-bold text-[#161722]'>Neque egestas congue quisque egestas</p>

                </div>
            </div>
            <div className='pt-10 flex flex-col space-y-10'>
                
                <p className='text-base font-inter font-base text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                <h2 className='text-2xl md:text-4xl font-sen font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                <p className='pb-5 text-base font-inter font-base text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                
               


            </div>


            </div>

            <div className=''>
                <h1 className='py-10 text-4xl font-bold'>
                What to read next
                </h1>
               


                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {
                        post.map((item,index)=>(
                            <div className='flex flex-col gap-8' key={index}>
                            <div className='w-full h-[318px] relative inline-block'>
                            <Image
                            src={item.image}
                            fill
                            objectFit='cover'
                            alt="post1"
                            />
    
                            </div>
                            
                            
                            <h4 className='text-base font-medium '>By <span className='text-[#592EA9]'>{item.author}</span> {item.date} </h4>
                            <h1 className='text-2xl font-bold'>{item.title}</h1>
                            <p className='text-base font-normal text-[#232536]'>{item.subTitle}</p>
                            
                            
    
                        </div>

                        ))
                        

                    }
                   

                   

                   

                </div>


                
            </div>
            <Jointeam/>

             

            


        </div>
    </section>
  )
}

export default page