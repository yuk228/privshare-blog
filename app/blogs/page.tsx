import BlogList from "@/components/blog/BlogList";

export default async function Home() {
  return (
    <div className="min-h-screen px-[50px] py-[100px] md:px-[100px] lg:px-[250px]">
      <BlogList />
    </div>
  );
}
