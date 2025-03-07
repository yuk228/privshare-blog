"use client";

import { motion } from "framer-motion";
import { blogs } from "@/lib/blogs/blogs";
import Link from "next/link";

export function Blogs() {
    return (
        <section id="blogs" className="py-10 bg-black">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            プライバシーに特化したブログ、4つのカテゴリー
                        </h2>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="block p-6 rounded-lg bg-gray-900/50 border border-gray-800"
                        >
                            <Link href={blog.href}>
                                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
                                    {blog.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-400">{blog.description}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}