'use client';
import { CustomButton } from '@components/ui';
import { format } from 'date-fns';
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
    return text?.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  const formatDate = (date: string) => {
    return format(new Date(date), 'MMMM d, yyyy');
  };

  // Determine the events based on the selected tab
  const eventsToShow = selectedTab === 'upcoming' ? upcomingEvents : pastEvents;
  const noEventsMessage =
    selectedTab === 'upcoming' ? 'No Upcoming Events' : 'No Past Events';

  return (
    <section className="max-w-5xl mx-auto w-full mb-8 px-4 lg:px-0">
      {/* If there are no events to display */}
      {eventsToShow.length === 0 ? (
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-600 text-xl">{noEventsMessage}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsToShow.map((event) => (
            <div
              key={event.id}
              className="flex flex-col rounded-lg transition-shadow bg-white overflow-hidden max-w-[350px] mx-auto"
              style={{ maxHeight: '450px' }}
            >
              {/* Event Image */}
              <div className="relative w-full h-[200px] mb-4 flex justify-center items-center overflow-hidden">
                <Image
                  src={event.event_image_url}
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
                  {truncateText(event.title_subtext, 80)}
                </p>

                {/* Event Date */}
                <div className="flex items-center space-x-2 text-gray-500 mt-2">
                  <FiCalendar className="w-5 h-5" />
                  <span>{formatDate(event.end_date)}</span>
                </div>

                {/* Read More Button */}
                <CustomButton
                  onClick={() => router.push(`/events/${event.id}`)}
                  className="text-blue-600 text-left p-0 bg-transparent mt-4"
                >
                  Read more →
                </CustomButton>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default EventCardsSection;
