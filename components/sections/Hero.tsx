"use client";

import { inter, montserrat } from "@/lib/fonts";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen" id="hero">
      <Image
        src="/assets/images/hero.png"
        alt="Showroom Image"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-white">
            {/* Heading */}
            <motion.h1
              className={`${montserrat.className} text-5xl md:text-6xl font-bold leading-none`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
            >
              Find Your <br />
              Perfect Ride
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className={`${inter.className} mt-2 text-lg font-semibold text-white/90 tracking-widest`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.15 }}
            >
              Authorized Honda Motorcycle Dealer
            </motion.p>

            {/* Description */}
            <motion.p
              className="mt-2 text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.3 }}
            >
              Trusted service, genuine parts, and the best deals to <br />
              start your riding journey with confidence.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.45 }}
            >
              <Link
                href="#products"
                className="inline-block cursor-pointer px-6 py-3 bg-red-600 hover:bg-red-700 hover:text-white/60 hover:-translate-y-2 transition rounded-md font-semibold"
              >
                View Products
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
