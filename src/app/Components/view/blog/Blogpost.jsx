import React from 'react'
import {BlogData} from './Blogdata'
import Image from 'next/image'

const Blogpost = () => {
  return (
    <section>
        <div className='container p-20 '>
            <h1 className='py-10 text-5xl font-bold font-sen '>
            All posts
            </h1>
            <div className='grid grid-cols-1 gap-8'>
                {
                    BlogData.map((item,index)=>(
                        <div className={` flex flex-col md:flex-row items-center space-x-5 space-y-5 ${index===1 && "bg-white"}`}>
                            <div>
                                <Image
                                src={item.image} width={490} height={318} />
                            </div>
                            <div className='flex flex-col space-y-5'>
                                <h4 className='text-base font-inter font-medium text-[#592EA9] uppercase'>{item.title}</h4>
                                <h1 className='max-w-xl text-4xl  font-bold'>{item.subTitle}</h1>
                                <p className='max-w-xl text-[#6D6E76] text-base font-normal'>{item.description}</p>

                            </div>

                        </div>

                    )
                    )
                    
                    
                }


            

      

        </div>
     <div className='p-10 flex flex-col items-center'>
     <div className='flex flex-row space-x-5'>
            <h4 className=' text-2xl font-bold'>&#8249; <span>Prev</span></h4>
            <h4 className=' text-2xl font-bold'> Next<span> &#8250;</span></h4>

        </div>

     </div>
        
        </div>

        
        

    

    </section>
  )
}

export default Blogpost