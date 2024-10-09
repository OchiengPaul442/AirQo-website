'use client';
import PaginatedSection from '@components/sections/CleanAir/PaginatedSection';
import RegisterBanner from '@components/sections/CleanAir/RegisterBanner';
import Image from 'next/image';

// Dummy data arrays for partners, policy forum, and private sector forum
const implementingPartners = [
  {
    src: 'https://diginsights.com/wp-content/uploads/2024/03/amazz.png.jpeg',
    alt: 'Partner 1',
  },
  {
    src: 'https://diginsights.com/wp-content/uploads/2024/03/amazz.png.jpeg',
    alt: 'Partner 1',
  },
  // Add more partners...
];

const policyPartners = [
  {
    src: 'https://diginsights.com/wp-content/uploads/2024/03/amazz.png.jpeg',
    alt: 'Partner 1',
  },
  // Add more partners...
];

const MemberPage: React.FC = () => {
  return (
    <div className="py-8 space-y-16">
      {/* Main banner section */}
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
            <p className="text-[24px] text-gray-700 mb-4">
              We have a growing list of partners from diverse disciplines across
              different parts of the world, reflecting the multidisciplinarity
              of tackling urban air pollution.
            </p>
            <p className="text-3xl lg:text-[40px] font-semibold leading-[48px]">
              Leveraging the unique expertise and resources of implementing
              partners to advance capacity for air quality management in Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Implementing Partners Section */}
      <PaginatedSection
        title={
          <h3 className="text-[48px] leading-[56px] font-semibold">
            Implementing
            <br /> Partners
          </h3>
        }
        description={
          <p className="text-lg lg:text-[24px] leading-[32px] text-gray-700">
            Implementing partners have active interest in air quality work in
            Africa, have personnel with primary roles in air quality, organize
            and host engagement activities, participate in CLEAN-Air Network
            annual meetings, and may provide logistical or funding support to
            partners.
          </p>
        }
        logos={implementingPartners}
        bgColor="bg-blue-50"
      />

      {/* Policy Forum Section */}
      <PaginatedSection
        title={
          <h3 className="text-[48px] leading-[56px] font-semibold">
            Policy Forum
          </h3>
        }
        description={
          <p className="text-lg lg:text-[24px] leading-[32px] text-gray-700">
            The policy forum provides a platform for engagement for African
            cities and national governments interested in developing and
            implementing an air quality program.
          </p>
        }
        logos={policyPartners}
      />

      {/* Private Sector Section */}
      <PaginatedSection
        title={
          <h3 className="text-[48px] leading-[56px] font-semibold">
            Private sector <br />
            forum
          </h3>
        }
        description={
          <p className="text-lg lg:text-[24px] leading-[32px] text-gray-700">
            The private sector forum is a platform for engagement with the
            private sector players interested in contributing to advancing the
            air quality agenda. Private sector includes regulated industries,
            commercial media houses, and any private sector entity operating in
            Africa.
          </p>
        }
        logos={policyPartners}
        bgColor="bg-blue-50"
      />

      {/* Supporting Partners Section */}
      <PaginatedSection
        title={
          <h3 className="text-[48px] leading-[56px] font-semibold">
            Supporting <br />
            partners
          </h3>
        }
        description={
          <div className="space-y-6">
            <p className="text-lg lg:text-[24px] leading-[32px] text-gray-700">
              The CLEAN-Air network is supported by development partners and
              philanthropic organisations, including Google.org, WEHUBIT, and
              the U.S. Department of State, with an established history of
              pioneering continuous air quality monitoring in data-hungry cities
              through the U.S. Embassies across the world.
            </p>
            <p className="text-lg lg:text-[24px] leading-[32px] text-gray-700">
              Supporting partners provide logistical and/or funding support to
              network members, and may participate in activities including the
              annual CLEAN-Air Network meetings.
            </p>
          </div>
        }
        logos={policyPartners}
      />

      <RegisterBanner />
    </div>
  );
};

export default MemberPage;
