import { Send } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="w-full min-h-screen pb-20 pt-10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Contact Us
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl">
            Visit our showroom and explore our motorcycles in person or drop us
            a message below.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left Content: The Form */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center">
            <form className="flex flex-col gap-6">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-700 ml-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-red-500 focus:outline-none focus:ring-4 focus:ring-red-500/10 transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-700 ml-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-red-500 focus:outline-none focus:ring-4 focus:ring-red-500/10 transition-all"
                />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-700 ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-red-500 focus:outline-none focus:ring-4 focus:ring-red-500/10 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="button" // Change to submit if hooking up to a real form action
                  className="cursor-pointer w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-500/30 hover:shadow-red-500/40 transition-all hover:-translate-y-1 active:translate-y-0"
                >
                  Send Message
                  <Send size={20} strokeWidth={2.5} />
                </button>
              </div>
            </form>
          </div>

          {/* Right Content: The Image */}
          <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px] bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 group">
            <Image
              src="/assets/images/contact.png"
              alt="Contact"
              fill
              className="object-cover"
            />

            {/* Subtle overlay to make it look premium */}
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
