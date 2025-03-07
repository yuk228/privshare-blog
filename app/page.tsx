import { Blogs } from "@/components/blogs";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
export default function Home() {
  return (
    <main>
      <HeroGeometric title1="Privacy is a Right," title2="Not a Privilege!"/>
      <Blogs />
    </main>
  );
}
