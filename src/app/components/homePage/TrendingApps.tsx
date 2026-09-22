
import { TrendingAppsType } from "@/Types/trendingAppType";
import React from "react";
import AppsCard from "../shared/AppsCard";

const getTrendingApps = async (): Promise<TrendingAppsType[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/appsData.json`,
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching trending apps:", error);
    return [];
  }
};

const TrendingApps = async () => {
  const apps: TrendingAppsType[] = await getTrendingApps();

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <p className="text-sm md:text-base font-semibold text-[#9F62F2] uppercase tracking-wider mb-2">
            Trending Now
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Trending Apps
          </h1>

          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Explore all trending apps on the market developed by us
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {apps.slice(0, 12).map((app) => (
            <AppsCard key={app.id} apps={app} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-10 md:mt-12">
          <button className="px-7 py-3 rounded-xl bg-[#9F62F2] text-white font-semibold shadow-md hover:bg-[#8950df] hover:shadow-lg transition duration-300">
            Show All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;
