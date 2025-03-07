import React from 'react';
import Link from 'next/link';
import { getPosts } from '@/lib/blogs/getPost';

const BlogList = async (props: { deviceName: string }) => {
    const posts = await getPosts(props.deviceName);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {posts.map((post, index) => (
                <div key={index} className="block p-2 rounded-lg bg-gray-900/50 overflow-hidden border-border/0 hover:border hover:border-gray-800 transition-colors">
                    <Link href={`/blogs/${props.deviceName}/${post.slug}`} className="block p-6">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{post.FrontMatter.title}</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">{post.FrontMatter.description || ""}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;