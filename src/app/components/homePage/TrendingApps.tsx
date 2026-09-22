import { TrendingAppsType } from '@/Types/trendingAppType';
import React from 'react';

const getTrendingApps = async () : Promise<TrendingAppsType[]> =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/appsData.json`)
    const data = await response.json()
    return data
}

const TrendingApps =async () => {
    const apps : TrendingAppsType[] = await getTrendingApps()
    return (
        <div>
            <h1>This is Trending Apps: {apps.length}</h1>
        </div>
    );
};

export default TrendingApps;