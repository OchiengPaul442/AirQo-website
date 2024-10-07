'use client';
import { CustomButton } from '@components/ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FiCalendar } from 'react-icons/fi';

const EventCardsSection: React.FC<{
  selectedTab: string;
  upcomingEvents: any[];
  pastEvents: any[];
}> = ({ selectedTab, upcomingEvents, pastEvents }) => {
  const router = useRouter();

  // Function to truncate text
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  return (
    <section className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 px-4 lg:px-0">
      {/* Upcoming Events */}
      {selectedTab === 'upcoming' &&
        upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="flex flex-col rounded-lg transition-shadow bg-white overflow-hidden max-w-[350px] mx-auto"
            style={{ maxHeight: '450px' }}
          >
            {/* Event Image */}
            <div className="relative w-full h-[200px] mb-4 flex justify-center items-center overflow-hidden">
              <Image
                src={event.img}
                alt={event.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-t-lg"
              />
            </div>

            {/* Event Content */}
            <div className="flex flex-col space-y-3 p-4">
              {/* Event Title */}
              <h2 className="text-xl font-semibold">
                {truncateText(event.title, 50)}
              </h2>

              {/* Event Description */}
              <p className="text-gray-600">
                {truncateText(event.description, 80)}
              </p>

              {/* Event Date */}
              <div className="flex items-center space-x-2 text-gray-500 mt-2">
                <FiCalendar className="w-5 h-5" />
                <span>{event.dateRange}</span>
              </div>

              {/* Read More Button */}
              <CustomButton
                onClick={() => router.push(event.link)}
                className="text-blue-600 text-left p-0 bg-transparent mt-4"
              >
                Read more →
              </CustomButton>
            </div>
          </div>
        ))}

      {/* Past Events */}
      {selectedTab === 'past' &&
        pastEvents.map((event) => (
          <div
            key={event.id}
            className="flex flex-col rounded-lg transition-shadow bg-white overflow-hidden max-w-[350px] mx-auto"
            style={{ maxHeight: '450px' }}
          >
            {/* Event Image */}
            <div className="relative w-full h-[200px] mb-4 flex justify-center items-center overflow-hidden">
              <Image
                src={event.img}
                alt={event.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-t-lg"
              />
            </div>

            {/* Event Content */}
            <div className="flex flex-col space-y-3 p-4">
              {/* Event Title */}
              <h2 className="text-xl font-semibold">
                {truncateText(event.title, 50)}
              </h2>

              {/* Event Description */}
              <p className="text-gray-600">
                {truncateText(event.description, 80)}
              </p>

              {/* Event Date */}
              <div className="flex items-center space-x-2 text-gray-500 mt-2">
                <FiCalendar className="w-5 h-5" />
                <span>{event.date}</span>
              </div>

              {/* Read More Button */}
              <CustomButton
                onClick={() => router.push(event.link)}
                className="text-blue-600 text-left p-0 bg-transparent mt-4"
              >
                Read more →
              </CustomButton>
            </div>
          </div>
        ))}
    </section>
  );
};

export default EventCardsSection;
