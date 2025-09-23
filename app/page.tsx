import { Header } from "./_landing/Header";
import { Hero } from "./_landing/Hero";
import { Showcase } from "./_landing/Showcase";
import { Work } from "./_landing/Work";

export default function Home() {
  return (
    <main className="h-full">
      <Header />
      <Hero />
      <Work />
      <Showcase />
    </main>
  );
}
