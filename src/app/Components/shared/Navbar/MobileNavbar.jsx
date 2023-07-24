import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import { NavList } from '../data';

const MobileNavbar = () => {
    const [open,setOpen] = useState(false);

  return (
    <div className='bg-[#232536] md:hidden py-10'>
        <nav className='grid grid-cols-1 container'>
            <div className='flex justify-between'>
                <div>
                <Link href="/">
                    <Image 
                    src="/assets/images/Logo.svg"
                    width={140}
                    height={28}
                    alt="logo"
                    />
                 </Link>
                    
                </div>
                <div onClick={(()=>{setOpen(!open)})}>
                    {open?<AiOutlineClose className='text-white w-10 h-10 ' />:<FiMenu className='text-white w-10 h-10 ' />}

                </div>

            </div>

            <div className={clsx("py-32 h-screen",open?"block":"hidden")}>
                <ul className='flex flex-col items-center gap-10'>
                    {NavList.map(
                        (item)=>(
                            <li onClick={(()=>{setOpen(false)})} key={item.id} className={`text-white text-xl font-normal`}>
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

export default MobileNavbar