
import { TrendingAppsType } from "@/Types/trendingAppType";
import React from "react";
import AppsCard from "../components/shared/AppsCard";
import { getTrendingApps } from "@/lib/app";

const AppPage = async () => {
  const apps: TrendingAppsType[] = await getTrendingApps();

  return (
    <section className="bg-gray-50 py-25 md:py-30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <p className="text-sm md:text-base font-semibold text-[#9F62F2] uppercase tracking-wider mb-2">
            Trending Now
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            All Apps
          </h1>

          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Explore all trending apps on the market developed by us
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {apps.map((app) => (
            <AppsCard key={app.id} apps={app} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AppPage;
