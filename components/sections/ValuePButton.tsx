import React from "react";

const ValuePButton = () => {
  return (
    <div className="mt-20 flex flex-col items-center text-center">
      <p className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6">
        Trusted by Thousands of Riders
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-red-500/30 hover:-translate-y-1">
          Contact Our Advisors
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        <button className="cursor-pointer bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full font-bold transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
          Learn About Financing
        </button>
      </div>
    </div>
  );
};

export default ValuePButton;
