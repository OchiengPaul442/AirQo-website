import Enabel from '@public/assets/images/partners/enabel.svg';
import Google from '@public/assets/images/partners/google.svg';
import UN from '@public/assets/images/partners/UN.svg';
import UsMission from '@public/assets/images/partners/usmissionuganda.svg';
import WorldBank from '@public/assets/images/partners/worldbankgroup.svg';
import Community from '@public/assets/svgs/ImpactNumbers/Community.svg';
import Monitor from '@public/assets/svgs/ImpactNumbers/Monitor.svg';
import Network from '@public/assets/svgs/ImpactNumbers/Network.svg';
import Partners from '@public/assets/svgs/ImpactNumbers/Partners.svg';
import Publications from '@public/assets/svgs/ImpactNumbers/Publications.svg';
import Records from '@public/assets/svgs/ImpactNumbers/Records.svg';
import Image from 'next/image';
import React, { useState } from 'react';

import { CustomButton } from '../../ui';

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${openItem === index ? 'bg-[#DFE8F9] rounded-xl' : ''} transition-all`}
        >
          <button
            onClick={() => toggleItem(index)}
            className={`w-full text-left text-lg font-semibold px-4 py-2 duration-300 ease-in-out outline-none border-none`}
          >
            {item.title}
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              openItem === index
                ? 'max-h-screen rounded-b-lg px-4 py-2'
                : 'max-h-0'
            }`}
          >
            {openItem === index && (
              <div className="text-gray-700">{item.content}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const HomeStatsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cities' | 'communities'>(
    'cities',
  );

  const accordionItems: { [key: string]: AccordionItem[] } = {
    cities: [
      {
        title: 'High Resolution Network',
        content:
          'We want cleaner air in all African cities. We leverage our understanding of the African context.',
      },
      {
        title: 'Digital air quality platforms',
        content:
          'Our platforms provide real-time air quality data and insights for African cities.',
      },
      {
        title: 'Policy engagement',
        content:
          'We engage with policymakers to develop data-driven solutions to air quality challenges.',
      },
    ],
    communities: [
      {
        title: 'Community engagement',
        content:
          'We work with communities to address air quality issues by providing education and support.',
      },
      {
        title: 'Digital air quality platforms',
        content:
          'Our platforms provide real-time air quality data and insights for African communities.',
      },
      {
        title: 'Policy engagement',
        content:
          'We engage with policymakers to develop data-driven solutions to air quality challenges.',
      },
    ],
  };

  return (
    <section className="py-8 px-4 w-full space-y-20 bg-[#ECF2FF]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Partner Logos Section */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <div className="text-center space-y-6">
            <h3 className="text-lg font-semibold text-gray-500">
              AIRQO IS SUPPORTED BY
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {[Google, UsMission, Enabel, WorldBank, UN].map(
                (partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 border border-gray-300"
                  >
                    <Image
                      src={partner}
                      alt={`Partner ${index + 1}`}
                      width={120}
                      height={50}
                      className="mix-blend-multiply"
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Heading and Subheading */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Closing the air quality <br /> data gaps in Africa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide accurate, hyperlocal, and timely air quality data to
            provide <br />
            evidence of the magnitude and scale of air pollution across Africa.
          </p>
          <div className="flex justify-center items-center gap-0 relative">
            {/* For African Cities Button */}
            <CustomButton
              onClick={() => setActiveTab('cities')}
              className={`px-6 py-3 ${
                activeTab === 'cities'
                  ? 'bg-[#2E3A59] text-white z-10 scale-105 rounded-lg'
                  : 'bg-[#DFE8F9] text-[#2E3A59] -ml-1 rounded-l-lg'
              } border border-[#DFE8F9]`}
            >
              For African cities
            </CustomButton>

            {/* For Communities Button */}
            <CustomButton
              onClick={() => setActiveTab('communities')}
              className={`px-6 py-3 ${
                activeTab === 'communities'
                  ? 'bg-[#2E3A59] text-white z-10 scale-105 rounded-lg'
                  : 'bg-[#DFE8F9] text-[#2E3A59] -ml-1 rounded-r-lg'
              } border border-[#DFE8F9]`}
            >
              For Communities
            </CustomButton>
          </div>
        </div>

        {/* Accordion and Image Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
          {/* Accordion Section */}
          <div className="lg:w-1/2 w-full">
            <Accordion items={accordionItems[activeTab]} />
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full h-64 lg:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={`${
                  activeTab === 'cities'
                    ? 'https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132435/website/photos/AirQuality_meyioj.webp'
                    : 'https://res.cloudinary.com/dbibjvyhm/image/upload/v1726578795/website/photos/ForCommunities_oepvth.webp'
                }`}
                alt="Air quality monitor installation"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          {
            label: 'African Cities',
            value: '8+',
            icon: Network,
          },
          {
            label: 'Community Champions',
            value: '1500+',
            icon: Community,
          },
          {
            label: 'Monitor Installations',
            value: '250+',
            icon: Monitor,
          },
          {
            label: 'Data records',
            value: '67.4M+',
            icon: Records,
          },
          {
            label: 'Research papers',
            value: '10+',
            icon: Publications,
          },
          {
            label: 'Partners',
            value: '300+',
            icon: Partners,
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="h-[240px] p-6 bg-[#DFE8F9] rounded-lg flex flex-col justify-between items-start space-y-4"
          >
            <div className="text-left flex flex-col items-start">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
              <Image src={stat.icon} alt={stat.label} width={30} height={30} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeStatsSection;
