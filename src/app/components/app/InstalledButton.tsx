"use client";

import { AppContext } from "@/context/AppProvider";
import { TrendingAppsType } from "@/Types/trendingAppType";
import React, { useContext } from "react";
import { FaDownload } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { Bounce, toast } from "react-toastify";

const InstalledButton = ({ app }: { app: TrendingAppsType }) => {
  const { installedApps, setInstalledApps } = useContext(AppContext);
  const handleInstallButton = () => {
    setInstalledApps([...installedApps, app]);
    toast.success(`${app.name} installed successfully! Check your installation page.`, {
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
    <button
      className="inline-flex items-center justify-center gap-3 bg-[#9F62F2] hover:bg-[#8b4de5] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-purple-200 hover:scale-105 transition duration-300"
      onClick={() => handleInstallButton()}
      disabled={installedApps.some((installedApp) => installedApp.id === app.id)}
    >
      {installedApps.some((installedApp) => installedApp.id === app.id) ? (
        <GrStatusGood />
      ) : (
        <FaDownload />
      )}
      {installedApps.some((installedApp) => installedApp.id === app.id)
        ? "Installed"
        : "Install App"}
    </button>
  );
};

export default InstalledButton;
