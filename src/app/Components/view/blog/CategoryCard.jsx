import React from 'react'
import {CategoryData } from './CategoryData'
import Image from 'next/image'
import Link from 'next/link'


const CategoryCard = () => {
  return (
    <section>
        <div className='container p-20 '>
            <h1 className='py-5 text-4xl font-bold'>All Categories</h1>
            

            <div className='grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4'>
                {
                    CategoryData.map((item,index)=>(
                        <div className={`flex flex-col p-5 space-y-2 w-[296px] h-[228px] border-2 border-stone-100 hover:bg-[#FFD050] ${index===1 && "bg-white"}`}>
                            <div className='border-1 border-stone-300 rounded-md bg-stone-100  w-[48px] h-[48px]'>
                                <Image className="m-3" src={item.image} width={23} height={23} alt="image" />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>


                        </div>
                    ))
                    

                }


            </div>

            {/* join our team */}

            <div className='m-20 flex flex-col items-center space-y-5'>
                  <h1 className='max-w-sm text-4xl font-bold text-center'>Join our team to be a part of our story</h1>
                  <p className='w-[404px] text-center text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  <Link href="/" className='w-[174px] h-[56px] pt-3 text-center text-lg font-bold text-[#232536] border-2 border-[#FFD050] bg-[#FFD050]'>Join Now</Link>
                  </div>

        </div>
    </section>
  )
}

export default CategoryCard