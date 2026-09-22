import { TrendingAppsType } from "@/Types/trendingAppType";

export const getTrendingApps = async (): Promise<TrendingAppsType[]> => {
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