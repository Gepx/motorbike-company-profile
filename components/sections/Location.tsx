"use client";

import { locationData } from "@/data/location";
import { motion } from "motion/react";

const Location = () => {
  return (
    <section className="w-full min-h-screen pb-20 pt-10" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight">Our Location</h2>

          <p className="mt-2 text-gray-500 max-w-2xl">
            Visit our showroom and explore our motorcycles in person.
          </p>
        </motion.div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {locationData.map((location, index) => (
              <motion.div
                key={location.id}
                className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 border-l-[6px] border-l-red-500 flex items-start gap-5 transition-transform hover:-translate-y-1 duration-300"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut" as const,
                  delay: index * 0.15,
                }}
              >
                <div className="w-12 h-12 shrink-0 bg-red-50 rounded-full flex items-center justify-center text-gray-600">
                  <location.icon strokeWidth={2} size={24} />
                </div>
                <div className="flex flex-col gap-1.5 pt-1">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {location.title}
                  </h3>
                  <p className="whitespace-pre-line text-gray-500 text-sm leading-relaxed">
                    {location.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Google Map */}
          <motion.div
            className="lg:col-span-6 bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col min-h-[400px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.2 }}
          >
            <h3 className="font-bold text-gray-900 text-xl mb-5">
              Lokasi Kami
            </h3>

            {/* Map Container */}
            <div className="w-full flex-grow rounded-2xl overflow-hidden bg-gray-100 relative min-h-[300px]">
              <iframe
                src="https://www.google.com/maps?q=Batam&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                title="Our Dealership Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
