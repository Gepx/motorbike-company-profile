import Image from "next/image";
import React from "react";

const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "#home",
  },
  {
    id: 2,
    title: "Products",
    href: "#products",
  },
  {
    id: 3,
    title: "Services",
    href: "#services",
  },
  {
    id: 4,
    title: "Location",
    href: "#location",
  },
  {
    id: 5,
    title: "About",
    href: "#about",
  },
  {
    id: 6,
    title: "Contact",
    href: "#contact",
  },
];

const Nav = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center py-6 max-w-7xl mx-auto">
        <div>
          {/* <Image src="/" alt="Logo" width={100} height={100} /> */}
          <span className="font-bold text-xl text-white">Logo</span>
        </div>

        <ul className="flex justify-between items-center gap-10 font-semibold text-sm">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="relative cursor-pointer text-white after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.title}
            </li>
          ))}
        </ul>

        <button className="group flex items-center gap-2 px-4 py-3 rounded-full cursor-pointer border border-white/40 hover:bg-white transition-all duration-300">
          <Image
            src="/assets/icons/whatsapp.svg"
            alt="WhatsApp"
            width={24}
            height={24}
          />

          <span className="text-md text-white font-semibold transition-colors duration-300 group-hover:text-black">
            Chat Sekarang
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
