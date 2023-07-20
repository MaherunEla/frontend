
import React from 'react'
import HeroHome from './HeroHome'
import AboutHome from './AboutHome'

import Jointeam from './jointeam'
import Author from './author'

import Category from './Category'
import FeatureIcon from './FeatureIcon'
import Testimonial from './Testimonial'
import Passion from './Passion'

const PageHome = () => {
  return (
    <>
     {/* <HeroHome />  */}
     {/* <About/> */}
     <AboutHome /> 
     <Category />
     <Passion />
    
      {/* <CategoryHome />   */}
      <Author/>  
      <FeatureIcon />
      <Testimonial/> 
     <Jointeam />
    
     
     
     
    </>
    
  )
}

export default PageHome