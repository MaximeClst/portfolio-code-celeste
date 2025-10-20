import Feature from "./_landing/Feature";
import { Footer } from "./_landing/Footer";
import { Header } from "./_landing/Header";
import { Hero } from "./_landing/Hero";
import { Showcase } from "./_landing/Showcase";
import { Testimonial } from "./_landing/Testimonial";
import { Work } from "./_landing/Work";

export default function Home() {
  return (
    <main className="h-full relative">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_3px,transparent_3px),linear-gradient(rgba(255,255,255,0.02)_3px,transparent_3px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <Feature />
        <Work />
        <Showcase />
        <Testimonial />
        <Footer />
      </div>
    </main>
  );
}
