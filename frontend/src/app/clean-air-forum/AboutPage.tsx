'use client';
import { Divider } from '@components/ui';
import { useForumData } from '@context/ForumDataContext';
import React from 'react';

const AboutPage = () => {
  const data = useForumData();

  if (!data || data.length === 0) {
    return <p>No data found</p>;
  }

  return (
    <div className="w-full px-6 lg:px-0 bg-white">
      <Divider className="bg-black p-0 m-0 h-[1px] w-full max-w-5xl mx-auto" />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto space-y-12 py-8">
        {/* Data Introduction */}
        <div dangerouslySetInnerHTML={{ __html: data.introduction }}></div>

        {/* Objectives Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {data.engagements[0].title}
          </h2>
          <div>
            {data.engagements[0].objectives.map(
              (objective: any, index: any) => (
                <p key={index}>{objective.details}</p>
              ),
            )}
          </div>
        </div>

        <Divider className="bg-black p-0 m-0 h-[1px] w-full max-w-5xl mx-auto" />

        {/* Split Section - Sponsorship Opportunities */}
        <div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-900">
                Sponsorship opportunities
              </h2>
            </div>
            <div
              className="md:w-2/3"
              dangerouslySetInnerHTML={{
                __html: data.sponsorship_opportunities_about,
              }}
            ></div>
          </div>
        </div>

        <Divider className="bg-black p-0 m-0 h-[1px] w-full max-w-5xl mx-auto" />

        {/* Split Section - Sponsorship Packages */}
        <div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-900">
                Sponsorship packages
              </h2>
            </div>
            <div
              className="md:w-2/3 space-y-4"
              dangerouslySetInnerHTML={{ __html: data.sponsorship_packages }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
