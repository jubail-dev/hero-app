import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { FaGithub, FaBars } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="shadow py-4 md:py-6">
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
                <Link href="/installation">Installation</Link>
              </li>
            </ul>
          </div>

          {/* Desktop Header Button */}
          <div className="hidden md:block bg-[#9F62F2] py-3 px-6 font-bold text-white rounded-2xl">
            <Link href="https://github.com/" target="_blank">
              <span>
                <FaGithub className="inline-block mr-2" />
                Contribute
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl text-black">
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;