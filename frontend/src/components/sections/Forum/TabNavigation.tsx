import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface HeroProps {
  picUrl: string;
  title: string;
  subtext: string;
  link: string;
}

const TabNavigation: React.FC<HeroProps> = ({
  picUrl,
  title,
  subtext,
  link,
}) => {
  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600">{subtext}</p>
          <Link href={link}>
            <a className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Register here
            </a>
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src={picUrl}
            alt="Forum Image"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="w-full bg-gray-50 py-4 mt-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center text-gray-600 space-x-4">
          <Link href="#">
            <a className="hover:text-gray-800 transition">About</a>
          </Link>
          <Link href="#">
            <a className="hover:text-gray-800 transition">
              Programme committee
            </a>
          </Link>
          <Link href="#">
            <a className="hover:text-gray-800 transition">
              Schedule & Registration
            </a>
          </Link>
          <Link href="#">
            <a className="hover:text-gray-800 transition">Speakers</a>
          </Link>
          <Link href="#">
            <a className="hover:text-gray-800 transition">Partners</a>
          </Link>
          <Link href="#">
            <a className="hover:text-gray-800 transition">Travel Logistics</a>
          </Link>
          <Link href="#">
            <a className="hover:text-gray-800 transition">Glossary</a>
          </Link>
          <Link href="#">
            <a className="hover:text-gray-800 transition">Resources</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
