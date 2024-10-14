'use client';
import { CustomButton, Divider } from '@components/ui';
import React from 'react';

const AfricanCityPage = () => {
  return (
    <div className="pb-16 flex flex-col w-full space-y-20">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-4 h-full max-h-[416px]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-500 mb-2 text-[14px]">
            Solutions {'>'} For African Cities
          </p>
          <h1 className="text-[48px] leading-[56px] font-bold mb-6">
            For African cities
          </h1>
          <p className="text-[18px] text-gray-700">
            Leveraging a high-resolution air quality monitoring network to
            advance air quality <br /> management in African cities.
          </p>
        </div>
      </section>

      {/* Challenge Statement */}
      <section className="max-w-5xl mx-auto px-4 text-center py-16">
        <p className="text-2xl lg:text-[40px] leading-[50px] text-gray-800">
          Many African cities lack actionable data and evidence on the scale and
          magnitude of air pollution in order to tackle air pollution, a major
          urban environmental health challenge.
        </p>
      </section>

      <Divider />

      {/* Approach Section */}
      <section className="max-w-5xl mx-auto px-4">
        <section className="py-16 flex flex-col lg:flex-row justify-between items-start space-y-4 lg:space-y-0">
          <h2 className="text-3xl font-semibold">Our Approach</h2>
          <p className="lg:w-2/3 lg:max-w-[528px] text-lg text-gray-700">
            We empower city authorities and citizens with timely information and
            evidence to address the air pollution challenge.
          </p>
        </section>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md space-y-12">
          {/* Approach Item 1 */}
          <div className="space-y-4">
            <h3 className="font-normal text-[32px]">
              Locally developed high-resolution <br />
              air quality monitoring network
            </h3>
            <p className="text-lg text-gray-700">
              We want to see cleaner air in all African Cities. We leverage our
              understanding of the African context and close collaborations with
              relevant partners to deliver a high-resolution air quality network
              to inform contextualized and locally relevant approaches to air
              quality management for African cities.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Approach Item 2 */}
          <div className="space-y-4">
            <h3 className="font-normal text-[32px]">
              Community-aware digital air quality platforms
            </h3>
            <p className="text-lg text-gray-700">
              We empower decision-makers and citizens in African Cities with
              increased access to air quality data evidence to help them tackle
              urban air quality and achieve cleaner air objectives.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Approach Item 3 */}
          <div className="space-y-4">
            <h3 className="font-normal text-[32px]">Policy Engagement</h3>
            <p className="text-lg text-gray-700">
              We engage city authorities and government agencies to build their
              capacity and empower them with evidence and digital tools for air
              quality management and informing air quality public policies.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Approach Item 4 */}
          <div className="space-y-4">
            <h3 className="font-normal text-[32px]">Community engagement</h3>
            <p className="text-lg text-gray-700">
              We empower local leaders and targeted communities with air quality
              information to create awareness of air quality issues.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Publications Section */}
      <section className="bg-blue-50 p-16 space-y-6 rounded-lg max-w-5xl mx-auto">
        <h3 className="text-blue-700 text-2xl font-semibold mb-2">
          PUBLICATIONS
        </h3>
        <h2 className="text-2xl lg:text-4xl font-normal mb-4">
          Seeing the air in detail: Hyperlocal air quality dataset collected
          from spatially distributed AirQo network.
        </h2>
        <div>
          <p className="text-gray-800 font-semibold mb-1">Published by</p>
          <p className="text-gray-800 mb-6">AirQo</p>
        </div>
        <CustomButton className="flex items-center bg-transparent px-4 w-full max-w-[200px] py-3 border text-gray-700 border-gray-700 hover:bg-gray-200">
          Read More →
        </CustomButton>
      </section>
    </div>
  );
};

export default AfricanCityPage;
