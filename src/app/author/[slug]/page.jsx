"use client";
import AuthorHero from '@/app/Components/view/author/AuthorHero'
import React from 'react'
import { useParams } from 'next/navigation'
import { AllBlogdata } from '@/app/Components/view/blog/AllBlogdata';

const page = () => {
    const param = useParams()
    const author = AllBlogdata.find(e=>e.authors.slug == param?.slug)
    console.log({author});
  return (
    <>
    <AuthorHero author={author}/>
    {/* <Authorpost /> */}


    </>
  )
}

export default page