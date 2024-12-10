import Hero from "@/components/ui1/hero/Hero";
import KeyFeatures from "@/components/ui1/key-features/KeyFeatures";
import WhyChoose from "@/components/ui1/WhyChoose";
import Pricing from "@/components/ui1/Pricing";
import FAQ from "@/components/ui1/FAQ";
import Testimonial from "@/components/ui1/Testimonial";
import Blog from "@/components/ui1/Blog";

export default function page() {
  return (
    <>
      <Hero />
      <KeyFeatures />
      <WhyChoose />
      <Pricing />
      <FAQ />
      <Testimonial />
      <Blog />
    </>
  );
}
