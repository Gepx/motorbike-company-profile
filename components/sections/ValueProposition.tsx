"use client";

import { values } from "@/data/values";
import ValuePCard from "./ValuePCard";
import ValuePButton from "./ValuePButton";
import { motion } from "motion/react";

const ValueProposition = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };
  return (
    <section
      className="relative w-full min-h-screen py-20 overflow-hidden"
      id="value-proposition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Build for Your Ride
            </h1>
            <p className="mt-2 text-gray-500">
              Experience the highest standard of quality, service, and support
              for your entire journey.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
          >
            {values.map((value) => {
              return (
                <motion.div key={value.id} variants={cardVariants}>
                  <ValuePCard value={value} />
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ValuePButton />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
