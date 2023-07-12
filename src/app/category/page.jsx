
"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import { CategoryData } from '../Components/view/blog/CategoryData'

const page = () => {
    const router = useRouter()
    const productId = router.query.productId
  return (
    <section>
        <div className='container'>
            <div>
                {

                
                
                  

                    }
            </div>

        </div>
    </section>
  )
}

export default page