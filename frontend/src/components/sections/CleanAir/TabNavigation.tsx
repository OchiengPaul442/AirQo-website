'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TabNavigation: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('/');

  const tabs = [
    { label: 'About', value: '/' },
    { label: 'Membership', value: 'membership' },
    { label: 'Events', value: 'events' },
    { label: 'Resources', value: 'resources' },
  ];

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    router.push(`/clean-air-network/${value}`);
  };

  return (
    <div className="border-y pt-4 bg-white border-gray-200">
      <div className="flex space-x-8 max-w-5xl mx-auto px-4 lg:px-0">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className={`pb-2 text-[14px] font-normal transition-colors duration-300 ${
              activeTab === tab.value
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
