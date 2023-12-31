import Link from "next/link"
import Image from "next/image"
import { AllBlogdata } from "../blog/AllBlogdata";

const Category = () => {
   const category = AllBlogdata.slice(0,4);
  return (
    <div className='container pt-32 '>
       <div >
          <h1 className="mb-12 font-sen  text-xl md:text-4xl font-bold text-center">Choose A Catagory</h1>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
             {category.map((item,index)=>(
                <Link href={`/category/${item.category.slug}`} className="p-8 border border-[#232536] hover:bg-[#FFD050] border-opacity-30 " key={index}>
                    <div>
                        <div className="rounded-lg bg-[#FBF6EA] p-3 inline-block mb-[14px] ">
                            <div className="w-6 h-6 relative">
                               <Image src={item.icon} alt="Business" fill objectFit="cover"/>
                            </div>
                        </div>
                        <h3 className="font-sen text-xl md:text-2xl font-bold">{item.category.name}</h3>
                        <p className="font-inter font-normal text-[#6D6E76] text-sm md:text-base">{item.content}</p>
                    </div>
                </Link>
             ))}
          </div>
       </div>
    </div>
  )
}

export default Category