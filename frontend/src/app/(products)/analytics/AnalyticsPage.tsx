import { CustomButton } from '@components/ui';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDownload } from 'react-icons/bi';

const AnalyticsPage = () => {
  return (
    <div className="pb-16 flex flex-col w-full space-y-20 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-blue-100 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-500 mb-2 text-[14px]">
              Our Products {'>'} Air quality analytics Dashboard
            </p>
            <h1 className="text-[48px] leading-[56px] font-bold mb-6">
              Access and visualise air quality data in African Cities.
            </h1>
            <p className="text-[18px] text-gray-700">
              If we can’t measure air pollution, we can’t manage it: Access,
              track, analyse and download insightful air quality data across
              major cities in Africa.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132441/website/photos/OurProducts/Analytics/analytics-header_csuujt.webp"
              alt="Access and visualise air quality data"
              width={500}
              height={350}
              style={{ objectFit: 'cover' }}
              className="rounded-lg w-full md:w-full"
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <h2 className="text-[40px] font-semibold mb-4">
          <span className="text-blue-700">Real-time</span> air quality analytics
          for African Cities
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Air pollution in many cities in Africa is under-monitored in part due
          to the logistical constraints of setting up and maintaining a
          monitoring network, coupled with the expertise to process and analyse
          data.
        </p>
      </section>

      {/* Timely Access Section */}
      <section className="px-4">
        <div className="flex flex-col-reverse max-w-5xl mx-auto lg:flex-row items-center lg:items-start relative">
          {/* Card Section */}
          <div className="bg-green-50 relative p-6 rounded-lg shadow-md md:w-[630px] md:-top-10 lg:max-w-md lg:absolute lg:left-0 lg:top-8 z-10">
            <h3 className="font-bold text-2xl mb-4">Timely access to data</h3>
            <p className="text-lg text-gray-700 mb-4">
              The air quality analytics dashboard is an intuitive software
              dashboard that allows you to have timely access to historic,
              real-time, and forecast actionable air quality information across
              our monitored urban spaces in Africa.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We want to see citizens and decision-makers in African Cities have
              timely access to air quality trends, patterns, and insights to
              inform data-driven decisions to tackle air pollution.
            </p>
            <Link href="/guides/user-guide" passHref>
              <button className="flex items-center justify-center border-2 border-black px-4 py-3 bg-none w-full font-semibold">
                User Guide
                <BiDownload className="ml-2 text-xl" />
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:ml-[300px] w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132441/website/photos/OurProducts/Analytics/section-1_awoy4i.webp"
              alt="Timely access to data"
              width={741}
              height={540}
              style={{ objectFit: 'cover' }}
              className="rounded-lg w-full md:w-full"
            />
            <div className="absolute top-2 -right-52 w-full h-full">
              <Image
                src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132441/website/photos/OurProducts/Analytics/section-1-overlap_sosw3o.webp"
                alt="Timely access to data"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg w-full md:w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gain Insights Section */}
      <section className="py-16 px-4">
        <div className="flex flex-col max-w-5xl mx-auto lg:flex-row items-center lg:items-start relative">
          {/* Image Section */}
          <div className="mt-12 lg:mt-0 lg:mr-[300px] w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132443/website/photos/OurProducts/Analytics/section-2_xv8lnw.webp"
              alt="Gain insights to take action"
              width={600}
              height={400}
              style={{ objectFit: 'cover' }}
              className="rounded-lg w-full md:w-full"
            />
          </div>

          {/* Card Section */}
          <div className="bg-green-50 relative p-6 rounded-lg shadow-md md:w-[630px] md:-top-10 lg:max-w-md lg:absolute lg:right-0 lg:top-24 z-10">
            <h3 className="font-bold text-2xl mb-4">
              Gain insights to take action
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              With our air quality analytics dashboard, you can view,
              historical, real-time, or forecast calibrated data in locations
              that matter to you.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              You can generate, compare and download air quality data in various
              African Cities and develop evidence-informed actions for air
              pollution.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center flex flex-col items-center space-y-6">
            <h2 className="text-[32px] font-bold">
              <span className="text-blue-700">Easy to use</span> interface
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our visualization charts are designed to help you easily interpret
              and gain insights into the data while giving you access to air
              quality trends in African Cities over time. With our easy-to-use
              interface, you can track and visualise air quality trends over
              time.
            </p>

            {/* Button */}
            <Link href="/explore-data" passHref>
              <CustomButton>Explore data</CustomButton>
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative mt-12 top-20 flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132441/website/photos/OurProducts/Analytics/analytics-dashboard_qijm7k.webp"
              alt="Easy to use interface"
              width={1200}
              height={600}
              className="rounded-lg w-full"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsPage;
