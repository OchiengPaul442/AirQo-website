'use client';
import { Divider } from '@components/ui';
import { useForumData } from '@context/ForumDataContext';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Individual Accordion Item Component
const AccordionItem = ({ title, subText, sessions, isOpen, onToggle }: any) => {
  // Helper function to format time using date-fns
  const formatTime = (time: string) => {
    try {
      return format(new Date(`1970-01-01T${time}Z`), 'p');
    } catch (error) {
      console.error(error);
      return time;
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-sm p-4 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <div>
          <h2 className="text-lg font-bold">{title}</h2>

          <div
            className="text-sm text-gray-600"
            dangerouslySetInnerHTML={{ __html: subText }}
          />
        </div>

        {/* Toggle Icon */}
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>

      {/* Content section */}
      {isOpen && (
        <div className="mt-4 pt-4">
          {sessions.map((item: any, index: number) => (
            <div className="flex flex-col gap-4" key={index}>
              <Divider className="bg-black p-0 m-0 h-[1px] w-full max-w-5xl mx-auto" />
              <div className="grid grid-cols-12 gap-4 mb-4">
                {/* Left Time Section */}
                <div className="col-span-2 text-sm font-semibold">
                  {formatTime(item.start_time)}
                </div>

                {/* Right Content Section */}
                <div className="col-span-10">
                  <h3 className="font-bold">{item.session_title}</h3>

                  <div
                    className="text-sm"
                    dangerouslySetInnerHTML={{
                      __html: item.session_details,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Page Component that renders Accordion Items
const Page = () => {
  const data = useForumData(); // Assuming data.programs is returned from this hook

  const [openAccordion, setOpenAccordion] = useState<string | null>(null); // Tracks the open accordion by id

  // Function to handle accordion toggle
  const handleToggle = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id); // Toggle between open and closed
  };

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-0 flex flex-col gap-6">
      <div className="py-4">
        <h2 className="text-2xl font-bold">Schedule</h2>
        <div dangerouslySetInnerHTML={{ __html: data.schedule_details }} />
      </div>

      {/* Render programs dynamically */}
      {data.programs.map((program: any) => (
        <AccordionItem
          key={program.id}
          title={program.title}
          subText={program.sub_text}
          sessions={program.sessions}
          isOpen={openAccordion === program.id} // Check if the accordion is open
          onToggle={() => handleToggle(program.id)} // Handle toggle
        />
      ))}

      <Divider className="bg-black p-0 m-0 h-[1px] w-full max-w-5xl mx-auto" />

      {/* Split Section - registration details */}
      <div>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Registration</h2>
          </div>
          <div
            className="md:w-2/3 space-y-4"
            dangerouslySetInnerHTML={{ __html: data.registration_details }}
          ></div>
        </div>
      </div>

      <Divider className="bg-black p-0 m-0 h-[1px] w-full max-w-5xl mx-auto" />

      {/* Split Section - Sponsorship Packages */}
      <div>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Sponsorship opportunities</h2>
          </div>
          <div
            className="md:w-2/3 space-y-4"
            dangerouslySetInnerHTML={{
              __html: data.sponsorship_opportunities_schedule,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
