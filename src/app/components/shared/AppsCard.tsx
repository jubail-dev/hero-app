import { TrendingAppsType } from "@/Types/trendingAppType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface AppsCardProps {
  apps: TrendingAppsType;
}

const AppsCard = ({ apps }: AppsCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
      {/* App Image */}
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src={apps.image}
            alt={apps.name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* App Name */}
      <h2 className="text-xl font-bold text-gray-800 text-center mt-5">
        {apps.name}
      </h2>

      {/* Downloads & Rating */}
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
        <div>
          <p className="text-xs text-gray-400">Downloads</p>
          <p className="text-sm font-semibold text-gray-700 mt-1">
            {apps.downloads}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-400">Rating</p>
          <p className="text-sm font-semibold text-gray-700 mt-1">
            ⭐ {apps.rating}
          </p>
        </div>
      </div>

      {/* View Details Button */}
      <Link
        href={`/apps/${apps.id}`}
        className="block text-center mt-5 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-xl transition duration-300"
      >
        View Details
      </Link>
    </div>
  );
};

export default AppsCard;
