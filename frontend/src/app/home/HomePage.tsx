'use client';
import HomePlayerSection from '@components/sections/Home/HomePlayerSection';
import StatisticsSection from '@components/sections/Home/HomeStatsSection';
import React from 'react';

const HomePage = () => {
  return (
    <div className="space-y-20">
      <HomePlayerSection />
      <StatisticsSection />
    </div>
  );
};

export default HomePage;
