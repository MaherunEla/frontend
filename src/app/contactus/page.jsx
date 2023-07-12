import React from 'react'

const page = () => {
  return (
    <section>
        <div className='container '>
            <div className='mt-20 flex flex-col items-center space-y-5 '>
                <h4 className='font-inter font-black text-base text-[#232536]'>Contact us</h4>
                <h1 className='text-5xl font-bold '>Let’s Start a Conversation</h1>
                <p className='max-w-3xl text-center text-base font-normal text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>

                
            </div>

            <div className='mx-[350px] mt-20 mb-10 p-10 max-w-3xl max-h-60 bg-[#592EA9]'>
                <div className='flex flex-row space-x-20'>
                    <div className='flex flex-col space-y-2'>
                        <h4 className='pb-2 text-sm font-normal text-[#FFFFFF] opacity-25'>Working hours</h4>
                        <div className='w-[294px] h-[1px] bg-[#FFFFFF] opacity-20'></div>
                        <h3 className='pt-2 text-xl font-bold font-sen text-[#FFFFFF]'>Monday To Friday</h3>
                        <h3 className='text-xl font-bold font-sen text-[#FFFFFF]'>9:00 AM to 8:00 PM </h3>
                        <p className='text-base font-normal text-[#FFFFFF] opacity-25'>Our Support Team is available 24/7</p>

                    </div>
                    

                    <div className='flex flex-col space-y-2 '>
                        <h4 className='pb-2 font-inter text-sm  font-normal text-[#FFFFFF] opacity-25'>Contact Us</h4>
                        <div className=' w-[294px] h-[1px] bg-[#FFFFFF] opacity-20'></div>
                        <h3 className='pt-2 text-xl font-bold text-[#FFFFFF]'>020 7993 2905</h3>
                        <p className='text-base font-normal font-inter text-[#FFFFFF] opacity-25 '>hello@finsweet.com</p>

                    </div>

                </div>

            </div>

            <div className='mx-[350px] my-10 '>
                <form className='flex flex-col space-y-5 '>
                    <input className="pl-10 py-5 border-2 border-[#e2e8f0] text-base font-normal" type="text" name="Fullname" value="Full Name" />
                    <input className="pl-10 py-5 border-2 border-[#e2e8f0] text-base font-normal" type="text" name="Fullname" value="Your Email" />
                    <input className="pl-10 py-5 border-2 border-[#e2e8f0] text-base font-normal" type="text" name="Fullname" value="Query Related  " />
                    <input className="pl-10 pt-8 pb-[200px] border-2 border-[#e2e8f0] text-base font-normal" type="text" name="Fullname" value="Message" />
                    <button className='pl-10 py-5 border-2 border-[#FFD050] bg-[#FFD050] text-2xl font-bold'>Send Message</button>
                </form>
            </div>

            

        </div>
    </section>
  )
}

export default page