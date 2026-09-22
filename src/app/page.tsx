import React from 'react';
import Banner from './components/homePage/Banner';
import Stats from './components/homePage/Stats';
import TrendingApps from './components/homePage/TrendingApps';

const page = () => {
  return (
    <div>
        <Banner></Banner>
        <Stats></Stats>
        <TrendingApps></TrendingApps>
    </div>
  );
};

export default page;