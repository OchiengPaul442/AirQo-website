'use client';
import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="pb-16 flex flex-col w-full space-y-20">
      {/* Hero Section */}
      <section className="bg-[#F3F4F6] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl font-semibold">About</h1>
          <p className="text-gray-500">
            Our Vision &gt; Our Mission &gt; Our Values &gt; Our Team
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <p className="text-lg text-center">
          At AirQo we empower communities across Africa with accurate,
          hyperlocal, and timely air quality data to drive air pollution
          mitigation actions.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <Image
            src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728248680/website/photos/About/group_photo.webp"
            alt="Group Photo"
            width={800}
            height={400}
            className="rounded-lg w-full lg:w-1/2"
          />
          <div className="space-y-4 lg:w-1/2">
            <div className="flex items-center gap-4">
              <div className="bg-gray-200 p-4 rounded-full">
                <span className="font-semibold">Our Vision</span>
              </div>
              <p className="text-xl font-semibold">
                Clean air for all African cities.
              </p>
            </div>
            <hr className="my-4 border-gray-300 border-t-2" />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-lg text-gray-700">
                We aim to empower urban and peri-urban communities across Africa
                to drive action against air pollution...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-4 space-y-4">
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to efficiently collect, analyse and forecast air
          quality data to international standards and work with partners to
          reduce air pollution and raise awareness of its effects in African
          cities.
        </p>
      </section>

      {/* Values Section */}
      <section className="max-w-5xl mx-auto px-4 space-y-4">
        <h2 className="text-2xl font-bold">Our Values</h2>
        <p className="text-lg text-gray-700">
          Our values include integrity, innovation, and collaboration...
        </p>
      </section>

      {/* Meet the Team Section */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <h2 className="text-2xl font-bold">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: 'Alice A.',
              title: 'Air Quality Analyst',
              imgSrc:
                'https://res.cloudinary.com/dbibjvyhm/image/upload/v1728248679/website/photos/Team/alice_a.webp',
            },
            {
              name: 'John B.',
              title: 'Data Scientist',
              imgSrc:
                'https://res.cloudinary.com/dbibjvyhm/image/upload/v1728248679/website/photos/Team/john_b.webp',
            },
            {
              name: 'Mary C.',
              title: 'Environmental Scientist',
              imgSrc:
                'https://res.cloudinary.com/dbibjvyhm/image/upload/v1728248679/website/photos/Team/mary_c.webp',
            },
            {
              name: 'Paul D.',
              title: 'Field Coordinator',
              imgSrc:
                'https://res.cloudinary.com/dbibjvyhm/image/upload/v1728248679/website/photos/Team/paul_d.webp',
            },
          ].map((member, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2">
              <Image
                src={member.imgSrc}
                alt={member.name}
                width={150}
                height={200}
                className="rounded-full w-full"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
