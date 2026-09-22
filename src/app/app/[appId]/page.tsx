import { getTrendingApps } from "@/lib/app";
import { TrendingAppsType } from "@/Types/trendingAppType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaDownload, FaStar, FaWindows } from "react-icons/fa";

const AppDetailPage = async ({
  params,
}: {
  params: Promise<{ appId: string }>;
}) => {
  const { appId } = await params;

  const allApps = await getTrendingApps();

  const app = allApps.find(
    (app: TrendingAppsType) => app.id === Number(appId)
  );

  if (!app) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          App Not Found
        </h1>

        <p className="text-gray-500 mb-6">
          Sorry, we couldnt find the app youre looking for.
        </p>

        <Link
          href="/app"
          className="bg-[#9F62F2] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#8b4de5] transition"
        >
          Back to Apps
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-[#f7f7f8] min-h-screen py-10 md:py-16">
      <div className="container mx-auto px-4">

        {/* Back Button */}
        <Link
          href="/app"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#9F62F2] font-medium mb-8 transition"
        >
          <FaArrowLeft />
          Back to Apps
        </Link>

        {/* Main Details Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

          <div className="p-6 sm:p-8 md:p-12">

            {/* Top Section */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">

              {/* App Image */}
              <div className="shrink-0 flex justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                  <Image
                    src={app.image}
                    alt={app.name}
                    fill
                    className="object-cover rounded-3xl shadow-md"
                  />
                </div>
              </div>

              {/* App Basic Info */}
              <div className="flex-1">

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-[#9F62F2] px-4 py-1.5 rounded-full text-sm font-semibold">
                    {app.category}
                  </span>

                  <span className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                    {app.platform}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                  {app.name}
                </h1>

                <p className="text-gray-500 text-lg mb-6">
                  Developed by{" "}
                  <span className="font-semibold text-gray-800">
                    {app.developer}
                  </span>
                </p>

                {/* Rating & Downloads */}
                <div className="flex flex-wrap items-center gap-6 mb-7">

                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    <span className="font-bold text-gray-800">
                      {app.rating}
                    </span>
                    <span className="text-gray-500">Rating</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaDownload className="text-gray-400" />
                    <span className="font-bold text-gray-800">
                      {app.downloads}
                    </span>
                    <span className="text-gray-500">Downloads</span>
                  </div>

                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-gray-500">Price:</span>

                  <span className="text-2xl font-bold text-[#9F62F2]">
                    {app.price === 0 ? "Free" : `$${app.price}`}
                  </span>
                </div>

                {/* Install Button */}
                <button className="inline-flex items-center justify-center gap-3 bg-[#9F62F2] hover:bg-[#8b4de5] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-purple-200 hover:scale-105 transition duration-300">
                  <FaDownload />
                  Install App
                </button>

              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-10"></div>

            {/* Description */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                About {app.name}
              </h2>

              <p className="text-gray-600 leading-8 text-base md:text-lg">
                {app.description}
              </p>
            </div>

            {/* App Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                App Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Developer */}
                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-sm text-gray-500 mb-2">
                    Developer
                  </p>
                  <p className="font-bold text-gray-800">
                    {app.developer}
                  </p>
                </div>

                {/* Category */}
                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-sm text-gray-500 mb-2">
                    Category
                  </p>
                  <p className="font-bold text-gray-800">
                    {app.category}
                  </p>
                </div>

                {/* Platform */}
                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-sm text-gray-500 mb-2">
                    Platform
                  </p>
                  <p className="font-bold text-gray-800">
                    {app.platform}
                  </p>
                </div>

                {/* Downloads */}
                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-sm text-gray-500 mb-2">
                    Downloads
                  </p>
                  <p className="font-bold text-gray-800">
                    {app.downloads}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default AppDetailPage;