import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/hero.png";
import Link from "next/link";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="pt-[150px] bg-[#f5f5f5] overflow-hidden">

      <div className="container mx-auto px-4 flex flex-col justify-between items-center">
        
        {/* Text and Buttons area */}
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl">
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight">
            
            We Build <br />
            <span className="text-[#9F62F2] font-bold"> Productive </span>
            Apps
          </h1>
          <p className="max-w-2xl text-gray-600 text-sm sm:text-base lg:text-lg leading-7">
            
            At <span className="font-semibold text-gray-800">HERO.IO</span>, we
            craft innovative apps designed to make everyday life simpler,
            smarter, and more exciting. Our goal is to turn your ideas into
            digital experiences that truly make an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            
            <Link href="https://play.google.com/store/games?device=windows">
              
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-medium shadow-lg hover:scale-105 transition duration-300">
                
                <IoLogoGooglePlaystore size={22} /> Play Store
              </button>
            </Link>
            <Link href="">
              
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#9F62F2] text-white font-medium shadow-lg shadow-purple-200 hover:scale-105 hover:bg-[#8b4de5] transition duration-300">
                
                <FaAppStoreIos size={22} /> App Store
              </button>
            </Link>
          </div>
        </div>
        {/* Image area */}
        <div className="mt-16 w-full flex justify-center">
          
          <Image
            src={BannerImage}
            alt="Banner Image"
            className="w-full max-w-4xl h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};
export default Banner;
