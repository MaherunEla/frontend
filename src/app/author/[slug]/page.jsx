"use client";
import AuthorHero from '@/app/Components/view/author/AuthorHero'
import React from 'react'
import { useParams } from 'next/navigation'
import { author } from '@/app/Components/view/Home/authordata';
import Authorpost from '@/app/Components/view/author/Authorpost';
const page = () => {
    const param = useParams()
    const authorname = author.find(e=>e.slug == param.author)
    console.log({authorname});
  return (
    <>
    <AuthorHero />
    <Authorpost/>


    </>
  )
}

export default page