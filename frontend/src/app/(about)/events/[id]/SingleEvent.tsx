'use client';
import { Accordion } from '@components/ui'; // Import your custom Accordion
import { getEventDetails } from '@services/apiService';
import { format } from 'date-fns';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SingleEvent = ({ id }: any) => {
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await getEventDetails(id);
        setEvent(response);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      {/* Header Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${event.background_image_url})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          <p className="text-lg">{event.title_subtext}</p>
          <p className="mt-4">
            {format(new Date(event.start_date), 'MMMM do, yyyy')} -{' '}
            {format(new Date(event.end_date), 'MMMM do, yyyy')}
          </p>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {event?.partners?.map((partner: any) => (
            <div key={partner.id} className="flex items-center justify-center">
              <Image
                src={partner.partner_logo_url}
                alt={partner.name}
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Event Details Section */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
        <div dangerouslySetInnerHTML={{ __html: event.event_details }}></div>
      </section>

      {/* Event Program Section (Using Custom Accordion) */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Event Program</h2>
        {event?.programs?.length > 0 ? (
          event.programs.map((program: any) => (
            <Accordion
              key={program.id}
              title={format(new Date(program.date), 'MMMM do, yyyy')}
            >
              <div className="p-4 bg-white rounded-lg shadow-md">
                {program.sessions.map((session: any) => (
                  <div key={session.id} className="mb-4">
                    <p className="text-sm text-gray-600">
                      {session.start_time} - {session.end_time}
                    </p>
                    <h3 className="text-lg font-semibold">
                      {session.session_title}
                    </h3>
                    <p>{session.venue}</p>
                    <p>{session.session_details}</p>
                  </div>
                ))}
              </div>
            </Accordion>
          ))
        ) : (
          <p>No program details available.</p>
        )}
      </section>

      {/* Inquiry Section */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">For Any Inquiries:</h2>
        {event?.inquiries?.length > 0 ? (
          event?.inquiries?.map((inquiry: any) => (
            <div key={inquiry.id} className="mb-4">
              <p className="text-lg font-medium">{inquiry.inquiry}</p>
              <p className="text-gray-600">{inquiry.role}</p>
              <p className="text-blue-500">{inquiry.email}</p>
            </div>
          ))
        ) : (
          <p>No inquiries available.</p>
        )}
      </section>
    </div>
  );
};

export default SingleEvent;
