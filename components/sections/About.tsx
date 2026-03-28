"use client";

import { montserrat } from "@/lib/fonts";
import { about } from "@/data/about";
import Image from "next/image";
import { motion } from "motion/react";

const About = () => {
  return (
    <section className="w-full min-h-screen pb-20 pt-10" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            About Us
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl">
            Discover the story behind our dealership and our commitment to
            providing the best Honda motorcycles and service.
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {about.map((item, index) => {
            const isEven = index % 2 !== 0;
            return (
              <motion.div
                key={item.id}
                className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} items-start gap-8 lg:gap-12 group`}
                initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" as const }}
              >
                {/* Content Image */}
                <div className="w-full md:w-5/12 lg:w-4/12 relative rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="object-cover w-full h-auto aspect-video md:aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content Text */}
                <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col gap-3 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <div className="whitespace-pre-line text-gray-500 text-base leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
