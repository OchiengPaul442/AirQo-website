'use client';
import AnalyticsContentSection from '@components/sections/Home/AnalyticsContentSection';
import AppDownloadSection from '@components/sections/Home/AppDownloadSection';
import HomePlayerSection from '@components/sections/Home/HomePlayerSection';
import StatisticsSection from '@components/sections/Home/HomeStatsSection';
import ReversibleContentSection from '@components/sections/ReversibleContentSection';
import React from 'react';

const HomePage = () => {
  return (
    <div className="space-y-20">
      <HomePlayerSection />
      <StatisticsSection />
      <ReversibleContentSection
        title="High-resolution air quality monitoring network"
        subtitle="Air Quality Monitor"
        description="We deploy a high-resolution air quality monitoring network in target urban areas across Africa to increase awareness and understanding of air quality management, provide actionable information, and derive actions against air pollution."
        buttonText="Learn more"
        buttonLink="#"
        imageUrl="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728175985/website/photos/monitorHome_dmmrsk.png"
        reverse={false}
        backgroundColor="bg-transparent"
      />
      <AnalyticsContentSection
        title="An interactive air quality analytics platform"
        subtitle="Air Quality Analytics"
        description="Access and visualise real-time and historical air quality information across Africa through our easy-to-use air quality analytics dashboard."
        buttonText="Learn more"
        buttonLink="#"
        imageUrl="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728175853/website/photos/analyticsHome_l3hgcy.png"
        backgroundColor="bg-[#EDF3FF]"
        subtitleColor="text-black"
        subtitleBgColor="bg-white"
      />
      <ReversibleContentSection
        title="Amplify air quality impact through our API"
        subtitle="Air Quality API"
        description="Are you a developer? We invite you to leverage our open-air quality data on your App "
        buttonText="Get started here"
        buttonLink="#"
        imageUrl="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132435/website/photos/ApiSection_evfebp.webp"
        reverse={false}
        backgroundColor="bg-transparent"
        leftWidth="lg:w-1/3"
        rightWidth="lg:w-2/3"
      />
      <ReversibleContentSection
        title="Live air quality insights across Africa"
        subtitle="Air Quality Map"
        description="Visualize hourly air quality information with a single click, over our growing network across African cities"
        buttonText="View more"
        buttonLink="#"
        imageUrl="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728178762/website/photos/mapHome_rq49ql.png"
        reverse={false}
        backgroundColor="bg-[#EDF3FF]"
        subtitleColor="text-black"
        subtitleBgColor="bg-white"
        imageClassName="object-cover rounded-xl"
      />

      <AppDownloadSection
        appTitle="Download the app"
        description="Discover the quality of air you are breathing."
        appStoreLink="https://apps.apple.com"
        googlePlayLink="https://play.google.com"
        imageUrl="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132436/website/photos/get-app-sm_bknad9.png"
      />
    </div>
  );
};

export default HomePage;
