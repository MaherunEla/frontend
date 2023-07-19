import React from 'react'
import Bloghero from './Bloghero'
import dynamic from 'next/dynamic'
import CategoryCard from './CategoryCard'
const Blogpost = dynamic(() => import('./Blogpost'))

const Blogpage = () => {
  return (
    <>
    <Bloghero />
    <Blogpost />
    <CategoryCard />
    
  
    
    </>
    
  )
}

export default Blogpage