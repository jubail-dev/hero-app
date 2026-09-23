"use client";

import { AppContext } from "@/context/AppProvider";
import { useContext } from "react";
import Link from "next/link";
import { FaDownload, FaLayerGroup } from "react-icons/fa";
import InstalledAppsCard from "../components/shared/InstalledAppsCard";

const InstallationPage = () => {
  const { installedApps } = useContext(AppContext);

  return (
    <main className="min-h-screen bg-[#f7f7f8] py-20 md:py-26">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">

          <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 text-[#9F62F2] rounded-2xl mb-5">
            <FaLayerGroup size={24} />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Installed Apps
          </h1>

          <p className="text-gray-500 mt-4 text-sm sm:text-base leading-7">
            Manage all the apps you have installed. You can easily view
            your apps or uninstall them whenever you want.
          </p>

        </div>

        {/* App Count */}
        {installedApps.length > 0 && (
          <div className="max-w-5xl mx-auto mb-6 flex items-center justify-between">

            <p className="text-gray-600 font-medium">
              Your Installed Apps
            </p>

            <span className="bg-purple-100 text-[#9F62F2] px-4 py-2 rounded-full text-sm font-bold">
              {installedApps.length}{" "}
              {installedApps.length === 1 ? "App" : "Apps"}
            </span>

          </div>
        )}

        {/* Installed Apps */}
        {installedApps.length === 0 ? (

          /* Empty State */
          <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 text-center shadow-sm">

            <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-6">
              <FaDownload size={28} />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              No Apps Installed Yet
            </h2>

            <p className="text-gray-500 leading-7 mb-7">
              You havent installed any apps yet. Explore our collection
              and find an app that works for you.
            </p>

            <Link
              href="/app"
              className="inline-flex items-center gap-2 bg-[#9F62F2] hover:bg-[#8b4de5] text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-purple-200 hover:scale-105 transition duration-300"
            >
              <FaDownload />
              Explore Apps
            </Link>

          </div>

        ) : (

          /* Apps List */
          <div className="max-w-5xl mx-auto grid grid-cols-1 gap-5">

            {installedApps.map((installedApp) => (
              <InstalledAppsCard
                key={installedApp.id}
                installedApp={installedApp}
              />
            ))}

          </div>

        )}

      </div>
    </main>
  );
};

export default InstallationPage;