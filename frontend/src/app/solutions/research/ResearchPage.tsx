'use client';
import { CustomButton, Divider } from '@components/ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const ResearchPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full space-y-20 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#E9F7EF] py-16 px-4 h-full max-h-[416px]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <p className="text-gray-500">Solutions &gt; For Research</p>
          <h1 className="text-4xl font-bold">For Research</h1>
          <p className="text-lg">
            We actively collaborate with researchers across the world to jointly
            tackle <br />
            air quality research challenges.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-4xl mx-auto text-center px-4 py-8">
        <p className="text-2xl lg:text-[40px] leading-[48px] text-gray-800">
          We aim to advance the understanding of air quality issues in
          sub-Saharan Africa. We take a multidisciplinary approach that
          encompasses IoT and sensing technology, AI and machine learning,
          temporal and spatial modeling to enhance air quality understanding in
          Africa.
        </p>
      </section>

      <Divider className="bg-[#E9F7EF]" />

      {/* Collaboration Section */}
      <section className="max-w-5xl mx-auto px-4 space-y-16">
        {/* Industrial consultation and collaboration */}
        <div className="flex flex-col lg:flex-row gap-8 items-center relative">
          <div className="lg:w-1/2 space-y-4">
            <h3 className="text-2xl lg:text-[32px]">
              Industrial consultation and collaboration
            </h3>
            <p className="text-lg text-gray-700">
              We provide access to our expertise to help in providing historic
              air quality data, conduct location-specific monitoring and
              surveys, and understand emissions profiles.
            </p>
            <p className="text-lg text-gray-700">
              These insights can assist organizations to take steps to minimize
              the impact of air pollution on communities and explore compliance
              with current and forthcoming legislation.
            </p>
          </div>
          {/* Images Section */}
          <div className="relative flex flex-col lg:flex-row gap-4 items-center lg:items-start">
            {/* Left Section - Two Smaller Images */}
            <div className="flex flex-col gap-4">
              <Image
                src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728248679/website/photos/Solutions/AirQo_Web_IMG06_nvv5xu.webp"
                alt="Champion 1"
                width={250}
                height={250}
                className="rounded-lg object-cover w-full lg:w-auto"
              />
              <Image
                src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728255497/website/photos/Solutions/consult-2_lnfllz.webp"
                alt="Champion 2"
                width={250}
                height={250}
                className="rounded-lg object-cover w-full lg:w-auto"
              />
            </div>

            {/* Right Section - Larger Image */}
            <div className="flex-1 h-full hidden lg:flex max-h-[450px]">
              <Image
                src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728255497/website/photos/Solutions/consult-long_ehdzts.webp"
                alt="Champion 3"
                width={262}
                height={450}
                className="object-cover rounded-lg w-full lg:w-auto h-[410px]"
              />
            </div>
          </div>
          <div className="absolute top-52 lg:top-[-8px] lg:left-[27rem] w-[650px] h-[300px] lg:max-w-[630px] lg:max-h-[400px] flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728248677/website/photos/Solutions/AirQo_blob_fill_ro37jv.svg"
              alt="Champion 3"
              width={657}
              height={360}
              className="object-cover rounded-lg w-full h-full -z-50"
            />
          </div>
        </div>

        <Divider className="bg-[#E9F7EF]" />

        {/* Collaboration with universities and academic institutions */}
        <div className="flex flex-col lg:flex-row gap-8 items-center relative">
          <div className="lg:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold">
              Collaboration with universities and academic institutions
            </h3>
            <p className="text-lg text-gray-700">
              We provide air quality data to facilitate university research.
              Universities get free access to periodical air quality reports
              through the AirQo dashboard and the AirQo API.
            </p>
          </div>
          {/* Images Section */}
          <div className="relative flex flex-col lg:flex-row gap-4 items-center lg:items-start">
            {/* Left Section - Two Smaller Images */}
            <div className="flex flex-col gap-4">
              <Image
                src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728248678/website/photos/Solutions/AirQo_Web_IMG13_volg76.webp"
                alt="Champion 1"
                width={250}
                height={250}
                className="rounded-lg object-cover w-full lg:w-auto"
              />
              <Image
                src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728248680/website/photos/Solutions/AirQo_Web_IMG02_cc2ymi.webp"
                alt="Champion 2"
                width={250}
                height={250}
                className="rounded-lg object-cover w-full lg:w-auto"
              />
            </div>

            {/* Right Section - Larger Image */}
            <div className="flex-1 h-full hidden lg:flex max-h-[450px]">
              <Image
                src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728248678/website/photos/Solutions/community-9_quo456.webp"
                alt="Champion 3"
                width={262}
                height={450}
                className="object-cover rounded-lg w-full lg:w-[262px] h-[340px]"
              />
            </div>
          </div>

          <div className="absolute top-52 lg:top-[-8px] lg:left-[27rem] w-[650px] h-[300px] lg:max-w-[630px] lg:max-h-[400px] flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728248677/website/photos/Solutions/AirQo_blob_fill_ro37jv.svg"
              alt="Champion 3"
              width={657}
              height={360}
              className="object-cover rounded-lg w-full h-full -z-50"
            />
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="bg-[#E9F7EF] max-w-5xl mx-auto  py-16 px-16 rounded-lg">
        <div className="space-y-4">
          <h4 className="text-[#0CE87E] uppercase text-[20px]">Publications</h4>
          <h2 className="text-3xl lg:text-[40px] leading-[48px]">
            Managing the Environment for Climate Resilient Livelihoods and
            Sustainable Economic Development.
          </h2>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Created by </span>
            <span>National Environment Management Authority(NEMA)</span>
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Supported by </span>
            <span>AirQo and Makerere University</span>
          </p>
          <CustomButton
            onClick={() => {
              window.open(
                'https://www.nema.go.ug/sites/default/files/NSOER%202018-2019.pdf',
                '_blank',
              );
            }}
            className="flex items-center bg-transparent text-black justify-center w-full max-w-[200px] border border-black px-4 py-3 bg-none mt-4"
          >
            Read Report &rarr;
          </CustomButton>
        </div>
      </section>

      {/* Call to Action */}
      <CustomButton
        onClick={() => router.push('/explore-data')}
        className="bg-[#0CE87E] text-black rounded-lg max-w-5xl mx-auto w-full py-16 text-center"
      >
        <h3 className="text-3xl font-bold mb-4">
          Explore our digital air quality tools.
        </h3>

        <span className="px-6 py-3 bg-none mt-4">Explore data &rarr;</span>
      </CustomButton>
    </div>
  );
};

export default ResearchPage;
