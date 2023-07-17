import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { authordata } from './Authordata'
import {BsFacebook,BsArrowRight,BsArrowLeft} from 'react-icons/bs'
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import {BiLogoInstagram} from 'react-icons/bi'

const Authorlist = () => {
  return (
    <div className='m-10'>
        <h1 className='p-20 font-sen text-center text-4xl font-bold'>List of Authors</h1>
        <div className='grid grid-cols-1 gap:4 md:grid-cols-4 lg-grid-cols-8'>
            {
                authordata.map((item,index)=>(
                  <Link href={`/author/${item.slug}`} key={index}>
                    <div className='mb-10 flex flex-col w-[296px] h-[324px] border-2 border-[#F4F4F4] bg-[#F4F4F4] hover:bg-[#FBF6EA] items-center space-y-5'>
                  <Image
                  className='mt-5'
                  src={item.image}
                  width={128}
                  height={128}
                  alt="author pic"
                  />
                  <h1 className='font-bold text-2xl'>{item.author}</h1>
                  <p className='text-[#6D6E76] text-sm font-base'>{item.title}</p>
                  <div className='flex flex-row items-center space-x-3 '>
                     <BsFacebook className='fill-[#232536] ' />
                    <AiOutlineTwitter className='fill-[#232536]' />
                    <BiLogoInstagram />
                    <AiFillLinkedin className='fill-[#232536]' />
                  </div>

                </div>

                  </Link>
                  
                ))

            }
            
    </div>
    </div>
  )
}

export default Authorlist