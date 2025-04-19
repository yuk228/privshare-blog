import React from 'react'
import BlogList from '@/components/blog/BlogList'

export default async function Home() {
    return (
        <main>
            <div className="min-h-screen bg-[#030303] px-[50px] py-[100px] md:px-[200px] lg:px-[500px] ">
                <BlogList deviceName="other"/>
            </div>
        </main>
    )
}