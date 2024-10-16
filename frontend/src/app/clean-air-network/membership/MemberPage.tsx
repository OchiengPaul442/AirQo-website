// pages/members.tsx
'use client';

import PaginatedSection from '@components/sections/CleanAir/PaginatedSection';
import RegisterBanner from '@components/sections/CleanAir/RegisterBanner';
import { getPartners } from '@services/apiService';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const SkeletonPaginatedSection: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto w-full py-8 px-4 lg:px-0 space-y-6 md:space-y-8">
      <div className="animate-pulse space-y-6">
        {/* Title Skeleton */}
        <div className="h-12 bg-gray-200 rounded w-3/4"></div>

        {/* Description Skeleton */}
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-full"></div>
          <div className="h-6 bg-gray-200 rounded w-5/6"></div>
        </div>

        {/* Logos Skeleton */}
        <div className="flex flex-wrap gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="w-24 h-24 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MemberPage: React.FC = () => {
  const [implementingPartners, setImplementingPartners] = useState<
    { id: string; logoUrl: string }[]
  >([]);
  const [policyPartners, setPolicyPartners] = useState<
    { id: string; logoUrl: string }[]
  >([]);
  const [supportingPartners, setSupportingPartners] = useState<
    { id: string; logoUrl: string }[]
  >([]);
  const [privateSectorPartners, setPrivateSectorPartners] = useState<
    { id: string; logoUrl: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any[] = await getPartners();

        // Filter partners for 'cleanair' category
        const cleanairPartners = data.filter(
          (partner) => partner.website_category.toLowerCase() === 'cleanair',
        );

        // Categorize partners by type
        const implementing = cleanairPartners
          .filter((partner) => partner.type.toLowerCase() === 'ca-network')
          .map((partner) => ({
            id: partner.id,
            logoUrl: partner.partner_logo_url || partner.partner_logo || '',
          }));

        const policy = cleanairPartners
          .filter((partner) => partner.type.toLowerCase() === 'ca-forum')
          .map((partner) => ({
            id: partner.id,
            logoUrl: partner.partner_logo_url || partner.partner_logo || '',
          }));

        const supporting = cleanairPartners
          .filter((partner) => partner.type.toLowerCase() === 'ca-support')
          .map((partner) => ({
            id: partner.id,
            logoUrl: partner.partner_logo_url || partner.partner_logo || '',
          }));

        const privateSector = cleanairPartners
          .filter(
            (partner) => partner.type.toLowerCase() === 'ca-private-sector',
          )
          .map((partner) => ({
            id: partner.id,
            logoUrl: partner.partner_logo_url || partner.partner_logo || '',
          }));

        // Set state
        setImplementingPartners(implementing);
        setPolicyPartners(policy);
        setSupportingPartners(supporting);
        setPrivateSectorPartners(privateSector);
      } catch (error) {
        console.error('Error fetching partners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-8 space-y-16 bg-white">
      {/* Main Banner Section */}
      <section className="w-full">
        <div className="max-w-5xl mx-auto w-full py-8 px-4 lg:px-0 flex flex-col items-center space-y-6 md:space-y-8">
          {/* Image */}
          <div className="w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132390/website/cleanAirForum/images/membership_kjmezd.webp"
              alt="Air Quality Management Banner"
              width={800}
              height={400}
              className="rounded-lg object-contain w-full"
            />
          </div>

          {/* Text */}
          <div className="text-left">
            <p className="text-2xl lg:text-3xl text-gray-700 mb-4">
              We have a growing list of partners from diverse disciplines across
              different parts of the world, reflecting the multidisciplinarity
              of tackling urban air pollution.
            </p>
            <p className="text-4xl lg:text-5xl font-semibold leading-tight">
              Leveraging the unique expertise and resources of implementing
              partners to advance capacity for air quality management in Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Implementing Partners Section */}
      <section className="w-full">
        {loading ? (
          <SkeletonPaginatedSection />
        ) : (
          <PaginatedSection
            title={
              <h3 className="text-4xl lg:text-5xl font-semibold">
                Implementing <br /> Partners
              </h3>
            }
            description={
              <p className="text-lg lg:text-2xl text-gray-700">
                Implementing partners have active interest in air quality work
                in Africa, have personnel with primary roles in air quality,
                organize and host engagement activities, participate in
                CLEAN-Air Network annual meetings, and may provide logistical or
                funding support to partners.
              </p>
            }
            logos={implementingPartners}
            bgColor="bg-blue-50"
          />
        )}
      </section>

      {/* Policy Forum Section */}
      <section className="w-full">
        {loading ? (
          <SkeletonPaginatedSection />
        ) : (
          <PaginatedSection
            title={
              <h3 className="text-4xl lg:text-5xl font-semibold">
                Policy Forum
              </h3>
            }
            description={
              <p className="text-lg lg:text-2xl text-gray-700">
                The policy forum provides a platform for engagement for African
                cities and national governments interested in developing and
                implementing an air quality program.
              </p>
            }
            logos={policyPartners}
          />
        )}
      </section>

      {/* Private Sector Forum Section */}
      <section className="w-full">
        {loading ? (
          <SkeletonPaginatedSection />
        ) : (
          <PaginatedSection
            title={
              <h3 className="text-4xl lg:text-5xl font-semibold">
                Private Sector <br />
                Forum
              </h3>
            }
            description={
              <p className="text-lg lg:text-2xl text-gray-700">
                The private sector forum is a platform for engagement with the
                private sector players interested in contributing to advancing
                the air quality agenda. Private sector includes regulated
                industries, commercial media houses, and any private sector
                entity operating in Africa.
              </p>
            }
            logos={privateSectorPartners}
            bgColor="bg-blue-50"
          />
        )}
      </section>

      {/* Supporting Partners Section */}
      <section className="w-full">
        {loading ? (
          <SkeletonPaginatedSection />
        ) : (
          <PaginatedSection
            title={
              <h3 className="text-4xl lg:text-5xl font-semibold">
                Supporting <br />
                Partners
              </h3>
            }
            description={
              <div className="space-y-6">
                <p className="text-lg lg:text-2xl text-gray-700">
                  The CLEAN-Air network is supported by development partners and
                  philanthropic organisations, including Google.org, WEHUBIT,
                  and the U.S. Department of State, with an established history
                  of pioneering continuous air quality monitoring in data-hungry
                  cities through the U.S. Embassies across the world.
                </p>
                <p className="text-lg lg:text-2xl text-gray-700">
                  Supporting partners provide logistical and/or funding support
                  to network members, and may participate in activities
                  including the annual CLEAN-Air Network meetings.
                </p>
              </div>
            }
            logos={supportingPartners}
          />
        )}
      </section>

      {/* Register Banner */}
      {!loading && <RegisterBanner />}
    </div>
  );
};

export default MemberPage;
