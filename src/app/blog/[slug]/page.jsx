"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPostData } from '../BlogPostData'
import { useParams } from 'next/navigation'
import { BlogData } from '@/app/Components/view/blog/Blogdata'
import Jointeam from '@/app/Components/view/Home/Jointeam'

const page = () => {
    const param = useParams()
    
    const blog = BlogData.find(e=>e.slug = param?.slug)
    
    console.log({param,blog});
  return (
    <section>
        <div className='container py-12 lg:py-32'>
            <div className='flex flex-col justify-center space-y-5'>
                
                <div className='flex flex-col md:flex-row space-x-5'>
                    <div className='w-[48px] h-[48px] relative'>
                    <Image
                    
                    alt='author'
                    src="/assets/images/Home/Profile.png"
                    fill

                    />

                    </div>
                    
                    <div>
                    <h2 className='text-2xl font-sen font-bold text-[#592EA9]'>Andrew Jonson</h2>
                    <h4 className='text-base font-inter text-[#6D6E76] font-normal '>Posted on 27th January 2022</h4>

                    </div>

                    
                    

                </div>
                <h1 className='md:max-w-3xl text-2xl md:text-4xl md:pl-[245px] font-bold font-sen '>Step-by-step guide to choosing great font pairs</h1>
                <div className='ml-20 md:ml-0 flex flex-row pr-[165px] space-x-2'>
                    <Image
                    alt='logo'
                    src="/assets/images/Home/shuttle.svg"
                    width={24}
                    height={24}
                    />
                    <h4 className='text-2xl font-san font-bold'>Startup</h4>
                </div>

                </div>
                


    

            {/* blog post image */}
           <div   className='w-full h-[300px] lg:h-[582px] relative'>
           <Image
            src="/assets/images/Blog/blogpost.png"
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
                        BlogPostData.map((item,index)=>(
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
                            <p className='text-base font-normal text-[#232536]'>{item.subtitle}</p>
                            
                            
    
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