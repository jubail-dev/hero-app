
"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { AppContext } from "@/context/AppProvider";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { installedApps } = useContext(AppContext);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white shadow py-4 md:py-5">
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-between">

          {/* Logo Area */}
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={Logo}
              alt="HERO.IO Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />

            <span className="text-xl font-extrabold tracking-tight text-black sm:text-2xl">
              HERO<span className="text-[#9F62F2]">.IO</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <ul className="flex items-center justify-center gap-6 font-bold text-black lg:gap-10">

              <li>
                <Link
                  href="/"
                  className="transition hover:text-[#9F62F2]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/app"
                  className="transition hover:text-[#9F62F2]"
                >
                  App
                </Link>
              </li>

              <li>
                <Link
                  href="/installation"
                  className="transition hover:text-[#9F62F2]"
                >
                  {installedApps.length > 0
                    ? `Installed (${installedApps.length})`
                    : "Installation"}
                </Link>
              </li>

              <li>
                <Link
                  href="/404"
                  className="transition hover:text-[#9F62F2]"
                >
                  404 Zone
                </Link>
              </li>

            </ul>
          </div>

          {/* Desktop Contribute Button */}
          <div className="hidden md:block">

            <Link
              href="https://github.com/jubail-dev"
              target="_blank"
              className="flex items-center gap-2 rounded-xl bg-[#9F62F2] px-5 py-3 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#8B4DE5]"
            >
              <FaGithub />
              Contribute
            </Link>

          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-black transition hover:text-[#9F62F2] md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-5 border-t border-gray-200 pt-5 md:hidden">

            <ul className="flex flex-col items-center gap-5 font-bold text-black">

              <li>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="transition hover:text-[#9F62F2]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/app"
                  onClick={() => setIsOpen(false)}
                  className="transition hover:text-[#9F62F2]"
                >
                  App
                </Link>
              </li>

              <li>
                <Link
                  href="/installation"
                  onClick={() => setIsOpen(false)}
                  className="transition hover:text-[#9F62F2]"
                >
                  {installedApps.length > 0
                    ? `Installed (${installedApps.length})`
                    : "Installation"}
                </Link>
              </li>

              <li>
                <Link
                  href="/404"
                  onClick={() => setIsOpen(false)}
                  className="transition hover:text-[#9F62F2]"
                >
                  404 Zone
                </Link>
              </li>

              <li>
                <Link
                  href="https://github.com/jubail-dev"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-xl bg-[#9F62F2] px-6 py-3 text-white transition duration-300 hover:bg-[#8B4DE5]"
                >
                  <FaGithub />
                  Contribute
                </Link>
              </li>

            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Nav;


