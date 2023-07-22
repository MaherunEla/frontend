import React from "react";
import Image from "next/image";
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import {BiLogoInstagram} from 'react-icons/bi'
const AuthorHero = ({author}) => {
  console.log({author});
  return (
    <div className="bg-[#F4F0F8]">
      <div className="container py-[64px]">
        <div className="flex flex-col lg:flex-row gap-8 ">
          <div className="w-[251px] h-[294px] relative">
            <Image
              src={author.authors.image}
              fill
              objectFit="cover"
              alt="author"
            />
          </div>
          <div className="lg:w-[624px] w-full">
            <h1 className="mb-6 text-3xl sm:text-4xl md:text-[40px] xl:text-5xl xl:leading-[64px] font-bold font-sen">
              Hey there, I’m {author.authors.title} and welcome to my Blog
            </h1>
            <p className="leading-[64px] text-sm  md:text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
            <div className='flex gap-4 mt-4'>
            <BsFacebook className='fill-[#232536] ' />
            <AiOutlineTwitter className='fill-[#232536]' />
            <BiLogoInstagram className='fill-[#232536]'/>
            <AiFillLinkedin className='fill-[#232536]' />
          </div>
          </div>
        </div>
       
      </div>
      <div>

        <div className="container">
        <div className='flex flex-row justify-end '>
                    
                    <div className='flex-1 w-[813px] h-[23px] bg-[#FFD050]'></div>
                    <div className='w-[50px] lg:w-[271px] h-[23px] bg-[#592EA9]'></div>



                </div> 
        </div>
         
      </div>
    </div>
  );
};

export default AuthorHero;
