'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import {
  CustomButton,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Pagination,
} from '@/components/ui';

// Dummy data for resources
const resources = [
  {
    category: 'Toolkits',
    title:
      'Developed the first ever clean air action plan for Kampala Capital City, a blueprint for other cities in Uganda',
    createdBy: 'Kampala Capital City Authority (KCCA)',
  },
  {
    category: 'Technical Reports',
    title: 'Technical assessment of air quality in African cities',
    createdBy: 'African Environmental Agency',
  },
  {
    category: 'Workshop Reports',
    title: 'Workshop on clean air initiatives across Africa',
    createdBy: 'African Workshop Committee',
  },
  {
    category: 'Research Publications',
    title: 'Research on air pollution control in urban areas',
    createdBy: 'African Research Institute',
  },
  // Add more resources as needed
];

// Categories for the dropdown filter
const categories = [
  'All',
  'Toolkits',
  'Technical Reports',
  'Workshop Reports',
  'Research Publications',
];

const ResourcePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Filter resources based on selected category
  const filteredResources =
    selectedCategory === 'All'
      ? resources
      : resources.filter((resource) => resource.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const paginatedResources = filteredResources.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="py-8 space-y-16">
      {/* Main banner section */}
      <section className="max-w-5xl mx-auto w-full">
        <div className="py-8 px-4 lg:px-0 flex flex-col items-center space-y-6 md:space-y-8">
          <div className="w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132390/website/cleanAirForum/images/resource_apztbz.webp"
              alt="Air Quality Management Banner"
              width={800}
              height={400}
              className="rounded-lg object-contain w-full"
            />
          </div>
        </div>
      </section>

      {/* Resource Filter and List */}
      <section className="px-4 bg-blue-50 lg:px-0 py-16">
        <div className="max-w-5xl mx-auto w-full space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Resource Center</h2>
            {/* Filter Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none">
                  All
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Resource Cards */}
          <div className="space-y-6">
            {paginatedResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-5 lg:p-8">
                <p className="text-blue-500 text-[20px] font-semibold mb-2">
                  {resource.category.toUpperCase()}
                </p>
                <h3 className="text-[40px] font-semibold mb-2">
                  {resource.title}
                </h3>
                <div>
                  <p className="font-semibold text-[24px]">Created by </p>
                  <p>{resource.createdBy}</p>
                </div>
                <CustomButton
                  className="mt-4 text-black bg-transparent border border-gray-800"
                  onClick={() => alert('Read more')}
                >
                  Read action plan →
                </CustomButton>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {filteredResources.length > itemsPerPage && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default ResourcePage;
