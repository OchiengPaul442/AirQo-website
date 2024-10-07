'use client';
import EventCardsSection from '@components/sections/Events/EventCardsSection';
import { CustomButton } from '@components/ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiCalendar, FiClock } from 'react-icons/fi';

const EventPage: React.FC = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Green Mobility Stakeholders Forum, Kampala',
      description:
        'Pathways to sustainable and inclusive mobility in urban spaces',
      dateRange: '17th - 17th October 2024',
      time: '08:30 - 13:00',
      img: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fHww',
      link: '/event/1',
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'Digital Platforms and Open Data',
      description:
        'Increasing access to actionable air quality information using contextual scalable platform',
      date: '30th May, 2024',
      img: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnRzfGVufDB8fDB8fHww',
      link: '/event/2',
    },
    {
      id: 2,
      title: 'AirQo African Air Quality Prediction Challenge',
      description:
        'Can you use Sentinel 5P data to predict air quality around Africa?',
      date: '15th March, 2024',
      img: 'https://images.unsplash.com/photo-1607892379516-5ff729bbc620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnRzfGVufDB8fDB8fHww',
      link: '/event/3',
    },
    {
      id: 3,
      title: 'From Data Collection to Insights',
      description:
        'A Workshop on Data Science Practices and Processes at AirQo',
      date: '23rd January, 2024',
      img: 'https://images.unsplash.com/photo-1648073380875-5a46e345ecf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D',
      link: '/event/4',
    },
  ];

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header Section */}
      <section className="mb-12 bg-[#F2F1F6] py-4 lg:py-16">
        <div className="max-w-5xl mx-auto w-full px-4 lg:px-0 flex flex-col-reverse lg:flex-row lg:space-x-12 items-center">
          {/* Text Content Section */}
          <div className="flex-1 mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold mb-4">
              Green Mobility Stakeholders Forum, Kampala
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Pathways to sustainable and inclusive mobility in urban spaces
            </p>
            <div className="flex flex-wrap gap-4 lg:items-center mb-6">
              <div className="flex items-center space-x-2">
                <FiCalendar className="text-gray-500 w-5 h-5" />
                <p className="text-gray-600">17th - 17th October 2024</p>
              </div>
              <div className="flex items-center space-x-2">
                <FiClock className="text-gray-500 w-5 h-5" />
                <p className="text-gray-600">08:30 - 13:00</p>
              </div>
            </div>
            <CustomButton
              onClick={() => router.push('/event/1')}
              className="bg-blue-100 text-blue-700 px-6 py-4"
            >
              Read more
            </CustomButton>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full mb-6 lg:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1566731372839-859e7cead0ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Green Mobility Stakeholders Forum"
              width={800}
              height={600}
              layout="responsive"
              objectFit="cover"
              priority
              className="rounded-lg shadow-md w-full max-h-[500px] object-cover h-auto"
            />
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="max-w-5xl mx-auto w-full px-4 lg:px-0 mb-8">
        <div className="flex space-x-8 border-b border-gray-300">
          <button
            onClick={() => handleTabClick('upcoming')}
            className={`pb-2 text-lg ${
              selectedTab === 'upcoming'
                ? 'text-black border-b-2 border-black font-semibold'
                : 'text-gray-500'
            } transition-colors duration-300`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => handleTabClick('past')}
            className={`pb-2 text-lg ${
              selectedTab === 'past'
                ? 'text-black border-b-2 border-black font-semibold'
                : 'text-gray-500'
            } transition-colors duration-300`}
          >
            Past Events
          </button>
        </div>
      </section>

      {/* Event Cards Section */}
      <EventCardsSection
        selectedTab={selectedTab}
        upcomingEvents={upcomingEvents}
        pastEvents={pastEvents}
      />
    </div>
  );
};

export default EventPage;
