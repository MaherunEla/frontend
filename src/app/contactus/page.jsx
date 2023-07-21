import React from 'react'
import { ContactDetailsData } from './contactData'

const page = () => {
  return (
    <section>
        <div className='container flex flex-col justify-center items-center pt-12 lg:pt-32 '>
            <div className='w-full lg:w-[768px] text-center pb-16'>
                <p className='mb-3 font-inter font-black leading-7 text-base text-[#232536] tracking-[3px] uppercase'>Contact us</p>
                <h1 className='mb-6 text-3xl sm:text-4xl md:text-[40px] xl:text-5xl xl:leading-[64px] text-center font-bold -tracking-[2px]'>Let’s Start a Conversation</h1>
                <p className='leading-7 text-sm text-center md:text-base font-normal text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>

                
            </div>

           
                <div className='grid grid-cols-1 lg:grid-cols-2 w-full lg:w-[764px] bg-[#592EA9] py-8 px-10 lg:py-12 lg:px-16'>
                    {
                        ContactDetailsData.map((item,index)=>(
                    <div className='w-full lg:w-72' key={index}>
                        <p className='mb-4 text-sm font-normal text-[#FFFFFF] opacity-60'>{item.title}</p>
                        <hr className='mb-4 bg-[#FFFFFF] opacity-60'/>
                        <span className='text-xl font-bold font-sen inline-block text-[#FFFFFF]'>{item.subTitle}</span>
                        <p className='text-base font-normal text-[#FFFFFF] opacity-60'>Our Support Team is available 24/7</p>

                    </div>
                        ))
                        
                    }
                    

             </div>

             <div className='mt-8 pb-32 '>
               <form action="/" className='flex flex-col gap-4 w-full lg:w-[768px]'>
                <div>
                    <input type="text" placeholder='Full Name' className='w-full border border-[#232536] border-opacity-50 py-6 pl-6'/>
                </div>
                <div>
                    <input type="email" placeholder="Your Email" className='w-full border border-[#232536] border-opacity-50 py-6 pl-6'/>

                </div>
                <div>
                    <select id="category" name="category" className='w-full border border-[#232536] border-opacity-50 py-6 pl-6 opacity-60'>
                        <option value="general">Query Related</option>
                        <option value="general">Technical Support</option>
                        <option value="general">Billing</option>
                    </select>
                </div>
                <div>
                    <textarea name="" id="" cols="30" rows="10" className='opacity-60 w-full border border-[#232536] border-opacity-50 py-6 pl-6'>Message</textarea>
                </div>
                <div>
                    <button className='w-full  py-4 text-sm md:text-lg font-bold border border-[#FFD050] bg-[#FFD050] font-sen leading-8'> Send Message</button>
                </div>

               </form>
                
            </div>

            </div>

            

            

        
    </section>
  )
}

export default page