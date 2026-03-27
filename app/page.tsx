import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Location from "@/components/sections/Location";
import Product from "@/components/sections/Product";
import ValueProposition from "@/components/sections/ValueProposition";

const Page = () => {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <Product />
      <About />
      {/* Testimonials */}
      <Location />
      <Contact />
    </main>
  );
};

export default Page;
