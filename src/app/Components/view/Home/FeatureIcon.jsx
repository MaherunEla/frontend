import React from 'react'
import { FeatureIconData } from './HomeAboutData'
import Image from 'next/image'
const FeatureIcon = () => {
  return (
    <div className='container flex flex-col items-center lg:flex-row gap-[75px] py-12 lg:py-24'>
        <div>
            <p className='font-inter text-sm font-normal leading-5 text-[#6D6E76]'>We are</p>
            <span className='font-sen text-2xl leading-8 font-bold text-[#6D6E76]'>Featured in</span>

        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4  xl:grid-cols-5 gap-[75px] opacity-60'>
            {
                FeatureIconData.map((item)=>(
                    <div>
                        <Image 
                        src={item.image} 
                        width={135}
                        height={32}
                        alt="logo"/>
                    </div>
                ))
            }

        </div>

    </div>
  )
}

export default FeatureIcon