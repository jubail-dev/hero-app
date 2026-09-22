"use client";

import { AppContext } from "@/context/AppProvider";
import { TrendingAppsType } from "@/Types/trendingAppType";
import Image from "next/image";
import { useContext } from "react";
import { FaDownload, FaStar, FaTrash } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const InstalledAppsCard = ({
  installedApp,
}: {
  installedApp: TrendingAppsType;
}) => {
  const { installedApps, setInstalledApps } = useContext(AppContext);

  const handleUninstallButton = () => {
    const updatedInstalledApps = installedApps.filter(
      (app) => app.id !== installedApp.id,
    );

    setInstalledApps(updatedInstalledApps);
    toast.success(`${installedApp.name} uninstalled successfully!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition duration-300">
      <div className="flex flex-col sm:flex-row gap-5">
        {/* App Image */}
        <div className="shrink-0">
          <Image
            src={installedApp.image}
            alt={installedApp.name}
            width={120}
            height={120}
            className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-2xl"
          />
        </div>

        {/* App Information */}
        <div className="flex-1">
          {/* Name & Category */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {installedApp.name}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                By {installedApp.developer}
              </p>
            </div>

            <span className="w-fit bg-purple-100 text-[#9F62F2] px-3 py-1 rounded-full text-xs font-semibold">
              {installedApp.category}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-6 mt-4 line-clamp-2">
            {installedApp.description}
          </p>

          {/* App Stats */}
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <FaStar className="text-yellow-400" />

              <span className="font-semibold text-gray-800">
                {installedApp.rating}
              </span>
            </div>

            {/* Downloads */}
            <div className="flex items-center gap-1.5 text-gray-500">
              <FaDownload />

              <span>{installedApp.downloads}</span>
            </div>

            {/* Platform */}
            <span className="text-gray-500">{installedApp.platform}</span>

            {/* Price */}
            <span className="font-semibold text-[#9F62F2]">
              {installedApp.price === 0 ? "Free" : `$${installedApp.price}`}
            </span>
          </div>

          {/* Uninstall Button */}
          <div className="flex justify-end mt-5">
            <button
              type="button"
              onClick={handleUninstallButton}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-red-200 bg-red-50 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition duration-300"
            >
              <FaTrash size={14} />
              Uninstall
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalledAppsCard;
