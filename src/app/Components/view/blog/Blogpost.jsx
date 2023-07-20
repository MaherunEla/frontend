import React from 'react'
import {BlogData} from './Blogdata'
import Image from 'next/image'
import Link from 'next/link'

const Blogpost = () => {
  return (
    <section>
        <div className='container  '>
            <h1 className='py-10 text-2xl md:text-5xl font-bold font-sen '>
            All posts
            </h1>
            <div className='grid grid-cols-1 gap-16'>
                {
                    
                    BlogData.map((item,index)=>(
                        <Link href={`/blog/${item.slug}`} key={index}>
                        <div className={` flex flex-col md:flex-row items-center gap-4 ${index===1 && "bg-white"}`}>
                            <div className='lg:w-[490px] lg:h-[318px] w-full h-[250px] relative'>
                                <Image
                                src={item.image} fill objectFit="cover" alt="image" />
                            </div>
                            <div className='flex flex-col lg:w-[624px] space-y-5'>
                                <h4 className='text-base font-inter font-medium text-[#592EA9] tracking-[3px] uppercase'>{item.title}</h4>
                                <h1 className='font-sen text-2xl lg:text-3xl leading-[48px] xl:text-4xl  -tracking-[2px] font-bold'>{item.subTitle}</h1>
                                <p className=' font-inter text-[#6D6E76] text-base font-normal'>{item.description}</p>

                            </div>

                        </div>
                        </Link>

                    )
                    )
                    
                    
                }


            

      

        </div>
     <div className='p-2 md:p-10 flex flex-col items-start md:items-center'>
     <div className='flex flex-row space-x-2 md:space-x-5'>
            <h4 className=' text-2xl font-bold'>&#8249; <span>Prev</span></h4>
            <h4 className=' text-2xl font-bold'> Next<span> &#8250;</span></h4>

        </div>

     </div>
        
        </div>

        
        

    

    </section>
  )
}

export default Blogpost