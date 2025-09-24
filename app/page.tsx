import { Footer } from "./_landing/Footer";
import { Header } from "./_landing/Header";
import { Hero } from "./_landing/Hero";
import { Showcase } from "./_landing/Showcase";
import { Testimonial } from "./_landing/Testimonial";
import { Work } from "./_landing/Work";

export default function Home() {
  return (
    <main className="h-full">
      <Header />
      <Hero />
      <Work />
      <Showcase />
      <Testimonial />
      <Footer />
    </main>
  );
}
