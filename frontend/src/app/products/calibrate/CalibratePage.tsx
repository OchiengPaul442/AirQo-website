import { CustomButton } from '@components/ui';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CalibratePage = () => {
  return (
    <div className="pb-16 flex flex-col w-full space-y-20">
      {/* Hero Section */}
      <section className="bg-[#EDF3FF] py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-500 mb-2 text-[14px]">
              Our Products {'>'} AirQalibrate
            </p>
            <h1 className="text-[48px] leading-[56px] font-bold mb-6">
              Calibrate your low-cost sensor data
            </h1>
            <p className="text-[18px] text-gray-700">
              Improve the accuracy and reliability of data from your low-cost
              air quality monitors using AirQo&apos;s AirQalibrate tool,
              delivering more accurate results.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132442/website/photos/OurProducts/Calibration/calibration-header_u4y4co.webp"
              alt="Calibrate your low-cost sensor data"
              width={500}
              height={350}
              style={{ objectFit: 'cover' }}
              className="rounded-lg w-full md:w-full"
            />
          </div>
        </div>
      </section>

      {/* Why Calibrate Section */}
      <section className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <h2 className="text-[40px] font-semibold mb-4">
          <span className="text-blue-700 ">Why calibrate</span> your low-cost
          sensor data?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Low-cost sensors are relied on to increase the geographical coverage
          of air quality monitoring networks but, they are sensitive to ambient
          conditions (humidity, temperature) which could affect the accuracy of
          air quality data. Calibration enhances the quality and reliability of
          air quality data from low-cost sensors.
        </p>
      </section>

      {/* Cost Effective and Accessible Section */}
      <section className="px-4">
        <div className="flex flex-col-reverse max-w-5xl mx-auto lg:flex-row items-center lg:items-start relative">
          {/* Card Section */}
          <div className="bg-yellow-50 relative p-6 rounded-lg shadow-md md:w-[630px] md:-top-10 lg:max-w-md lg:absolute lg:left-0 lg:top-8 z-10">
            <h3 className="font-bold text-2xl mb-4">
              Cost effective and accessible
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              AirQalibrate is a Machine Learning based calibration tool that
              eliminates the need for reference-grade monitors or on-site
              monitor calibration.
            </p>
            <p className="text-lg text-gray-700">
              It enables users without access to reference grade monitors or
              technical expertise to calibrate data from their low-cost
              monitors, improve performance, and build trust in the air quality
              network.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              This reduces operational costs involved in monitoring, thereby
              enabling the expansion of monitoring systems to create a dense air
              quality monitoring and management network.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-12 lg:mt-0 lg:ml-[300px] w-full lg:h-[550px]">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132442/website/photos/OurProducts/Calibration/section-1_hnmddw.webp"
              alt="Cost Effective Calibration"
              width={741}
              height={640}
              style={{ objectFit: 'cover' }}
              className="rounded-lg w-full h-full md:w-full"
            />
          </div>
        </div>
      </section>

      {/* Calibrate Your Data Section */}
      <section className="px-4 py-16">
        <div className="flex flex-col max-w-5xl mx-auto lg:flex-row items-center lg:items-start relative">
          {/* Image Section */}
          <div className="mt-12 lg:mt-0 lg:mr-[300px] w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132442/website/photos/OurProducts/Calibration/section-2_t8dlbm.webp"
              alt="Calibrate Your Data"
              width={600}
              height={400}
              style={{ objectFit: 'cover' }}
              className="rounded-lg w-full md:w-full"
            />
          </div>

          {/* Card Section */}
          <div className="bg-blue-100 relative p-6 rounded-lg shadow-md md:w-[630px] md:-top-10 lg:max-w-md lg:absolute lg:right-0 lg:top-24 z-10">
            <h3 className="font-bold text-2xl mb-4">Calibrate your data</h3>
            <p className="text-lg text-gray-700 mb-4">
              Upload a CSV file containing your low-cost sensor PM<sub>2.5</sub>{' '}
              and PM<sub>10</sub> data, follow a few simple steps, and calibrate
              your data. The results are automatically downloaded when the
              calibration process is completed.
            </p>
            <Link href="/calibrate-data" passHref>
              <button className="flex items-center justify-center border-2 mt-6 border-black px-4 py-3 bg-none w-full font-semibold">
                Calibrate your data
                <span className="ml-2 text-xl">&#8599;</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 py-16 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center flex flex-col items-center space-y-6">
            <h2 className="text-[32px] font-bold">
              <span className="text-blue-700">Simple </span>user interface
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our calibration tool features a user-friendly interface that
              simplifies the calibration process. Even without technical
              expertise, you can easily navigate the tool and calibrate the data
              from air quality monitors.
            </p>

            {/* Button */}
            <Link href="/explore-data" passHref>
              <CustomButton>Calibration guide</CustomButton>
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative mt-12 top-20 flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132442/website/photos/OurProducts/Calibration/section-3_nmblis.webp"
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

export default CalibratePage;
