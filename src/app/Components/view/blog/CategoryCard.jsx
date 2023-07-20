import React from 'react'
import {CategoryData } from './CategoryData'
import Image from 'next/image'
import Link from 'next/link'


const CategoryCard = () => {
  return (
    <div className='container pt-32 '>
    <div >
       <h1 className="mb-12 font-sen  text-xl md:text-4xl font-bold text-start">All Catagory</h1>
       <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CategoryData.map((item,index)=>(
             <Link href="/" className="p-8 border border-[#232536] hover:bg-[#FFD050] border-opacity-30">
                 <div>
                     <div className="rounded-lg bg-[#FBF6EA] p-3 inline-block mb-[14px] ">
                         <div className="w-6 h-6 relative">
                            <Image src={item.image} alt="Business" fill objectFit="cover"/>
                         </div>
                     </div>
                     <h3 className="font-sen text-xl md:text-2xl font-bold">{item.title}</h3>
                     <p className="font-inter font-normal text-[#6D6E76] text-sm md:text-base">{item.subtitle}</p>
                 </div>
             </Link>
          ))}
       </div>
    </div>
 </div>
  )
}

export default CategoryCard