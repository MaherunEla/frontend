"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { BlogData } from '@/app/Components/view/blog/Blogdata'

const page = () => {
    const param = useParams()
    
    const blog = BlogData.find(e=>e.slug = param?.slug)
    
    console.log({param,blog});
  return (
    <section>
        <div className='container px-20'>
            <div className='m-20 flex flex-col items-center space-y-5'>
                <div className='flex flex-col md:flex-row space-x-5'>
                    <Image
                    className="w-[100px] h-[100px] md:w-[48px] md:h-[48px]"
                    alt='author'
                    src="/assets/images/Home/Profile.png"
                    width={48}
                    height={48}
                    />
                    <div>
                    <h2 className='text-2xl font-sen font-bold text-[#592EA9]'>Andrew Jonson</h2>
                    <h4 className='text-base font-inter text-[#6D6E76] font-normal '>Posted on 27th January 2022</h4>

                    </div>

                    
                    

                </div>
                <h1 className='md:max-w-3xl text-2xl md:text-4xl md:pl-[245px] font-bold font-sen '>Step-by-step guide to choosing great font pairs</h1>
                <div className='ml-20 md:ml-0 flex flex-row pr-[165px] space-x-2'>
                    <Image
                    alt='logo'
                    src="/assets/images/Home/shuttle.svg"
                    width={24}
                    height={24}
                    />
                    <h4 className='text-2xl font-san font-bold'>Startup</h4>
                </div>


            </div>

            {/* blog post image */}
            <Image 
            className='w-[200px] h-[200px] md:w-[1280px] md:h-[582px]'
            src="/assets/images/Blog/blogpost.png"
            width={1280}
            height={582}
            alt="post"
            />

            <div className='max-w-3xl md:mx-[220px] my-20'>
            <div className=' flex flex-col space-y-10'>
                <h2 className='text-2xl md:text-4xl font-sen font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                <p className='pb-10 text-base font-inter font-base text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>

            </div>
            <div className=' flex flex-col space-y-10'>
                <h2 className='text-2xl md:text-4xl font-sen font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                <p className='text-base font-inter font-base text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                <p className='pb-5 text-base font-inter font-base text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                
               


            </div>

            <div className='flex flex-col space-y-3'>
            <div className='flex flex-row space-x-2 '>
                <Image
                src="/assets/images/Blog/pointer.svg"
                width={5}
                height={5}
                alt="pointer"
                />
                <p className='font-sen text-2xl font-bold text-[#161722]'>Lorem ipsum dolor sit amet</p>

                </div>

                <div className='flex flex-row space-x-2 '>
                <Image
                src="/assets/images/Blog/pointer.svg"
                width={5}
                height={5}
                alt="pointer"
                />
                <p className='font-sen text-2xl font-bold text-[#161722]'>Non blandit massa enim nec scelerisque</p>

                </div>

                <div className='flex flex-row space-x-2 '>
                <Image
                src="/assets/images/Blog/pointer.svg"
                width={5}
                height={5}
                alt="pointer"
                />
                <p className='font-sen text-2xl font-bold text-[#161722]'>Neque egestas congue quisque egestas</p>

                </div>
            </div>
            <div className='pt-10 flex flex-col space-y-10'>
                
                <p className='text-base font-inter font-base text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                <h2 className='text-2xl md:text-4xl font-sen font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                <p className='pb-5 text-base font-inter font-base text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                
               


            </div>


            </div>

            <div className='my-10'>
                <h1 className='py-10 text-4xl font-bold'>
                What to read next
                </h1>
               


                <div className='flex flex-col space-y-5 md:flex-row space-x-5'>
                    <div className='max-w-sm flex flex-col space-y-4'>
                        <Image
                        src="/assets/images/Blog/post1.png"
                        width={405}
                        height={318}
                        alt="post1"
                        />
                        
                        <h4 className='text-base font-medium '>By <span className='text-[#592EA9]'>John Doe</span>   l   Aug 23, 2021 </h4>
                        <h1 className='text-2xl font-bold'>A UX Case Study Creating a Studious Environment for Students: </h1>
                        <p className='text-base font-normal text-[#232536]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        
                        

                    </div>

                    <div className='max-w-sm flex flex-col space-y-4'>
                        <Image
                        src="/assets/images/Blog/post2.png"
                        width={405}
                        height={318}
                        alt="post2"
                        />
                        
                        <h4 className='text-base font-medium '>By <span className='text-[#592EA9]'>John Doe</span>   l   Aug 23, 2021 </h4>
                        <h1 className='text-2xl font-bold'>A UX Case Study Creating a Studious Environment for Students: </h1>
                        <p className='text-base font-normal text-[#232536]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        
                        

                    </div>

                    <div className='max-w-sm flex flex-col space-y-4'>
                        <Image
                        src="/assets/images/Blog/post3.png"
                        width={405}
                        height={318}
                        alt="post3"
                        />
                        
                        <h4 className='text-base font-medium '>By <span className='text-[#592EA9]'>John Doe</span>   l   Aug 23, 2021 </h4>
                        <h1 className='text-2xl font-bold'>A UX Case Study Creating a Studious Environment for Students: </h1>
                        <p className='text-base font-normal text-[#232536]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        
                        

                    </div>

                </div>


                
            </div>

             {/* join our team */}

             <div className='m-10 md:m-20 flex flex-col items-center space-y-5'>
                  <h1 className='font-sen w-[200px] md:max-w-sm text-xl md:text-4xl font-bold text-center'>Join our team to be a part of our story</h1>
                  <p className='font-inter w-[150px] md:w-[404px] text-center text-sm md:text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  <Link href="/" className='px-10 py-3 text-sm md:text-lg font-bold border-2 border-[#FFD050] bg-[#FFD050] font-sen'>Join Now</Link>
                  </div>

            


        </div>
    </section>
  )
}

export default page