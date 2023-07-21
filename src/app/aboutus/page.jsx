import React from 'react'
import AboutInfo from '../Components/view/about/AboutInfo'
import AboutImage from '../Components/view/about/AboutImage'
import AboutBlog from '../Components/view/about/AboutBlog'
import AboutAbout from '../Components/view/about/AboutAbout'
import Authorlist from '../Components/view/about/Authorlist'
import Jointeam from '../Components/view/Home/Jointeam'

const page = () => {
  return (
    <>
    <AboutInfo/>
    <AboutImage/>
    <AboutAbout/>
    <AboutBlog/>
    <Authorlist/>
    <Jointeam/>
    
    </>
  )
}

export default page