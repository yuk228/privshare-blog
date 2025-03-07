import React from 'react'
import BlogList from '@/components/blogs/BlogList'

export default async function Home() {
    return (
        <main>
            <div className="bg-[#030303] px-[50px] py-[100px] md:px-[200px] lg:px-[500px] ">
                <BlogList deviceName="other"/>
            </div>
        </main>
    )
}