import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/blogs/getPost";

const BlogList = async (props: { tag?: string }) => {
  const posts = await getPosts(props.tag || "");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {posts.map((post, index) => (
        <div
          key={index}
          className="block p-2 rounded-lg bg-gray-900/50 overflow-hidden border-border/0 hover:border hover:border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          <Link href={`/blogs/${post.slug}`} className="block p-6">
            <Image
              alt={post.FrontMatter.title}
              src={
                post.FrontMatter.img ||
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ucMk47FSeRx5WqeIX-wgmAHaEH%26pid%3DApi&f=1&ipt=cf72bcee25c62444c38461f26f5bb405f4181a62d655c8190a64d7d32ec9c247&ipo=images"
              }
              width={400}
              height={200}
              className="mx-auto pb-2 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {post.FrontMatter.title}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {post.FrontMatter.description || ""}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-2 gap-2">
              {post.FrontMatter.tags?.map(tag => (
                <div
                  className="border hover:border-muted-foreground transition-all duration-300 rounded-md px-3 py-2 text-center"
                  key={tag}
                >
                  {tag}
                </div>
              ))}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
