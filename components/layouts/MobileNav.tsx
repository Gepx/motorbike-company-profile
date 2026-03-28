import { navLinks } from "@/data/navLinks";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MobileNavProps {
  isClicked: boolean;
  setIsClicked: (value: boolean) => void;
}

const MobileNav = ({ isClicked, setIsClicked }: MobileNavProps) => {
  return (
    <>
      <div
        onClick={() => setIsClicked(false)}
        className={`md:hidden fixed inset-0 w-full h-[100dvh] bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-50 ${
          isClicked
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`md:hidden fixed top-0 left-0 w-[80%] max-w-sm h-[100dvh] bg-white z-50 flex flex-col shadow-2xl transition-transform duration-500 ease-in-out transform ${
          isClicked ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsClicked(false)}
            className="text-gray-900 hover:text-red-600 transition-colors focus:outline-none"
          >
            <X size={32} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-6 px-8 mt-4">
          {navLinks.map((link) => {
            return (
              <Link
                key={`mobile-${link.id}`}
                href={link.href}
                onClick={() => setIsClicked(false)}
                className="flex items-center gap-4 text-gray-900 font-semibold text-lg hover:text-red-600 transition-colors group"
              >
                <link.icons
                  size={24}
                  className="text-gray-700 group-hover:text-red-600 transition-colors"
                />
                {link.title}
              </Link>
            );
          })}
        </ul>

        <div className="mt-auto p-8 mb-4">
          <button className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full cursor-pointer bg-green-500 hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30">
            <Image
              src="/assets/icons/whatsapp.svg"
              alt="WhatsApp"
              width={24}
              height={24}
            />
            <span className="text-white font-bold tracking-wide text-lg">
              Chat WhatsApp
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
