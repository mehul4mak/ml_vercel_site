import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn><About /></FadeIn>
      <FadeIn delay={100}><Skills /></FadeIn>
    </>
  );
}
