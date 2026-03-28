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
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-50">
          {/* <Image src="/" alt="Logo" width={100} height={100} /> */}
          <span className="font-bold text-2xl text-white tracking-wide">
            Logo
          </span>
        </div>

        <ul className="hidden md:flex justify-center items-center gap-10 font-semibold text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="relative cursor-pointer text-white after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.title}
            </Link>
          ))}
        </ul>

        <button className="hidden md:flex group items-center gap-2 px-6 py-2.5 rounded-full cursor-pointer border border-white/40 hover:bg-white transition-all duration-300">
          <Image
            src="/assets/icons/whatsapp.svg"
            alt="WhatsApp"
            width={24}
            height={24}
          />

          <span className="text-sm text-white font-bold transition-colors duration-300 group-hover:text-black">
            Chat WhatsApp
          </span>
        </button>

        {/* Mobile Menu Toggle Icon */}
        <button
          className="md:hidden flex items-center justify-center text-white focus:outline-none"
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
