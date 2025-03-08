import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Blogs from "@/components/MainBlogs";
import Accordions from "@/components/Accordion";

export default function Home() {
  return (
    <main>
      <HeroGeometric title1="Privacy is a Right," title2="Not a Privilege!"/>
      <Blogs />
      <Accordions />
    </main>
  );
}
