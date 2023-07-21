import React from 'react'
import { blogs } from '../blog/Blogdata'
import Link from 'next/link'
import Image from 'next/image'

const Authorpost = () => {
  return (
    <div className='container py-[64px] flex flex-col justify-center lg:flex-col'>
        <div className='mb-[64px] w-full lg:w-[1024px]'>
            <h1 className='text-3xl sm:text-4xl md:text-[40px] xl:text-5xl xl:leading-[64px] text-start font-bold -tracking-[2px]'>My Posts</h1>

        </div>
        <div className='grid grid-cols-1 gap-16'> 
        {
            blogs.map((item,index)=>(
                <Link href="/blog" className="flex flex-col lg:items-center lg:flex-row gap-8" key={index}>
                    <div className='mb-[14px] w-full sm:w-[294px] h-[312px] relative'>
                        <Image src={item.image} fill objectFit="cover" alt="image"/>
                    </div>
                    <div className='lg:w-[624px] w-full'>
                        <p className='text-[#592EA9] text-base font-medium'>{item.title}</p>
                        <h2 className='mb-4 font-sen text-2xl md:text-4xl font-bold'>{item.subTitle}</h2>
                        <p className='text-base font-normal text-[#6D6E76]'>{item.description}</p>
                    </div>

                </Link>
            ))
        }

        </div>
        <div>

        </div>
    </div>
  )
}

export default Authorpost