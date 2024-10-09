'use client';
import RegisterBanner from '@components/sections/CleanAir/RegisterBanner';
import { format, isAfter, isBefore } from 'date-fns';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import {
  CustomButton,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Pagination,
} from '@/components/ui';

// Dummy data for events
const events = [
  {
    title: 'Climate and Clean Air Conference 2024',
    description: 'Healthy Air for All? Responding to a changing environment.',
    date: '2024-02-21',
    image:
      'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    category: 'Environment',
  },

  {
    title: 'Climate and Clean Air Conference 2025',
    description: 'Healthy Air for All? Responding to a changing environment.',
    date: '2025-02-21',
    image:
      'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    category: 'Environment',
  },
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const categories = ['Environment', 'Health', 'Technology'];

const EventsPage = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showUpcoming, setShowUpcoming] = useState(true);
  const [showPast, setShowPast] = useState(true);
  const [currentUpcomingPage, setCurrentUpcomingPage] = useState(1);
  const [currentPastPage, setCurrentPastPage] = useState(1);
  const itemsPerPage = 4;

  const currentDate = new Date();

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Filter events based on the selected month and category
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const matchesMonth = selectedMonth
      ? format(eventDate, 'MMMM') === selectedMonth
      : true;
    const matchesCategory = selectedCategory
      ? event.category === selectedCategory
      : true;
    return matchesMonth && matchesCategory;
  });

  // Split events into upcoming and past based on date comparison
  const upcomingEvents = filteredEvents.filter((event) =>
    isAfter(new Date(event.date), currentDate),
  );
  const pastEvents = filteredEvents.filter((event) =>
    isBefore(new Date(event.date), currentDate),
  );

  // Pagination logic
  const totalUpcomingPages = Math.ceil(upcomingEvents.length / itemsPerPage);
  const totalPastPages = Math.ceil(pastEvents.length / itemsPerPage);

  const paginatedUpcomingEvents = upcomingEvents.slice(
    (currentUpcomingPage - 1) * itemsPerPage,
    currentUpcomingPage * itemsPerPage,
  );

  const paginatedPastEvents = pastEvents.slice(
    (currentPastPage - 1) * itemsPerPage,
    currentPastPage * itemsPerPage,
  );

  return (
    <div className="py-8 space-y-16">
      {/* Main banner section */}
      <section className="max-w-5xl mx-auto w-full">
        <div className="py-8 px-4 lg:px-0 flex flex-col items-center space-y-6 md:space-y-8">
          {/* Image */}
          <div className="w-full">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132391/website/cleanAirForum/images/events_gfnscv.webp"
              alt="Air Quality Management Banner"
              width={800}
              height={400}
              className="rounded-lg object-contain w-full"
            />
          </div>

          {/* Text */}
          <div className="text-left">
            <p className="text-[24px] text-gray-700 mb-4">
              The CLEAN-Air Network provides a platform for facilitating
              engagement activities including conferences, webinars, workshops,
              training, and community campaigns.
            </p>
            <p className="text-[24px] text-gray-700">
              Partners will have access to shared resources in the form of
              social media toolkits, press release templates, digital banners,
              etc. that can be customized to suit every activity.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto w-full px-4 lg:px-0 flex flex-col gap-8">
          {/* Filter Section */}
          <div className="flex justify-end py-8 items-center">
            <div className="flex space-x-4">
              {/* Date Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none">
                    Date
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {months.map((month) => (
                    <DropdownMenuItem
                      key={month}
                      onClick={() => handleMonthChange(month)}
                    >
                      {month}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Filter Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none">
                    Filters
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowUpcoming(!showUpcoming)}
            >
              <h2 className="text-2xl font-semibold">Upcoming Events</h2>
              {showUpcoming ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {showUpcoming && (
              <div className="space-y-4 mt-4">
                {paginatedUpcomingEvents.length > 0 ? (
                  paginatedUpcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex flex-col lg:flex-row bg-white rounded-xl p-4"
                    >
                      <div className="w-full lg:w-1/4">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={231}
                          height={204}
                          className="rounded-lg object-cover w-full"
                        />
                      </div>
                      <div className="ml-0 lg:ml-4 w-full lg:w-3/4 mt-4 lg:mt-0">
                        <h3 className="text-xl lg:text-[32px] font-semibold">
                          {event.title}
                        </h3>
                        <p className="text-gray-600">{event.description}</p>
                        <p className="mt-2 text-[24px]">
                          {format(new Date(event.date), 'dd MMMM, yyyy')}
                        </p>
                        <CustomButton
                          onClick={() => console.log('Read more')}
                          className="mt-4 p-0 text-blue-600 hover:underline bg-transparent border-none"
                        >
                          Read more
                        </CustomButton>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No upcoming events</p>
                )}

                {/* Pagination for upcoming events */}
                {upcomingEvents.length > itemsPerPage && (
                  <Pagination
                    totalPages={totalUpcomingPages}
                    currentPage={currentUpcomingPage}
                    onPageChange={setCurrentUpcomingPage}
                  />
                )}
              </div>
            )}
          </div>

          {/* Past Events Section */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowPast(!showPast)}
            >
              <h2 className="text-2xl font-semibold">Past Events</h2>
              {showPast ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {showPast && (
              <div className="space-y-4 mt-4">
                {paginatedPastEvents.length > 0 ? (
                  paginatedPastEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex flex-col lg:flex-row bg-white rounded-xl p-4"
                    >
                      <div className="w-full lg:w-1/4">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={231}
                          height={204}
                          className="rounded-lg object-cover w-full"
                        />
                      </div>
                      <div className="ml-0 lg:ml-4 w-full lg:w-3/4 mt-4 lg:mt-0">
                        <h3 className="text-xl lg:text-[32px] font-semibold">
                          {event.title}
                        </h3>
                        <p className="text-gray-600">{event.description}</p>
                        <p className="mt-2 text-[24px]">
                          {format(new Date(event.date), 'dd MMMM, yyyy')}
                        </p>
                        <CustomButton
                          onClick={() => console.log('Read more')}
                          className="mt-4 p-0 text-blue-600 hover:underline bg-transparent border-none"
                        >
                          Read more
                        </CustomButton>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No past events</p>
                )}

                {/* Pagination for past events */}
                {pastEvents.length > itemsPerPage && (
                  <Pagination
                    totalPages={totalPastPages}
                    currentPage={currentPastPage}
                    onPageChange={setCurrentPastPage}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <RegisterBanner />
    </div>
  );
};

export default EventsPage;
