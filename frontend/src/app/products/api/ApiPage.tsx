import { CustomButton } from '@components/ui';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ApiPage = () => {
  return (
    <div className="pb-16 flex flex-col w-full space-y-20">
      {/* Hero Section */}
      <section className="bg-yellow-50 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-500 mb-2 text-[14px]">
              Our Products {'>'} AirQo API
            </p>
            <h1 className="text-[48px] leading-[56px] font-bold mb-6">
              Access real-time air quality data.
            </h1>
            <p className="text-[18px] text-gray-700">
              Designed to effortlessly enhance your application with vital
              insights, embrace the transformative potential of air quality
              information through our API.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132441/website/photos/OurProducts/Api/HeaderImage_ktsstb.webp"
              alt="Access real-time air quality data"
              width={500}
              height={350}
              style={{ objectFit: 'cover' }}
              className="rounded-lg w-full md:w-full"
            />
          </div>
        </div>
      </section>

      {/* Unlock Air Quality Insights Section */}
      <section className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <h2 className="text-[40px] font-semibold mb-4">
          Unlock Air Quality
          <br /> <span className="text-blue-700 ">Insights</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          The AirQo API provides open access to a vast repository of over 2
          million records of raw and calibrated real-time, historical, and
          forecast air quality data.
        </p>
      </section>

      {/* Redefining Data Access Section */}
      <section className="px-4">
        <div className="flex flex-col-reverse max-w-5xl mx-auto lg:flex-row items-center lg:items-start relative">
          {/* Card Section */}
          <div className="bg-gray-100 relative p-6 rounded-lg shadow-md md:w-[630px] md:-top-10 lg:max-w-md lg:absolute lg:left-0 lg:top-8 z-10">
            <h3 className="font-bold text-2xl mb-4">Redefining data access</h3>
            <p className="text-lg text-gray-700 mb-4">
              The API uses AI and data analysis techniques to provide accurate
              air quality measurements. It offers PM<sub>2.5</sub> and PM
              <sub>10</sub> measurements, the most common pollutants in African
              cities.
            </p>
            <p className="text-lg text-gray-700">
              Our comprehensive air quality datasets include data from our
              low-cost air quality monitors as well as reference-grade monitors
              strategically deployed in major African Cities.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-12 lg:mt-0 lg:ml-[300px] w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132441/website/photos/OurProducts/Api/section-1_or1hzy.webp"
              alt="Redefining Data Access"
              width={741}
              height={540}
              style={{ objectFit: 'cover' }}
              className="rounded-lg w-full md:w-full"
            />
          </div>
        </div>
      </section>

      {/* Empowering Audience Section */}
      <section className="px-4 py-16">
        <div className="flex flex-col max-w-5xl mx-auto lg:flex-row items-center lg:items-start relative">
          {/* Image Section */}
          <div className="mt-12 lg:mt-0 lg:mr-[300px] w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132442/website/photos/OurProducts/Api/section-2_vhnqbf.webp"
              alt="API Console Data"
              width={600}
              height={400}
              style={{ objectFit: 'cover' }}
              className="rounded-lg w-full md:w-full"
            />
          </div>

          {/* Card Section */}
          <div className="bg-yellow-50 relative p-6 rounded-lg shadow-md md:w-[630px] md:-top-10 lg:max-w-md lg:absolute lg:right-0 lg:top-24 z-10">
            <h3 className="font-bold text-2xl mb-4">
              Start empowering your audience
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              The AirQo API is not only about air quality data—it&apos;s about
              empowering users to take action to protect themselves against air
              pollution.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Integrate air quality information in your Open Source Projects,
              Browser Extensions, Plugins, Mobile Apps, Desktop and Web Apps.
              Help users take charge of their health and join the movement for
              cleaner air!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 py-16 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center flex flex-col items-center space-y-6">
            <h2 className="text-[32px] font-bold">
              <span className="text-blue-700">How</span> it works
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              With our API, you have access to comprehensive documentation to
              enable you seamlessly integrate the data, and a dedicated support
              team to assist you at every step of the integration process.
            </p>

            {/* Button */}
            <Link href="/explore-data" passHref>
              <CustomButton>Read Docs</CustomButton>
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative mt-12 top-20 flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132442/website/photos/OurProducts/Api/section-3_uwtkrz.webp"
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

export default ApiPage;
