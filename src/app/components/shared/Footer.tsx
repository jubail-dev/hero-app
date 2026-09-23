
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import {
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 bg-[#0B0B0D] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-9 lg:grid-cols-4 lg:gap-10">

          {/* ================= Brand ================= */}
          <div>

            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
            >
              <Image
                src={Logo}
                alt="HERO.IO Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />

              <span className="text-xl font-bold text-white">
                HERO<span className="text-[#B67AFF]">.IO</span>
              </span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-300">
              Discover powerful apps that make your digital life
              simpler, smarter, and more productive.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2.5">

              <Link
                href="https://github.com/"
                target="_blank"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gray-200 transition duration-300 hover:bg-[#9F62F2] hover:text-white"
              >
                <FaGithub size={15} />
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gray-200 transition duration-300 hover:bg-[#9F62F2] hover:text-white"
              >
                <FaFacebookF size={14} />
              </Link>

              <Link
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gray-200 transition duration-300 hover:bg-[#9F62F2] hover:text-white"
              >
                <FaTwitter size={14} />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gray-200 transition duration-300 hover:bg-[#9F62F2] hover:text-white"
              >
                <FaLinkedinIn size={14} />
              </Link>

            </div>
          </div>


          {/* ================= Quick Links + Categories ================= */}
          <div className="grid grid-cols-2 gap-6 lg:contents">

            {/* Quick Links */}
            <div>

              <h3 className="mb-4 text-sm font-bold text-white">
                Quick Links
              </h3>

              <ul className="space-y-2.5 text-sm">

                <li>
                  <Link
                    href="/"
                    className="text-gray-300 transition duration-300 hover:text-[#B67AFF]"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/app"
                    className="text-gray-300 transition duration-300 hover:text-[#B67AFF]"
                  >
                    All Apps
                  </Link>
                </li>

                <li>
                  <Link
                    href="/installation"
                    className="text-gray-300 transition duration-300 hover:text-[#B67AFF]"
                  >
                    Installation
                  </Link>
                </li>

              </ul>
            </div>


            {/* Categories */}
            <div>

              <h3 className="mb-4 text-sm font-bold text-white">
                Categories
              </h3>

              <ul className="space-y-2.5 text-sm text-gray-300">

                <li>Productivity</li>
                <li>Education</li>
                <li>Entertainment</li>
                <li>Development</li>

              </ul>
            </div>

          </div>


          {/* ================= HERO.IO ================= */}
          <div>

            <h3 className="mb-4 text-sm font-bold text-white">
              HERO.IO
            </h3>

            <p className="max-w-xs text-sm leading-6 text-gray-300">
              A modern platform for discovering useful and
              productive applications.
            </p>

            <Link
              href="https://github.com/jubail-dev"
              target="_blank"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#9F62F2] px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#8B4DE5]"
            >
              <FaGithub size={14} />
              GitHub
            </Link>

          </div>

        </div>
      </div>


      {/* ================= Bottom Footer ================= */}
      <div className="border-t border-white/15">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          {/* Copyright */}
          <p className="text-center text-xs leading-5 text-gray-400 md:text-left md:text-sm">
            © {new Date().getFullYear()}{" "}

            <span className="font-semibold text-gray-200">
              HERO.IO
            </span>{" "}

            . Made By{" "}

            <span className="font-semibold text-white">
              JR Jubail 💖
            </span>
          </p>


          {/* Bottom Links */}
          <div className="flex items-center justify-center gap-4 sm:gap-5">

            <Link
              href="#"
              className="text-xs text-gray-400 transition duration-300 hover:text-white sm:text-sm"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="text-xs text-gray-400 transition duration-300 hover:text-white sm:text-sm"
            >
              Terms
            </Link>

            <Link
              href="#"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gray-200 transition duration-300 hover:bg-[#9F62F2] hover:text-white"
              title="Back to top"
            >
              <FaArrowUp size={12} />
            </Link>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;

