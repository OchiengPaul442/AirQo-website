'use client';
import EventCardsSection from '@components/sections/Events/EventCardsSection';
import { CustomButton } from '@components/ui';
import { getAllEvents } from '@services/apiService';
import { format, isSameMonth, parse } from 'date-fns';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FiCalendar, FiClock } from 'react-icons/fi';

const EventPage: React.FC = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);
  const [pastEvents, setPastEvents] = useState<any[]>([]);
  const [featuredEvents, setFeaturedEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getAllEvents();

        const upcoming = events.filter(
          (event: any) => new Date(event.end_date) > new Date(),
        );
        const past = events.filter(
          (event: any) => new Date(event.end_date) <= new Date(),
        );
        const featured = events.filter(
          (event: any) => event.event_tag === 'featured',
        );

        setUpcomingEvents(upcoming);
        setPastEvents(past);
        setFeaturedEvents(featured);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const firstFeaturedEvent =
    featuredEvents.length > 0 ? featuredEvents[0] : null;

  // Function to format the date range based on whether the months are the same
  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isSameMonth(start, end)) {
      return `${format(start, 'do')} - ${format(end, 'do MMMM yyyy')}`;
    } else {
      return `${format(start, 'MMMM do, yyyy')} - ${format(
        end,
        'MMMM do, yyyy',
      )}`;
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header Section */}
      {isLoading ? (
        <div className="mb-12 bg-[#F2F1F6] py-4 lg:py-16">
          <div className="max-w-5xl mx-auto w-full px-4 lg:px-0 flex flex-col-reverse lg:flex-row lg:space-x-12 items-center">
            <div className="flex-1 mb-8 lg:mb-0">
              <div className="h-6 bg-gray-300 w-1/2 rounded mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-300 w-3/4 rounded mb-6 animate-pulse"></div>
              <div className="flex flex-wrap gap-4 lg:items-center mb-6">
                <div className="h-4 bg-gray-300 w-32 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-300 w-20 rounded animate-pulse"></div>
              </div>
              <div className="bg-blue-100 px-6 py-4 text-blue-700 rounded-lg w-32 h-10 animate-pulse"></div>
            </div>
            <div className="flex-1 w-full mb-6 lg:mb-0">
              <div className="w-full h-60 bg-gray-300 rounded-lg shadow-md animate-pulse"></div>
            </div>
          </div>
        </div>
      ) : (
        firstFeaturedEvent && (
          <section className="mb-12 bg-[#F2F1F6] py-4 lg:py-16">
            <div className="max-w-5xl mx-auto w-full px-4 lg:px-0 flex flex-col-reverse lg:flex-row lg:space-x-12 items-center">
              <div className="flex-1 mb-8 lg:mb-0">
                <h1 className="text-4xl font-bold mb-4">
                  {firstFeaturedEvent.title}
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  {firstFeaturedEvent.title_subtext}
                </p>
                <div className="flex flex-wrap gap-4 lg:items-center mb-6">
                  <div className="flex items-center space-x-2">
                    <FiCalendar className="text-gray-500 w-5 h-5" />
                    <p className="text-gray-600">
                      {formatDateRange(
                        firstFeaturedEvent.start_date,
                        firstFeaturedEvent.end_date,
                      )}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiClock className="text-gray-500 w-5 h-5" />
                    <p className="text-gray-600">
                      {`${format(
                        parse(
                          firstFeaturedEvent.start_time,
                          'HH:mm:ss',
                          new Date(),
                        ),
                        'HH:mm',
                      )} - ${format(
                        parse(
                          firstFeaturedEvent.end_time,
                          'HH:mm:ss',
                          new Date(),
                        ),
                        'HH:mm',
                      )}`}
                    </p>
                  </div>
                </div>
                <CustomButton
                  onClick={() =>
                    router.push(`/events/${firstFeaturedEvent.id}`)
                  }
                  className="bg-blue-100 text-blue-700 px-6 py-4"
                >
                  Read more
                </CustomButton>
              </div>
              <div className="flex-1 w-full mb-6 lg:mb-0">
                <Image
                  src={firstFeaturedEvent.event_image_url} // Full URL for event image
                  alt={firstFeaturedEvent.title}
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
        )
      )}

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
      {isLoading ? (
        <div className="max-w-5xl mx-auto w-full px-4 lg:px-0 mb-8">
          {/* Skeleton for Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="bg-gray-300 rounded-lg shadow-md animate-pulse h-80"
              >
                <div className="h-44 bg-gray-400 rounded-t-lg"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-400 rounded mb-2"></div>
                  <div className="h-3 bg-gray-400 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <EventCardsSection
          selectedTab={selectedTab}
          upcomingEvents={upcomingEvents}
          pastEvents={pastEvents}
        />
      )}
    </div>
  );
};

export default EventPage;
