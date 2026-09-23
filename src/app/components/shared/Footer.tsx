
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

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
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

            <p className="mt-3 max-w-xs text-sm leading-6 text-gray-300">
              Discover powerful apps that make your digital life
              simpler, smarter, and more productive.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex gap-2.5">

              <Link
                href="https://github.com/"
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gray-200 transition hover:bg-[#9F62F2] hover:text-white"
              >
                <FaGithub size={15} />
              </Link>

              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gray-200 transition hover:bg-[#9F62F2] hover:text-white"
              >
                <FaFacebookF size={14} />
              </Link>

              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gray-200 transition hover:bg-[#9F62F2] hover:text-white"
              >
                <FaTwitter size={14} />
              </Link>

              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gray-200 transition hover:bg-[#9F62F2] hover:text-white"
              >
                <FaLinkedinIn size={14} />
              </Link>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-2.5 text-sm">

              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition hover:text-[#B67AFF]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/app"
                  className="text-gray-300 transition hover:text-[#B67AFF]"
                >
                  All Apps
                </Link>
              </li>

              <li>
                <Link
                  href="/installation"
                  className="text-gray-300 transition hover:text-[#B67AFF]"
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

          {/* About */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-white">
              HERO.IO
            </h3>

            <p className="text-sm leading-6 text-gray-300">
              A modern platform for discovering useful and
              productive applications.
            </p>

            <Link
              href="https://github.com/"
              target="_blank"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#9F62F2] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#8B4DE5]"
            >
              <FaGithub size={14} />
              GitHub
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/15">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-4 text-sm sm:px-6 md:flex-row lg:px-8">

          <p className="text-center text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-200">
              HERO.IO
            </span>
            . Made By <span className="text-white">JR Jubail 💖</span>.
          </p>

          <div className="flex items-center gap-5">

            <Link
              href="#"
              className="text-gray-400 transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="text-gray-400 transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-gray-200 transition hover:bg-[#9F62F2] hover:text-white"
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

