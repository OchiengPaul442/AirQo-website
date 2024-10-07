'use client';
import { CustomButton } from '@components/ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FiCalendar, FiClock } from 'react-icons/fi';

interface FeaturedEventProps {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  imgSrc: string;
  buttonText: string;
  buttonLink: string;
}

const FeaturedEvent: React.FC<FeaturedEventProps> = ({
  title,
  subtitle,
  date,
  time,
  imgSrc,
  buttonText,
  buttonLink,
}) => {
  const router = useRouter();

  return (
    <section className="max-w-5xl mx-auto w-full mt-16 bg-blue-50 rounded-lg shadow-sm p-6 lg:px-8 lg:py-12 flex flex-col lg:flex-row items-center gap-6">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <div className="relative flex justify-center w-auto lg:w-[416px] lg:h-[518px] items-center">
          <Image
            src={imgSrc}
            alt={title}
            width={416}
            height={518}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg max-w-[600px] max-h-[518px]"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start h-full space-y-4">
        <span className="text-sm text-gray-600 bg-white px-2 py-1 rounded-full inline-block mb-3">
          Featured Event
        </span>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-2xl text-gray-600 mb-4">{subtitle}</p>

        {/* Date and Time */}
        <div className="flex flex-col items-start gap-4 text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <FiCalendar className="w-5 h-5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiClock className="w-5 h-5" />
            <span>{time}</span>
          </div>
        </div>

        {/* Action Button */}
        <CustomButton
          onClick={() => router.push(buttonLink)}
          className=" text-white"
        >
          {buttonText} →
        </CustomButton>
      </div>
    </section>
  );
};

export default FeaturedEvent;
