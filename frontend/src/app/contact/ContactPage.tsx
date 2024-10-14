'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FiDatabase, FiMessageCircle, FiStar, FiTablet } from 'react-icons/fi';

const ContactPage: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = (detail: string) => {
    router.push(
      `/contact/form?category=${detail.toLowerCase().replace(/ /g, '-')}`,
    );
  };

  return (
    <div
      className="flex flex-col lg:flex-row w-full lg:space-x-8 p-4 lg:p-8 bg-[#F9FAFB]"
      style={{ height: 'calc(100vh - 132px)' }}
    >
      {/* Contact Information Section */}
      <section className="flex-1 flex items-center justify-center bg-yellow-50 p-8 rounded-lg shadow-md mb-8 lg:mb-0 lg:h-auto h-full">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
          <p className="text-lg font-semibold mb-4">Makerere University</p>
          <p className="text-gray-600 mb-2">
            Software Systems Centre, Block B, Level 3, College of Computing and
            Information Sciences, Plot 56 University Pool Road, Kampala, Uganda
          </p>
          <p className="text-lg mt-4">
            E:{' '}
            <a href="mailto:info@airqo.net" className="text-blue-600 underline">
              info@airqo.net
            </a>
          </p>
        </div>
      </section>

      {/* Inquiry Options Section */}
      <section className="flex-1 w-full flex flex-col justify-center p-8 space-y-4 bg-white rounded-lg shadow-md">
        {[
          {
            icon: <FiTablet size={24} className="text-blue-500" />,
            question: 'I have a question about',
            detail: 'Air Quality Tools',
          },
          {
            icon: <FiDatabase size={24} className="text-blue-500" />,
            question: 'I have a question about',
            detail: 'Air Quality Data',
          },
          {
            icon: <FiStar size={24} className="text-blue-500" />,
            question: 'I have some',
            detail: 'feedback',
          },
          {
            icon: <FiMessageCircle size={24} className="text-blue-500" />,
            question: 'I have a',
            detail: 'general inquiry',
          },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(item.detail)}
            className="flex cursor-pointer items-center p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white w-full text-left"
          >
            <div className="flex-shrink-0 p-4 bg-blue-100 rounded-full mr-4">
              {item.icon}
            </div>
            <div>
              <p className="text-gray-600">{item.question}</p>
              <p className="font-bold">{item.detail}</p>
            </div>
          </button>
        ))}
      </section>
    </div>
  );
};

export default ContactPage;
