'use client';
import { CustomButton, Pagination } from '@components/ui';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FiDownload } from 'react-icons/fi';

const ResourcePage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabs = [
    'Research Publications',
    'Technical reports and Policy documents',
    'Guides and manuals',
  ];
  const resources = [
    {
      title:
        "Air Pollution (PM2.5) and it's Meteorology Predictors in Kampala and Jinja cities in Uganda.",
      authors:
        "Aishat Jumoke Alaran, Natasha O'Sullivan, Lambed Tatah, Richard Sserunjogi, Gabriel Okello (2024)",
      type: 'Research Publications',
      downloadable: true,
    },
    {
      title: 'Inaugural stakeholder workshop in Yaounde.',
      authors: 'HoPiT Research Group',
      type: 'Research Publications',
      downloadable: true,
    },
    {
      title:
        'Social competition drives collective action to reduce informal waste burning in Uganda',
      authors: 'Mark T. Buntaine, Polycarp Komakech, and Shiran Victoria Shen',
      type: 'Research Publications',
    },
    {
      title:
        'AI-driven environmental sensor networks and digital platforms for urban air pollution monitoring and modelling.',
      authors:
        'Engineer Bainomugisha, Priscah Adrine Warigo, Faith Busigu Daka, Angela Nshimye, Maclina Birungi, Deo Okure (2024)',
      type: 'Research Publications',
    },
    {
      title:
        'The impact of urban mobility on air pollution in Kampala, an exemplar sub-Saharan African city.',
      authors:
        'Omid Ghaffarpasand, Deo Okure, Paul Green, Saba Sayyahi, Priscilla Adong, Richard Sserunjogi, Engineer Bainomugisha , Francis D. Pope (2024)',
      type: 'Research Publications',
    },
    {
      title: 'System for Urban Environments in Low-Resource Settings.',
      authors: 'Engineer Bainomugisha, Joel Ssematimba, Deo Okure (2023)',
      type: 'Technical reports and Policy documents',
    },
  ];

  const selectedTabFromQuery =
    searchParams?.get('tab') || 'Research Publications';
  const [selectedTab, setSelectedTab] = useState<string>(selectedTabFromQuery);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 4;
  const filteredResources = resources.filter(
    (resource) => resource.type === selectedTab,
  );
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const displayedResources = filteredResources.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    if (tabs.includes(selectedTabFromQuery)) {
      setSelectedTab(selectedTabFromQuery);
    }
  }, [selectedTabFromQuery]);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    setCurrentPage(1);
    const url = `/resources?tab=${tab}`;
    router.push(url);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col w-full space-y-16 overflow-hidden">
      <section className="bg-[#F2F1F6] pt-16">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <p className="text-xl mb-8">
            Discover our latest collection of resources
          </p>

          {/* Tabs Section */}
          <div className="flex space-x-8 border-b overflow-x-auto border-gray-300">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`pb-2 text-lg ${
                  selectedTab === tab
                    ? 'text-black border-b-2 border-black font-semibold'
                    : 'text-gray-500'
                } transition-colors duration-300`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources List Section */}
      <section className="max-w-5xl mx-auto w-full px-4 lg:px-8">
        <div className="space-y-6">
          {displayedResources.map((resource, idx) => (
            <div
              key={idx}
              className="bg-card-custom-gradient p-6 lg:p-16 rounded-lg"
            >
              <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
              <p className="text-gray-600 mb-4">{resource.authors}</p>
              <div className="flex items-center justify-between">
                {resource.downloadable && (
                  <CustomButton className="flex items-center text-black border border-black bg-transparent px-4 py-2">
                    <FiDownload className="mr-2" /> Download
                  </CustomButton>
                )}
                {!resource.downloadable && (
                  <CustomButton className="flex items-center text-black border border-black bg-transparent px-4 py-2">
                    Read More →
                  </CustomButton>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination Section */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ResourcePage;
