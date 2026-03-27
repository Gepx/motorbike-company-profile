import { Send } from "lucide-react";
import Image from "next/image";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="w-full min-h-screen pb-20 pt-10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Contact Us
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl">
            Visit our showroom and explore our motorcycles in person or drop us
            a message below.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left Content: The Form */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center">
            <ContactForm />
          </div>

          {/* Right Content: The Image */}
          <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px] bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 group">
            <Image
              src="/assets/images/contact.png"
              alt="Contact"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-bold mb-2">We are here to help</h3>
              <p className="text-white/90 text-sm line-clamp-2">
                Our customer service team usually responds within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
