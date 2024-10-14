'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CustomButton } from '@/components/ui';

// Utility function to detect platform
const getDownloadLink = () => {
  const userAgent =
    typeof window !== 'undefined'
      ? navigator.userAgent || navigator.vendor
      : '';

  if (/android/i.test(userAgent)) {
    return 'https://play.google.com/store/apps/details?id=com.airqo.app';
  } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
    return 'https://apps.apple.com/ug/app/airqo-air-quality/id1337573091';
  } else {
    return 'https://play.google.com/store/apps/details?id=com.airqo.app';
  }
};

const ExplorePage = () => {
  const handleDownloadClick = () => {
    const downloadLink = getDownloadLink();
    window.open(downloadLink, '_blank');
  };

  return (
    <div className="bg-gray-300 min-h-screen flex justify-center items-center px-4">
      <div className="max-w-5xl w-full bg-white shadow-md rounded-lg relative overflow-hidden lg:h-[600px]">
        {/* Close Button */}
        <Link
          href="/"
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr,3fr] h-full">
          {/* Left Section - Smaller Width */}
          <div className="flex flex-col justify-center h-full bg-gray-50 p-8 lg:p-16">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>{'>'}</li>
                <li>
                  <Link href="#" className="hover:underline">
                    Explore Data
                  </Link>
                </li>
              </ol>
            </nav>

            {/* Heading */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Visualise air quality information.
            </h1>

            {/* Description */}
            <p className="text-gray-600 mb-8">
              Access real-time and historic air quality information across
              Africa through our easy-to-use air quality analytics dashboard or
              mobile app.
            </p>
          </div>

          {/* Right Section - Larger Width */}
          <div className="flex flex-col justify-center p-8 lg:p-16 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="bg-gray-100 rounded-t-lg w-full h-full flex justify-center items-center mb-4">
                  <div className="relative w-32 h-32">
                    <Image
                      src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728918806/website/photos/explore/discover-air-quality_opodxi.svg"
                      alt="AirQo App"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                </div>
                <p className="text-gray-700 mb-2 text-sm text-center">
                  Discover the quality of air you are breathing.
                </p>
                <CustomButton
                  className="text-white"
                  onClick={handleDownloadClick}
                >
                  Download App
                </CustomButton>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="bg-gray-100 rounded-t-lg w-full flex justify-center items-center mb-4">
                  <div className="relative w-32 h-32">
                    <Image
                      src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728918807/website/photos/explore/air-quality-platform_s8c3su.svg"
                      alt="Air Quality Analytics"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                </div>
                <p className="text-gray-700 mb-2 text-sm text-center">
                  An interactive air quality analytics platform
                </p>
                <CustomButton
                  onClick={() => window.open('https://analytics.airqo.net/')}
                  className="text-white"
                >
                  Air Quality Analytics
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
