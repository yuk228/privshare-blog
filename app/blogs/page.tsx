import BlogList from "@/components/blog/blog-list";

export default async function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <BlogList />
    </div>
  );
}
