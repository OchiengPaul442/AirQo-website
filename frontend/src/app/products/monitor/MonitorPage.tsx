'use client';
import { CustomButton } from '@components/ui';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDownload } from 'react-icons/bi';

const MonitorPage = () => {
  return (
    <div className="pb-16 flex flex-col w-full space-y-20">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-500 mb-2 text-[14px]">
              Our Products {'>'} Binos Monitor
            </p>
            <h1 className="text-[48px] leading-[56px] font-bold mb-6">
              Built in Africa for African cities.
            </h1>
            <p className="text-[18px] text-gray-700">
              Designed, manufactured, and calibrated to measure ambient air
              quality and optimized to suit the African context.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132447/website/photos/OurProducts/Monitor/monitor_ffky74.webp"
              alt="Built in Africa"
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
          <span className="text-blue-700 ">Locally built</span> low cost
          monitors
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          The Binos Monitor is a low-cost air quality device configured to
          measure particulate matter PM<sub>2.5</sub> and PM
          <sub>10</sub>, the most common pollutants in African cities. It also
          measures ambient meteorological conditions such as humidity and
          atmospheric pressure.
        </p>
      </section>

      {/* Locally Built Section */}
      <section className="px-4">
        <div className="flex flex-col-reverse max-w-5xl mx-auto lg:flex-row items-center lg:items-start relative">
          {/* Card Section */}
          <div className="bg-green-50 relative p-6 rounded-lg shadow-md md:w-[630px] md:-top-10 lg:max-w-md lg:absolute lg:left-0 lg:top-8 z-10">
            <h3 className="font-bold text-2xl mb-4">Designed for Africa</h3>
            <p className="text-lg text-gray-700 mb-4">
              The monitors are optimised with capabilities to cope with
              challenges like extreme weather conditions, including high levels
              of dust and heat, typical to the context of African cities.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Powered by either mains or solar, the device is optimised to work
              in settings characterised by unreliable power and intermittent
              internet connectivity. It runs on a 2G GSM network configuration
              for IoT SIM cards.
            </p>
            <Link href="/manuals/maintenance" passHref>
              <CustomButton className="flex items-center justify-center bg-transparent text-gray-700 border border-black px-4 py-3 bg-none w-full  font-semibold">
                Maintenance Manual
                <BiDownload className="ml-2 text-xl" />
              </CustomButton>
            </Link>
          </div>

          {/* Image Section */}
          <div className="mt-12 lg:mt-0 lg:ml-[300px] w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132444/website/photos/OurProducts/Monitor/section-1_ia0mjq.webp"
              alt="Local Monitor"
              width={741}
              height={540}
              style={{ objectFit: 'cover' }}
              className="rounded-lg w-full md:w-full"
            />
          </div>
        </div>
      </section>

      {/* Mobile Monitoring Section */}
      <section className="px-4">
        <div className="flex flex-col-reverse max-w-5xl mx-auto lg:flex-row items-center lg:items-start relative">
          {/* Image Section */}
          <div className="order-2 lg:order-1 mt-12 lg:mt-0 lg:mr-[300px] w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132444/website/photos/OurProducts/Monitor/section-2_byzxsz.webp"
              alt="Mobile Monitoring"
              width={741}
              height={540}
              style={{ objectFit: 'cover' }}
              className="rounded-lg w-full md:w-full"
            />
          </div>

          {/* Card Section */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md relative top-0 lg:max-w-md lg:absolute lg:right-0 lg:top-16 z-10 w-full sm:w-auto md:w-[630px] md:-top-10 flex flex-col space-y-6">
            <h3 className="font-bold text-2xl">Mobile Monitoring</h3>
            <p className="text-lg text-gray-700">
              The monitors are easy to install and can be placed on static
              buildings or motor-cycle taxis locally called
              &apos;boda-bodas&apos; to improve spatial coverage and revolution.
            </p>
            <p>
              Air quality data collection using motorcycle taxis has real
              potential for high-resolution air quality monitoring in urban
              spaces. Mobile monitoring enables us to close the gaps and spatial
              limitations of fixed static monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Monitors in African Cities */}
      <section className="py-16 px-4 bg-[#EDF3FF]">
        <div className="flex flex-col max-w-5xl mx-auto lg:flex-row items-center lg:items-start relative">
          {/* Image Section */}
          <div className="mt-12 lg:mt-0 lg:mr-[300px] w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132444/website/photos/OurProducts/Monitor/Africa_bujaie.webp"
              alt="Air Quality Monitors"
              width={600}
              height={400}
              style={{ objectFit: 'cover' }}
              className="rounded-lg w-full md:w-full"
            />
          </div>

          {/* Card Section */}
          <div className="bg-green-50 relative p-6 rounded-lg shadow-md md:w-[630px] md:-top-10 lg:max-w-md lg:absolute lg:right-0 lg:top-24 z-10">
            <h3 className="font-bold text-2xl mb-4">
              160+ Air quality monitors installed in 8 major African cities
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              To effectively tackle air pollution, access to data and contextual
              evidence is important to show the scale and magnitude of air
              pollution.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              We&apos;re providing an end-to-end air quality solution in major
              African cities leveraging the locally built low-cost monitors and
              existing expertise to advance air quality management, and
              implicitly, air quality improvement in these African cities.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <h2 className="text-[40px] font-semibold mb-4">
          <span className="text-blue-700 ">Monitor</span> Installation
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          This guide includes instructions and manuals on how to easily
          activate, install, operate and manage the Binos Air Quality Monitors.
        </p>
      </section>

      {/* Monitor Installation Section */}
      <section className="px-4">
        <div className="flex flex-col-reverse max-w-5xl mx-auto lg:flex-row items-center lg:items-start relative">
          {/* Card Section */}
          <div className="bg-yellow-50 relative p-6 rounded-lg shadow-md md:w-[630px] md:-top-10 lg:max-w-md lg:absolute lg:left-0 lg:top-16 z-10 space-y-6">
            <h3 className="font-bold text-2xl">
              Activate, install, operate, and manage the Binos Monitors
            </h3>
            <div className="text-lg text-gray-700 mb-4">
              <p>In this guide, you will find recommendations:</p>
              <ol className="list-disc list-inside pl-5 mt-2">
                <li>Where to place the monitor</li>
                <li>How to install the monitor</li>
                <li>How to access the data using our analytics dashboard</li>
              </ol>
            </div>
            <Link href="/guides/installation" passHref>
              <CustomButton className="flex items-center justify-center text-gray-700 bg-transparent border mt-6 border-black px-4 py-3 bg-none w-full font-semibold">
                Installation Guide
                <BiDownload className="ml-2 text-xl" />
              </CustomButton>
            </Link>
          </div>

          {/* Image Section */}
          <div className="mt-12 lg:mt-0 lg:ml-[300px] w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132444/website/photos/OurProducts/Monitor/activate_g6upn0.webp"
              alt="Monitor Installation"
              width={500}
              height={400}
              style={{ objectFit: 'cover' }}
              className="rounded-lg w-full md:w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default MonitorPage;
