import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Blogs from "@/components/MainBlogs";
import Accordions from "@/components/Accordion";

export default function Home() {
  return (
    <main>
      {/* <HeroGeometric title1="Privacy is a Right," title2="Not a Privilege!"/>
      <Blogs />
      <Accordions /> */}
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </div>
    </main>
  );
}
