import React from 'react'
import { blogPost, blogType } from '../../../posts/blog'


function getPostContent(slug:any){
return blogPost.find((blogpost)=> blogpost.blogId == slug)
}


const getPostMetadata = ():blogType[]=>{
   return blogPost 
}

export const generateStaticParams = async () => {
const blogs = getPostMetadata()
 return blogs.map((post)=>({
  slug:post.blogId
 }))
}

const PostPage = (props:any)=> {
  const slug = props.params.slug
  const content = getPostContent(slug)
  return (
    <div>{content?.blog}</div>
  )
}
export default PostPage
