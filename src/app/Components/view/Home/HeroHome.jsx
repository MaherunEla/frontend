import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const HeroHome = () => {
  return (

    

    // <div className="relative bg-[url('/assets/images/Home/homebg.png')] bg-cover bg-center bg-no-repeat h-auto w-auto md:w-full  md:h-screen">
    //   <div className="absolute bg-black/50 h-full inset-0"></div>

    //   <div className="container flex relative z-10 flex-col  py-[128px] space-y-5 items-center md:items-start md:ml-[100px] ">
    //     <h4 className="text-white font-inter text-base font-light  ">
    //       Posted on <span className="font-medium">startup</span>
    //     </h4>

    //     <h1 className="font-sen text-[#FFFFFF] font-bold text-3xl md:text-5xl max-w-3xl text-center md:text-start">
    //       Step-by-step guide to choosing great font pairs
    //     </h1>
    //     <h5 className="font-inter text-[#FFFFFF] text-base font-normal">
    //       By <span className="text-[#FFD050]">James West </span> | May 23, 2022{" "}
    //     </h5>
    //     <p className="font-inter max-w-xl text-base text-[#FFFFFF] text-center md:text-start">
    //       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    //       dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    //       proident.
    //     </p>
    //     <div className="flex flex-row items-center border-2 w-[204px] h-[56px] border-[#FFD050] bg-[#FFD050]">
    //       <Link
    //         href="/"
    //         className="font-sen max-w-[204px] pl-[45px] text-lg font-bold text-[#232536]"
    //       >
    //         Read More
    //       </Link>
    //       <IoIosArrowForward />
    //     </div>
    //   </div>
    // </div>

    <div className={`bg-[url('/assets/images/Home/homebg.png')] bg-cover bg-center bg-no-repeat w-screen h-full lg:h-[calc(100vh-80px)]`}>
      <div className="w-full h-full" style={{background: "radial-gradient(80.99% 71.93% at 74.58% 0.00%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)"}}>
        <div className="container text-white flex items-center w-full h-full">
          <div className="py-12 sm:py-0">
            <p className="tracking-[3px] font-medium mb-6 font-sens">Posted on startup</p>
            <span className='text-3xl font-bold  sm:text-4xl md:text-5xl xl:text-[56px] xl:leading-[64px] font-sen mb-6 block'>Step-by-step guide to choosing <br />great font pairs</span>
                    <p className='mb-6 text-sm font-normal leading-7 md:text-base'>By <span className='text-secondary'>James West</span>  |  May 23, 2022 </p>
                    <p className='mb-12 text-sm font-normal leading-7 md:text-base'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <div className='flex flex-row items-center border-2 w-[204px] h-[56px] border-[#FFD050] bg-[#FFD050]'>
                        <Link href="/blog/Readmore" className='max-w-[204px] pl-[45px] text-sm md:text-lg font-bold text-[#232536]'>Read More </Link>
                        <IoIosArrowForward className="mt-2px fill-[#232536]"/>
                       

                        </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
