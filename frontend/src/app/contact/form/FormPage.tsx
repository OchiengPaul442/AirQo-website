'use client';

import { CustomButton } from '@components/ui';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

const FormPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    setCategory(categoryFromUrl);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Category:', category);
    router.push('/contact/success');
  };

  // Define motion variants for the form container
  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div
      className="flex flex-col lg:flex-row w-full bg-[#F9FAFB]"
      style={{ height: 'calc(100vh - 132px)' }}
    >
      {/* Contact Information Section */}
      <section className="flex-1 flex items-center justify-center bg-yellow-50 p-8 mb-8 lg:mb-0 lg:h-auto h-full">
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

      {/* Form Section with Framer Motion */}
      <section className="flex-1 w-full flex flex-col justify-center p-8 bg-white">
        {/* Form */}
        <motion.section
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="mb-4 text-blue-600 hover:text-blue-800 transition-colors flex items-center focus:outline-none"
            aria-label="Go back to contact options"
          >
            <FiArrowLeft className="mr-2" />
            Back
          </button>
          <form className="space-y-6 items-start" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="flex flex-col">
              <label htmlFor="fullName" className="mb-2 text-gray-600">
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="p-2 border-b border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-[#F9FAFB]"
                required
                aria-required="true"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-gray-600">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 border-b border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-[#F9FAFB]"
                required
                aria-required="true"
                placeholder="Enter your email address"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 text-gray-600">
                Your message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="p-2 border-b border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-[#F9FAFB]"
                required
                aria-required="true"
                placeholder="Enter your message"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mr-2 relative top-[5px]"
                required
                aria-required="true"
              />
              <label htmlFor="terms" className="text-gray-600">
                I agree to the{' '}
                <a
                  href="/terms"
                  className="text-blue-600 underline hover:text-blue-800 transition-colors"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href="/privacy"
                  className="text-blue-600 underline hover:text-blue-800 transition-colors"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button with Hover and Tap Animations */}

            <CustomButton
              type="submit"
              className="bg-blue-600 text-white px-6 py-4 hover:bg-blue-700 transition-colors"
              aria-label="Submit contact form"
            >
              Send
            </CustomButton>
          </form>
        </motion.section>
      </section>
    </div>
  );
};

export default FormPage;
