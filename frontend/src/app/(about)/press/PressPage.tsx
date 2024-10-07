'use client';
import { CustomButton, Pagination } from '@components/ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const PressPage: React.FC = () => {
  const router = useRouter();

  const articles = [
    {
      id: 1,
      title:
        'Jinja embraces World Car Free Day with street closures for walks and cycling',
      date: 'September 21, 2024',
      logo: 'https://images.unsplash.com/photo-1713944183733-af06cf11e730?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3N8ZW58MHx8MHx8fDA%3D', // Replace with actual image paths
      link: '/article/1',
    },
    {
      id: 2,
      title:
        "Tackling Air Pollution: Nairobi City's Efforts Showcased at Lagos Forum come up with some great ideas to tackle air pollution in Nairobi",
      date: 'August 26, 2024',
      logo: '/images/clean-air-catalyst-logo.png',
      link: '/article/2',
    },
    {
      id: 3,
      title: 'Low-cost sensors to improve air quality monitoring',
      date: 'June 18, 2024',
      logo: '/images/independent-logo.png',
      link: '/article/3',
    },
    {
      id: 4,
      title:
        'Air Quality Sensors Boosting Nairobi’s Fight Against Air Pollution',
      date: 'February 29, 2024',
      logo: '/images/global-issues-logo.png',
      link: '/article/4',
    },
    {
      id: 5,
      title:
        'Mitigating Air Pollution for Better Health: African Cities Unite in Lagos to Transform Air Quality',
      date: 'July 8, 2024',
      logo: '/images/africa-today-logo.png',
      link: '/article/5',
    },
    // Add more articles as needed...
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const displayedArticles = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage + 1,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header Section */}
      <section className="mb-12 bg-[#F2F1F6] px-4 lg:px-0 py-16">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-4xl font-bold mb-2">In the Press</h1>
          <p className="text-lg text-gray-600">
            Stories about AirQo that we think you&apos;ll love
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-5xl mx-auto w-full px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {displayedArticles.map((article, idx) => (
          <div
            key={article.id}
            className={`p-8 lg:px-16 lg:py-12 space-y-8 rounded-lg shadow-sm transition-shadow hover:shadow-md bg-card-custom-gradient ${
              idx === itemsPerPage ? 'lg:col-span-2' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="relative">
                <div className="absolute inset-0 bg-card-custom-gradient opacity-70 pointer-events-none"></div>
                <Image
                  src={article.logo}
                  alt={`logo`}
                  width={100}
                  height={30}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-500 text-sm">{article.date}</p>
            </div>
            <h2 className="text-2xl font-semibold">{article.title}</h2>
            <CustomButton
              onClick={() => router.push(article.link)}
              className="text-black px-4 py-2 bg-transparent border border-black transition-colors mt-4"
            >
              Read article →
            </CustomButton>
          </div>
        ))}
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

export default PressPage;
