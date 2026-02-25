import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";



export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />
      <TestimonialsSection/>
      <FaqSection />
    </>
  );
}