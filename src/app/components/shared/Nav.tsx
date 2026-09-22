import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="shadow py-6 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div>
            <Image src={Logo} alt="Hero Logo" width={40} height={40}></Image>
          </div>

          {/* Nav Links */}

          <div>
            <ul className="flex justify-center items-center gap-10 font-bold text-black text-md">
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

          {/* Header Button */}

          <div className="bg-[#9F62F2] py-3 px-6 font-bold text-white rounded-2xl">
            <Link href="/github">
              <button>
                <span>
                  <FaGithub className="inline-block" /> Contribute
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
