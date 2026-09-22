"use client"

import { TrendingAppsType } from '@/Types/trendingAppType';
import React, { ReactNode, useState } from 'react';
import { createContext } from 'react';

type AppContextType = {
    installedApps : TrendingAppsType[]
    setInstalledApps : React.Dispatch<React.SetStateAction<TrendingAppsType[]>>
}

export const AppContext = createContext<AppContextType>({
    installedApps: [],
    setInstalledApps: () => {}
});

const AppProvider = ({children}: {children: ReactNode}) => {

    const [installedApps, setInstalledApps] = useState<TrendingAppsType[]>([]);
    const shareData = {
        installedApps,
        setInstalledApps
    }
    return (
        <AppContext.Provider value={shareData}>{children}</AppContext.Provider>
    );
};

export default AppProvider;