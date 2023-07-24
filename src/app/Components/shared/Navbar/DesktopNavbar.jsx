import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavList } from '../data'

const DesktopNavbar = () => {
  return (
    <div className='bg-[#232536] hidden md:block'>
        <nav className='containter flex py-6'>
            <Link href="/">
            <Image src="/assets/images/Logo.svg" width={140} height={28} alt="logo" />
                
            </Link>
            <div className='gap-8'>
                <ul className='flex gap-6'>
                    {NavList.map(
                        (item)=>(
                            <li key={item.id} className={`text-white text-base font-normal`}>
                                <Link href={item.href}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    )}
                    <Link href="/" className='font-sen border-2 px-10 py-2 border-[#232536] bg-[#FFFFFF] text-[#232536] hover:bg-[#FFD050]' >Subscribes</Link>

                </ul>

            </div>



        </nav>

    </div>
  )
}

export default DesktopNavbar