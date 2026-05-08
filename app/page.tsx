import Feature from "./_landing/Feature";
import { FinalCTA } from "./_landing/FinalCTA";
import { Footer } from "./_landing/Footer";
import { Header } from "./_landing/Header";
import { Hero } from "./_landing/Hero";
import { HowItWorks } from "./_landing/HowItWorks";
import { Testimonial } from "./_landing/Testimonial";
import { Work } from "./_landing/Work";

export default function Home() {
  return (
    <main className="relative min-h-dvh bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-[60vh] bg-[radial-gradient(ellipse_at_top,hsl(var(--brand)/0.12),transparent_60%)]"
      />

      <div className="relative z-10">
        <Header />
        <Hero />
        <HowItWorks />
        <Work />
        <Testimonial />
        <Feature />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
