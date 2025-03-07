import React from 'react'
import Link from 'next/link'
import { blogs } from '@/lib/blogs/blogs'

const HeaderBlogList = () => {
  return (
    <ul className="grid p-4 md:grid-cols-2 lg:w-[500px] border border-gray-800 bg-black/80 backdrop-blur-sm">
    {blogs.map((blog, index) => (
       <li key={index} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
         <Link href={blog.href} className="">
           <div className="font-bold">{blog.title}</div>
           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{blog.description}</p>
         </Link>
       </li>
     ))}
   </ul>
  )
}

export default HeaderBlogList