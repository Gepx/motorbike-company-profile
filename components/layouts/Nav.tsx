"use client";

import { navLinks } from "@/data/navLinks";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isClicked]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgb(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="relative z-50">
          {/* <Image src="/" alt="Logo" width={100} height={100} /> */}
          <span
            className={`font-bold text-2xl tracking-wide transition-colors duration-500 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Logo
          </span>
        </div>

        <ul className="hidden md:flex justify-center items-center gap-10 font-semibold text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`relative cursor-pointer transition-colors duration-500 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled
                  ? "text-gray-700 hover:text-red-600 after:bg-red-600"
                  : "text-white after:bg-white"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </ul>

        <button
          className={`hidden md:flex group items-center gap-2 px-6 py-2.5 rounded-full cursor-pointer border transition-all duration-500 ${
            isScrolled
              ? "border-red-600 hover:bg-red-600"
              : "border-white/40 hover:bg-white"
          }`}
        >
          <Image
            src="/assets/icons/whatsapp.svg"
            alt="WhatsApp"
            width={24}
            height={24}
          />

          <span
            className={`text-sm font-bold transition-colors duration-500 ${
              isScrolled
                ? "text-red-600 group-hover:text-white"
                : "text-white group-hover:text-black"
            }`}
          >
            Chat WhatsApp
          </span>
        </button>

        {/* Mobile Menu Toggle Icon */}
        <button
          className={`md:hidden flex items-center justify-center focus:outline-none transition-colors duration-500 ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setIsClicked(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      <MobileNav isClicked={isClicked} setIsClicked={setIsClicked} />
    </nav>
  );
};

export default Nav;
