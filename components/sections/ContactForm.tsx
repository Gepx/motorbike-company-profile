import { Send } from "lucide-react";
import React from "react";

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
