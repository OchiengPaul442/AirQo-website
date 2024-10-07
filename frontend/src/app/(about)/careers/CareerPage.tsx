'use client';
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const categories = [
  'Open positions',
  'All',
  'Administrative',
  'Engineering',
  'Product',
  'Data Science',
  'Policy',
  'Business Development',
  'Machine Learning & AI',
  'Hardware',
  'Design',
  'Marketing',
  'Communications',
];

const jobs = [
  {
    category: 'Engineering',
    title: 'DevOps Engineer',
    type: 'Full Time, Remote',
  },
  { category: 'Engineering', title: 'Front End Engineer', type: 'Full Time' },
  { category: 'Hardware', title: 'DevOps Engineer', type: 'Full Time' },
  { category: 'Hardware', title: 'DevOps Engineer', type: 'Full Time' },
  { category: 'Hardware', title: 'DevOps Engineer', type: 'Full Time' },
];

const CareerPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('Open positions');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredJobs =
    selectedCategory === 'All' || selectedCategory === 'Open positions'
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  return (
    <div className="flex flex-col w-full space-y-16 bg-[#F2F1F6]">
      {/* Header Section */}
      <header
        className="relative h-[300px] lg:h-[400px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dbibjvyhm/image/upload/v1728310706/website/photos/about/careerImage_t91yzh.png")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-5xl mx-auto w-full space-y-6 px-4 lg:px-8 pt-20 text-white">
          <p className="text-sm lg:text-lg">Careers &gt; Welcome to AirQo</p>
          <h1 className="text-4xl lg:text-5xl font-bold mt-2">Join our team</h1>
          <p className="text-sm lg:text-xl mt-4">
            Be part of a team pioneering air quality monitoring in Africa.
            Together, we work passionately towards our vision for Clean Air for
            all African Cities.
          </p>
        </div>
      </header>

      {/* Categories Section */}
      <section className="max-w-5xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-normal mb-8">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-[#0CE87E] text-black'
                  : 'bg-[#FFFFFF80] text-gray-600 hover:bg-green-500 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="max-w-5xl mx-auto w-full px-4 lg:px-8 space-y-12">
        {filteredJobs
          .reduce((acc, job) => {
            if (!acc.includes(job.category)) acc.push(job.category);
            return acc;
          }, [] as string[])
          .map((category) => (
            <div key={category} className="cursor-pointer">
              <h3 className="text-2xl text-gray-400 font-semibold mb-4">
                {category} (
                {filteredJobs.filter((job) => job.category === category).length}
                )
              </h3>
              <div className="space-y-4">
                {filteredJobs
                  .filter((job) => job.category === category)
                  .map((job, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 lg:p-6 bg-[#FFFFFF80] rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div>
                        <h4 className="text-lg font-semibold">{job.title}</h4>
                      </div>
                      <p className="text-gray-500">{job.type}</p>
                      <button className="text-gray-700 hover:text-black">
                        <FiArrowRight size={24} />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </section>

      {/* Contact Section */}
      <footer className="bg-[#F2F1F6] py-16 text-center">
        <p className="text-xl mb-4">
          Don&apos;t see a position that fits you perfectly?
        </p>
        <p className="text-lg">
          Introduce yourself here <br />
          <a
            href="mailto:careers@airqo.africa"
            className="text-blue-600 underline"
          >
            careers@airqo.africa
          </a>
        </p>
      </footer>
    </div>
  );
};

export default CareerPage;
