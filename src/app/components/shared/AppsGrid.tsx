
"use client";

import React, { useState } from "react";
import AppsCard from "./AppsCard";
import { TrendingAppsType } from "@/Types/trendingAppType";

interface AppsGridProps {
  apps: TrendingAppsType[];
}

const AppsGrid = ({ apps }: AppsGridProps) => {
  const [visibleApps, setVisibleApps] = useState(12);

  const handleShowMore = () => {
    setVisibleApps((previous) => previous + 3);
  };

  const hasMoreApps = visibleApps < apps.length;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
        {apps.slice(0, visibleApps).map((app) => (
          <AppsCard key={app.id} apps={app} />
        ))}
      </div>

      {hasMoreApps && (
        <div className="flex justify-center mt-10 md:mt-12">
          <button
            onClick={handleShowMore}
            className="px-7 py-3 rounded-xl bg-[#9F62F2] text-white font-semibold shadow-md hover:bg-[#8950df] hover:shadow-lg transition duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default AppsGrid;

