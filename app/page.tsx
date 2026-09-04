import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Work from "@/components/sections/Work";
import Footer from "@/components/sections/Footer";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const items = getFeaturedProjects().map((p) => ({
    slug: p.slug,
    title: p.title,
    stack: p.stack,
    metrics: p.metrics,
    summary: p.summary,
  }));

  return (
    <main className="mx-auto w-full max-w-[1200px] px-5 sm:px-12 pt-8 sm:pt-12 pb-16 sm:pb-22">
      <Nav home />
      <Hero />
      <Experience />
      <Work items={items} />
      <Footer />
    </main>
  );
}
