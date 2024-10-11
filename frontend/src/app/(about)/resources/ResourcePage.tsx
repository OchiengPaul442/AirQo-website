'use client';
import { CustomButton, Pagination } from '@components/ui';
import { getPublications } from '@services/apiService';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FiDownload } from 'react-icons/fi';

const ResourcePage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Tabs mapped to categories from the Publication model
  const tabs = [
    { name: 'Research Publications', value: 'research' },
    { name: 'Technical Reports and Policy Documents', value: 'technical' },
    { name: 'Guides and Manuals', value: 'guide' },
  ];

  // State management
  const [selectedTab, setSelectedTab] = useState<string>(
    searchParams?.get('tab') || 'research',
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [publications, setPublications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination logic
  const itemsPerPage = 4;
  const filteredResources = publications.filter(
    (resource) => resource.category === selectedTab,
  );
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const displayedResources = filteredResources.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    const fetchPublications = async () => {
      setLoading(true);
      try {
        const response = await getPublications(); // API call to fetch publications
        setPublications(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching publications:', error);
        setLoading(false);
      }
    };
    fetchPublications();
  }, []);

  useEffect(() => {
    if (tabs.some((tab) => tab.value === selectedTab)) {
      setCurrentPage(1);
    }
  }, [selectedTab]);

  // Handle tab click
  const handleTabClick = (tabValue: string) => {
    setSelectedTab(tabValue);
    setCurrentPage(1);
    const url = `/resources?tab=${tabValue}`;
    router.push(url);
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col w-full space-y-16 overflow-hidden">
      {/* Header Section */}
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
                key={tab.value}
                onClick={() => handleTabClick(tab.value)}
                className={`pb-2 text-lg ${
                  selectedTab === tab.value
                    ? 'text-black border-b-2 border-black font-semibold'
                    : 'text-gray-500'
                } transition-colors duration-300`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources List Section */}
      <section className="max-w-5xl mx-auto w-full px-4 lg:px-8">
        {loading ? (
          // Skeleton Loader
          <div className="space-y-6">
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 lg:p-16 rounded-lg animate-pulse"
              >
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                <div className="h-10 bg-gray-300 rounded w-32"></div>
              </div>
            ))}
          </div>
        ) : displayedResources.length === 0 ? (
          // No resources message
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No resources available</p>
          </div>
        ) : (
          <div className="space-y-6">
            {displayedResources.map((resource, idx) => (
              <div
                key={idx}
                className="bg-card-custom-gradient p-6 lg:p-16 rounded-lg"
              >
                <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
                <p className="text-gray-600 mb-4">{resource.authors}</p>
                <div className="flex items-center justify-between">
                  {resource.link && (
                    <CustomButton
                      className="flex items-center text-black border border-black bg-transparent px-4 py-2"
                      onClick={() => window.open(resource.link, '_blank')}
                    >
                      {resource.link_title || 'Read More'} →
                    </CustomButton>
                  )}

                  {resource.resource_file_url && (
                    <CustomButton
                      className="flex items-center text-black border border-black bg-transparent px-4 py-2"
                      onClick={() =>
                        window.open(resource.resource_file_url, '_blank')
                      }
                    >
                      <FiDownload className="mr-2" /> Download
                    </CustomButton>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Pagination Section */}
      {displayedResources.length > 0 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ResourcePage;
