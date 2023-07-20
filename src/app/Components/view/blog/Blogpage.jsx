import React from 'react'
import Bloghero from './Bloghero'
import dynamic from 'next/dynamic'
import CategoryCard from './CategoryCard'
import Jointeam from '../Home/Jointeam'
const Blogpost = dynamic(() => import('./Blogpost'))

const Blogpage = () => {
  return (
    <>
    <Bloghero />
    <Blogpost />
    <CategoryCard />
    <Jointeam/>
    
  
    
    </>
    
  )
}

export default Blogpage