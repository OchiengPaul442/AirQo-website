'use client';

import Divider from '@components/sections/Divider';
import {
  getBoardMembers,
  getExternalTeamMembers,
  getTeamMembers,
} from '@services/apiService';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/';

/** Type Definitions **/

// Interface for individual member descriptions
interface MemberDescription {
  description: string;
}

// Interface for a team member
interface TeamMember {
  picture_url: string;
  name: string;
  title: string;
  twitter?: string;
  linked_in?: string;
  descriptions: MemberDescription[];
}

/** Skeleton Loader Component **/

const SkeletonCard: React.FC = () => (
  <div className="flex flex-col items-center space-y-4">
    <div className="w-[310px] h-[390px] bg-gray-300 rounded-lg animate-pulse"></div>
    <div className="flex items-center w-full justify-between">
      <div className="text-left w-2/3">
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2 animate-pulse"></div>
        <div className="h-3 bg-gray-300 rounded w-1/3 animate-pulse"></div>
      </div>
      <div className="h-6 w-6 bg-gray-300 rounded-full animate-pulse"></div>
    </div>
  </div>
);

/** Main AboutPage Component **/

const AboutPage: React.FC = () => {
  // State definitions with TypeScript types
  const [boardMembers, setBoardMembers] = useState<TeamMember[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [externalTeamMembers, setExternalTeamMembers] = useState<TeamMember[]>(
    [],
  );

  const [loadingTeam, setLoadingTeam] = useState<boolean>(true);
  const [loadingExternalTeam, setLoadingExternalTeam] = useState<boolean>(true);
  const [loadingBoard, setLoadingBoard] = useState<boolean>(true);

  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Fetch data for board, team, and external team
    const fetchData = async () => {
      try {
        const [boardData, teamData, externalTeamData] = await Promise.all([
          getBoardMembers(),
          getTeamMembers(),
          getExternalTeamMembers(),
        ]);

        setBoardMembers(boardData || []);
        setTeamMembers(teamData || []);
        setExternalTeamMembers(externalTeamData || []);
      } catch (error) {
        console.error('Error fetching team data:', error);
      } finally {
        setLoadingBoard(false);
        setLoadingTeam(false);
        setLoadingExternalTeam(false);
      }
    };

    fetchData();
  }, []);

  /** Helper Function to Render Member Sections **/
  const renderMembersSection = (
    members: TeamMember[],
    loading: boolean,
    sectionId: string,
    title: string,
  ) => {
    if (loading) {
      // Display Skeleton Loaders
      return (
        <section
          id={sectionId}
          className="max-w-5xl mx-auto w-full px-4 lg:px-0 space-y-8 scroll-mt-[100px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        </section>
      );
    }

    if (!loading && members.length === 0) {
      // Do not render the section if there's no data
      return null;
    }

    // Render the actual member cards
    return (
      <section
        id={sectionId}
        className="max-w-5xl mx-auto w-full px-4 lg:px-0 space-y-8 scroll-mt-[200px]"
      >
        <div className="flex flex-col lg:flex-row items-start lg:space-x-12">
          {/* Title */}
          <h2 className="text-3xl lg:text-[48px] font-medium flex-shrink-0 w-full text-left lg:w-1/3">
            {title}
          </h2>

          {/* Content */}
          <div className="space-y-6 w-full max-w-[556px]">
            {title === 'Meet the team' && (
              <>
                <p>
                  This is our team, a community of spirited individuals who work
                  hard to bridge the gap in air quality monitoring in Africa.
                </p>
                <Link href="/team" className="flex items-center text-blue-700">
                  <span>Join the team </span>
                  <FaArrowRightLong className="inline-block ml-2 " />
                </Link>
              </>
            )}
            {title === 'External team' && (
              <p>
                A team of enthusiastic experts that offer guidance to enhance
                our growth and realisation of our goals.
              </p>
            )}
            {title === 'Meet the Board' && (
              <p>
                A team of enthusiastic experts that offer guidance to enhance
                our growth and realisation of our goals.
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {members.map((member, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <div className="flex flex-col items-center space-y-4 cursor-pointer">
                  <div className="w-[310px] h-[390px] overflow-hidden rounded-lg">
                    <Image
                      src={member.picture_url}
                      alt={member.name}
                      width={310}
                      height={390}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center w-full justify-between">
                    <div className="text-left">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-gray-500">{member.title}</p>
                    </div>
                    {/* Optional Social Media Icon */}
                    <div className="flex items-center space-x-2">
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 transition"
                        >
                          <FaTwitter size={24} />
                        </a>
                      )}
                      {member.linked_in && (
                        <a
                          href={member.linked_in}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 transition"
                        >
                          <FaLinkedinIn size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              {/* Content Section */}
              <DialogContent className="max-w-[1024px] p-6">
                {/* Header */}
                <DialogHeader className="mb-4">
                  <div className="flex flex-col items-start gap-4">
                    <div>
                      <DialogTitle className="text-2xl font-bold">
                        {member.name}
                      </DialogTitle>
                      <p className="text-lg text-gray-500">{member.title}</p>
                    </div>
                    {/* Optional Social Media Icon */}
                    <div className="flex items-center space-x-2">
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 transition"
                        >
                          <FaTwitter size={24} />
                        </a>
                      )}
                      {member.linked_in && (
                        <a
                          href={member.linked_in}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 transition"
                        >
                          <FaLinkedinIn size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </DialogHeader>
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  {/* Image Section */}
                  <div className="flex-shrink-0 w-full lg:w-[300px] h-[300px] overflow-hidden rounded-lg">
                    <Image
                      src={member.picture_url}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    {/* Description */}
                    <DialogDescription className="leading-relaxed overflow-y-auto">
                      {member.descriptions.map((desc, idx) => (
                        <p key={idx}>{desc.description}</p>
                      ))}
                    </DialogDescription>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="pb-16 flex flex-col w-full space-y-16">
      {/* Hero Section */}
      <section className="bg-[#F3F4F6] px-4 lg:px-0 h-[300px] w-full scroll-mt-[100px]">
        <div className="max-w-5xl mx-auto w-full h-full flex flex-col justify-between">
          <div></div>
          <div className="text-left">
            <h1 className="text-2xl lg:text-[48px] font-bold text-gray-800">
              About
            </h1>
          </div>
          <nav className="flex justify-start items-baseline space-x-6 text-gray-400">
            <a
              href="#vision"
              className="relative pb-2 hover:text-gray-800 transition-all group text-gray-800"
            >
              Our Vision
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a
              href="#story"
              className="relative pb-2 hover:text-gray-800 transition-all group"
            >
              Our Story
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a
              href="#mission"
              className="relative pb-2 hover:text-gray-800 transition-all group"
            >
              Our Mission
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a
              href="#values"
              className="relative pb-2 hover:text-gray-800 transition-all group"
            >
              Our Values
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a
              href="#team"
              className="relative pb-2 hover:text-gray-800 transition-all group"
            >
              Our Team
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </nav>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto w-full px-4 lg:px-0 scroll-mt-[100px]">
        <p className="text-2xl lg:text-[48px] max-w-[800px] leading-[48px] font-medium text-left">
          At AirQo, we empower communities across Africa with accurate,
          hyperlocal, and timely air quality data to drive air pollution
          mitigation actions.
        </p>
      </section>

      {/* Vision Section */}
      <section
        id="vision"
        className="max-w-5xl mx-auto w-full px-4 lg:px-0 space-y-8 scroll-mt-[100px]"
      >
        <div className="flex flex-col-reverse relative">
          <Image
            src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728295735/website/photos/about/teamImage_ganc1y.png"
            alt="Abstract Outline"
            width={1024}
            height={480}
            className="object-cover w-auto h-auto"
          />
          <Image
            src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728295909/website/photos/about/Frame_ugwgqr.png"
            alt="Abstract Outline"
            width={1024}
            height={49}
            className="absolute w-auto h-auto object-cover"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-start items-center gap-8">
          <div className="relative w-full h-[400px] flex items-center justify-center">
            {/* Background Abstract Shape Image */}
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728294910/website/photos/about/about_us_vector_3_wiw2ie.png"
              alt="Abstract Background"
              width={800}
              height={400}
              className="absolute w-[300px] h-[200px] lg:w-[410px] lg:h-[225px]"
            />

            {/* Outline Abstract Shape Image */}
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728294910/website/photos/about/about-us-vector-2_mioxcy.png"
              alt="Abstract Outline"
              width={800}
              height={400}
              className="absolute w-[350px] h-[230px] lg:w-[450px] lg:h-[300px] object-contain"
            />

            {/* Text */}
            <span className="text-gray-800 text-lg lg:text-[48px] relative">
              Our vision
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <p className="text-xl lg:text-[48px] leading-[56px] font-normal">
                Clean air for all African cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Story Section */}
      <section
        id="story"
        className="max-w-5xl mx-auto w-full px-4 space-y-8 scroll-mt-[150px]"
      >
        <div className="flex flex-col lg:flex-row items-start lg:space-x-12">
          {/* Title */}
          <h2 className="text-3xl lg:text-[48px] text-left w-full font-medium flex-shrink-0 lg:w-1/3">
            Our Story
          </h2>

          {/* Content */}
          <div className="space-y-6 w-full max-w-[556px]">
            <p className="text-lg text-gray-700 leading-relaxed">
              We are on a mission to empower communities across Africa with
              information about the quality of the air they breathe.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              AirQo was founded in 2015 at Makerere University to close the gaps
              in air quality monitoring across Africa. Our low-cost air quality
              monitors are designed to suit the African infrastructure,
              providing locally-led solutions to African air pollution
              challenges.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              They provide accurate, hyperlocal, and timely data providing
              evidence of the magnitude and scale of air pollution across the
              continent.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By empowering citizens with air quality information, we hope to
              inspire change and action among African citizens to take effective
              action to reduce air pollution.
            </p>
          </div>
        </div>
      </section>

      <Divider className="bg-black w-full p-0 h-[1px] mx-auto" />

      {/* Mission Section */}
      <section
        id="mission"
        className="max-w-5xl mx-auto w-full px-4 space-y-4 scroll-mt-[150px]"
      >
        <p className="text-lg lg:text-[48px] leading-[56px] font-medium text-left">
          Our mission is to efficiently collect, analyze and forecast air
          quality data to international standards and work with partners to
          reduce air pollution and raise awareness of its effects in African
          cities.
        </p>
      </section>

      <Divider className="bg-black w-full p-0 h-[1px] mx-auto" />

      {/* Values Section */}
      <section
        id="values"
        className="max-w-5xl mx-auto w-full px-4 space-y-8 scroll-mt-[150px]"
      >
        <div className="flex flex-col lg:flex-row items-start lg:space-x-12">
          {/* Title */}
          <h2 className="text-3xl lg:text-[48px] font-medium flex-shrink-0 w-full text-left lg:w-1/3">
            Our Values
          </h2>

          {/* Content */}
          <div className="space-y-6 w-full max-w-[556px]">
            <ul className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <li>
                <span className="font-bold">Citizen Focus:</span>
                <br /> At AirQo, we believe that the main beneficiary of our
                work should be the citizen.
              </li>
              <li>
                <span className="font-bold">Precision:</span>
                <br /> We convert low-cost sensor data into a reliable measure
                of air quality thus making our network and our models as
                accurate as they can be.
              </li>
              <li>
                <span className="font-bold">Collaboration and Openness:</span>
                <br /> In order to maximize our impact, we collaborate by
                sharing our data through partnerships.
              </li>
              <li>
                <span className="font-bold">Investment in People:</span> We work
                in a fast-moving field with continuous improvements in
                technology. We recruit the best teams and also commit to their
                ongoing professional development and training.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Divider className="bg-black w-full p-0 h-[1px] mx-auto" />

      {/* Team Section */}
      {renderMembersSection(teamMembers, loadingTeam, 'team', 'Meet the team')}

      <Divider className="bg-black w-full p-0 h-[1px] mx-auto" />

      {/* External Team Section */}
      {renderMembersSection(
        externalTeamMembers,
        loadingExternalTeam,
        'external-team',
        'External team',
      )}

      <Divider className="bg-black w-full p-0 h-[1px] mx-auto" />

      {/* Board Section */}
      {renderMembersSection(
        boardMembers,
        loadingBoard,
        'board',
        'Meet the Board',
      )}
    </div>
  );
};

export default AboutPage;
