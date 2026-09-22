import { TrendingAppsType } from "@/Types/trendingAppType";
import AppsGrid from "../shared/AppsGrid";
import { getTrendingApps } from "@/lib/app";


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
        <AppsGrid apps={apps} />
      </div>
    </section>
  );
};

export default TrendingApps;
