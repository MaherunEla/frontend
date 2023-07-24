"use client";
import AuthorHero from '@/app/Components/view/author/AuthorHero'
import Authorpost from '@/app/Components/view/author/Authorpost';
import React from 'react'
import { useParams } from 'next/navigation'
import { AllBlogdata } from '@/app/Components/view/blog/AllBlogdata';

const page = () => {
    const param = useParams()
    const author = AllBlogdata.find(e=>e.authors.slug == param?.slug)
    console.log({author});
   const post = AllBlogdata.filter(item=>item.authors.slug == param?.slug)
   console.log({post});

   
  return (
    <>
    <AuthorHero author={author}/>
     <Authorpost data={post}/>


    </>
  )
}

export default page