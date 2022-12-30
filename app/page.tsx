import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Details from '../components/details'

import { blogType, blogPost } from '../posts/blog'

const getPostMetadata = ():blogType[]=>{
   return blogPost 
}



export default function page() {
  const postMetaData = getPostMetadata()
  const postPreviews = postMetaData.map((slug)=>(
    <div key={slug.blogId}>
      <Link href={`/posts/${slug.blogId}`} >{slug.blogTitle}</Link>
    </div>
  ))
  
  return (
    <div>
      <Details></Details>
    {/* <Buttons>Go back</Buttons> */}

    <div>{postPreviews}</div>
    </div>
  )
}
