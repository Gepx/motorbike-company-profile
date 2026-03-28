import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Location from "@/components/sections/Location";
import Product from "@/components/sections/Product";
import Testimonial from "@/components/sections/Testimonial";
import ValueProposition from "@/components/sections/ValueProposition";

const Page = () => {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <Product />
      <About />
      <Testimonial />
      <Location />
      <Contact />
    </main>
  );
};

export default Page;
