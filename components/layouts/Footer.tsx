import { locationData } from "@/data/location";
import { navLinks } from "@/data/navLinks";
import { MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#cc141a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-xl font-bold tracking-wide mb-2">Logo</h3>
            <p className="text-sm font-medium leading-relaxed text-white/90 pr-4">
              We are a leading automotive company in Indonesia, committed to
              providing high-quality motorcycles and excellent customer service.
            </p>
          </div>

          <div className="flex md:justify-center">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold tracking-wide mb-6">
                Navigator
              </h3>
              <ul className="flex flex-col items-start gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-sm font-medium text-white/90 hover:text-white hover:underline underline-offset-4 transition-all"
                  >
                    {link.title}
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold tracking-wide mb-6">Address</h3>
            {/* Used items-start so the icon aligns with the first line of text */}
            <div className="flex items-start gap-3">
              <MapPin size={20} className="shrink-0 mt-0.5 text-white" />
              <p className="text-sm font-medium text-white/90 leading-relaxed">
                {locationData[0].description}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold tracking-wide mb-6">Follow Us</h3>
            <div className="flex items-center gap-4">
              <button className="cursor-pointer p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center">
                <MessageCircle
                  size={28}
                  className="text-white"
                  strokeWidth={1.5}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center border-t border-white/80 pt-8">
          <p className="text-sm font-medium text-white/90 tracking-wide">
            &copy; 2026 Honda Motor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
