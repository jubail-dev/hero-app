"use client"
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f5ff] flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <div className="mb-6">
          <h1 className="text-[100px] sm:text-[140px] md:text-[180px] leading-none font-black text-[#9F62F2]">
            404
          </h1>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 text-sm sm:text-base md:text-lg leading-7">
          Sorry, the page you are looking for does not exist or may have been
          moved to another location.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#9F62F2] text-white font-semibold shadow-md hover:bg-[#8950df] hover:shadow-lg transition duration-300"
          >
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-7 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-100 transition duration-300"
          >
            Go Back
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#9F62F2]"></span>
          <span className="text-sm text-gray-400">
            HERO.IO
          </span>
          <span className="w-2 h-2 rounded-full bg-[#9F62F2]"></span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

