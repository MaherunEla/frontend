import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AllBlogdata } from './AllBlogdata'
import { useRouter, useSearchParams } from 'next/navigation'

const Blogpost = () => {
    const params = useSearchParams()
    const router = useRouter()
    console.log(params.get('page'));
    const page = params.get('page');
const pageSize = 5;
const startIndex = (page - 1) * pageSize;
const endIndex = startIndex + pageSize;
const selectedItem = AllBlogdata.slice(startIndex, endIndex);
const length = AllBlogdata.length;

const [isNextDisabled,setIsNextDisabled] = useState(false);
const [isPrevDisabled,setIsPrevDisabled] = useState(false);
const PrevhandleClick=()=>{
    console.log(startIndex);
    
    if(startIndex === 0)
    {
        setIsPrevDisabled(true);
    }
    else{
        router.push(`/blog?page=${Number(page)-1}`);
    }
    

};
const NexthandleClick=()=>{
    
    if(endIndex>length)
    {
        setIsNextDisabled(true);
    }
    else{
        router.push(`/blog?page=${Number(page)+1}`);
    }
    

};

  return (
    <section>
        <div className='container  '>
            <h1 className='py-10 text-2xl md:text-5xl font-bold font-sen '>
            All posts
            </h1>
            <div className='grid grid-cols-1 gap-16'>
                {
                    
                    selectedItem.map((item,index)=>(
                        <Link href={`/blog/${item.slug}`} key={index}>
                        <div className={` flex flex-col md:flex-row items-center gap-8 ${index===1 && "bg-white"}`}>
                            <div className='lg:w-[490px] lg:h-[318px] w-full h-[250px] relative'>
                                <Image
                                src={item.image} fill objectFit="cover" alt="image" />
                            </div>
                            <div className='flex flex-col lg:w-[624px] space-y-5'>
                                
                                <h4 className='text-base font-inter font-medium text-[#592EA9] tracking-[3px] uppercase'>{item.category.name}</h4>
                                <h1 className='font-sen text-2xl lg:text-3xl leading-[48px] xl:text-4xl  -tracking-[2px] font-bold'>{item.title}</h1>
                                <p className=' font-inter text-[#6D6E76] text-base font-normal'>{item.subTitle}</p>

                            </div>

                        </div>
                        </Link>

                    )
                    )
                    
                    
                }


            

      

        </div>
     <div className='p-2 md:p-10 flex flex-col items-start md:items-center'>
     <div className='flex flex-row space-x-2 md:space-x-5'>
            <button disabled={isPrevDisabled} className=' text-2xl font-bold' onClick={PrevhandleClick}>&#8249; <span>Prev</span></button>
            <button disabled={isNextDisabled} className=' text-2xl font-bold' onClick={NexthandleClick}> Next<span> &#8250;</span></button>

        </div>

     </div>
        
        </div>

        
        

    

    </section>
  )
}

export default Blogpost