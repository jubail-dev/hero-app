"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { AppContext } from "@/context/AppProvider";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {installedApps} = useContext(AppContext)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div>
            <Image src={Logo} alt="Hero Logo" width={40} height={40} />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <ul className="flex justify-center items-center gap-6 lg:gap-10 font-bold text-black text-md">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/app">App</Link>
              </li>

              <li>
                <Link href="/installation">{installedApps.length > 0 ? `Installed (${installedApps.length})` : "Installation"}</Link>
              </li>

              <li>
                <Link href="/404">404 Zone</Link>
              </li>
            </ul>
          </div>

          {/* Desktop Contribute Button */}
          <div className="hidden md:block bg-[#9F62F2] py-3 px-6 font-bold text-white rounded-2xl">
            <Link href="https://github.com/jubail-dev" target="_blank">
              <span>
                <FaGithub className="inline-block mr-2" />
                Contribute
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-black"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-5 border-t pt-5">
            <ul className="flex flex-col items-center gap-5 font-bold text-black">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="/app" onClick={() => setIsOpen(false)}>
                  App
                </Link>
              </li>


              <li>
                <Link href="/installation" onClick={() => setIsOpen(false)}>
                  {installedApps.length > 0 ? `Installed (${installedApps.length})` : "Installation"}
                </Link>
              </li>

              <li>
                <Link href="/404" onClick={() => setIsOpen(false)}>
                  404 Zone
                </Link>
              </li>

              <li>
                <Link
                  href="https://github.com/"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#9F62F2] text-white px-6 py-3 rounded-2xl flex items-center gap-2"
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
