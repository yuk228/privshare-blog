import Link from "next/link";
import Image from "next/image";
import { PostSummary } from "@/lib/blogs/type";

type BlogListProps = {
  posts: PostSummary[];
};

function Card({ post }: { post: PostSummary }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <Link href={`/blogs/${post.slug}`} className="block">
        <div className="aspect-video overflow-hidden">
          <Image
            alt={post.FrontMatter.title}
            src={
              post.FrontMatter.img ||
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ucMk47FSeRx5WqeIX-wgmAHaEH%26pid%3DApi&f=1&ipt=cf72bcee25c62444c38461f26f5bb405f4181a62d655c8190a64d7d32ec9c247&ipo=images"
            }
            width={400}
            height={200}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
            {post.FrontMatter.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
            {post.FrontMatter.description}
          </p>
        </div>
      </Link>
    </div>
  );
}

export async function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
      {posts.map((post, index) => (
        <Card key={index} post={post} />
      ))}
    </div>
  );
}
