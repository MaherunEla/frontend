import React from 'react'
import { author } from './authordata'
import {BsFacebook,BsArrowRight,BsArrowLeft} from 'react-icons/bs'
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import {BiLogoInstagram} from 'react-icons/bi'
import Link from 'next/link'
import Image from 'next/image'

const Author = () => {
  return (
    <div className='container pt-12 lg:pt-32'>
      <div>
          <h1 className='font-sen text-xl md:text-4xl font-bold text-center'>
                  List of Authors
                  </h1>

                  {/* author list */}
                  <div className='sb grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {/* author box 1 */}
                    {
                      author.map((item,index)=>(
                        

                    <Link href={`/author/${item.slug}`} key={index} className={`py-20 flex flex-col items-center bg-[#F4F4F4] hover:bg-[#FBF6EA]`}>
                  
                    <div className='w-[128px] h-[128px] relative inline-block pb-5'>
                      <Image
                      
                      src={item.image}
                      fill
                      objectFit='cover'
                      alt="author pic"
                      />

                    </div>
                      
                      <h3 className='font-sen font-bold text-xl md:text-2xl'>{item.author}</h3>
                      <p className='font-inter text-[#6D6E76] text-sm font-base'>{item.title}</p>
                      <div className='flex gap-4'>
                         <BsFacebook className='fill-[#232536] ' />
                        <AiOutlineTwitter className='fill-[#232536]' />
                        <BiLogoInstagram />
                        <AiFillLinkedin className='fill-[#232536]' />
                      </div>

                    


                    </Link>
                     ))
                    }
                    </div>
            </div>
      </div>
    
    
         
    
  )
}

export default Author