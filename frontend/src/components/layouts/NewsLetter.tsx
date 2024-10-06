import { CustomButton } from '@components/ui';
import React from 'react';

const NewsLetter = () => {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12">
        {/* Header Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
          <h2 className="text-2xl md:text-[40px] font-bold text-blue-600">
            Get air quality updates!
          </h2>
          <p className="text-blue-600 text-[20px]">
            Subscribe to our newsletter and learn about the quality of the air
            you are breathing
          </p>
        </div>

        {/* Form Section */}
        <form className="lg:w-1/2 flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4 w-full">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="flex-1 p-3 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="flex-1 p-3 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 mt-4 md:mt-0"
              required
            />
          </div>
          <div className="flex w-full">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-grow p-3 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <CustomButton type="submit" className="rounded-none">
              Subscribe
            </CustomButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
