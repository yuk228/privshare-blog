import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '@/lib/blogs/getPost';

const BlogList = async (props: { deviceName: string }) => {
    const posts = await getPosts(props.deviceName);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {posts.map((post, index) => (
                <div key={index} className="block p-2 rounded-lg bg-gray-900/50 overflow-hidden border-border/0 hover:border hover:border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <Link href={`/blogs/${props.deviceName}/${post.slug}`} className="block p-6">
                        <Image alt={post.FrontMatter.title} src={post.FrontMatter.img || ""} width={400} height={200} className="mx-auto pb-2 object-cover" />
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{post.FrontMatter.title}</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">{post.FrontMatter.description || ""}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;