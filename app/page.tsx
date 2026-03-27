import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Location from "@/components/sections/Location";
import Product from "@/components/sections/Product";
import ValueProposition from "@/components/sections/ValueProposition";
import React from "react";

const Page = () => {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <Product />
      <About />
      {/* Testimonials */}
      <Location />
      {/* Contact / Lead Form */}
      {/* Footer */}
    </main>
  );
};

export default Page;
