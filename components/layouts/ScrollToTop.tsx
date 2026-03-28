"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="#hero"
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-50 p-3.5 bg-white border border-gray-100 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp
        className="text-gray-600 group-hover:text-red-600 transition-colors"
        size={24}
      />
    </Link>
  );
};

export default ScrollToTop;
