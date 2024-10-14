'use client';

import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useDispatch, useSelector } from '@/hooks';
import { closeModal } from '@/store/slices/modalSlice';

import { CustomButton } from '../ui';

interface EngagementOption {
  title: string;
  description: string;
  icon: string;
}

const options: EngagementOption[] = [
  {
    title: "I'm a Partner.",
    description: "Interested in supporting AirQo's vision",
    icon: '🔗',
  },
  {
    title: "I'm a Policymaker.",
    description: 'Interested in air quality information',
    icon: '📜',
  },
  {
    title: "I'm a Community Champion.",
    description: 'Interested in raising awareness about air pollution.',
    icon: '🌍',
  },
  {
    title: "I'm a Researcher.",
    description: 'Interested in Air Quality data and analytics',
    icon: '📊',
  },
  {
    title: "I'm a Developer.",
    description: 'Interested in air quality data API',
    icon: '💻',
  },
];

const EngagementDialog = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.modal.isOpen);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    termsAccepted: false,
  });

  const handleClose = () => {
    dispatch(closeModal());
    setActiveSection(null);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      termsAccepted: false,
    }); // Reset form
  };

  const handleItemClick = (title: string) => {
    setActiveSection(title);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.termsAccepted) {
      // Handle the form data here (e.g., send it to an API or backend)
      console.log('Form submitted with data:', formData);

      // Reset form and close modal
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        termsAccepted: false,
      });
      setActiveSection(null);
      dispatch(closeModal());
    } else {
      alert('You must accept the terms and conditions.');
    }
  };

  const renderForm = () => (
    <div className="w-full flex flex-col justify-center gap-6 h-full p-6">
      <button
        onClick={() => setActiveSection(null)}
        className="mb-4 text-blue-600 hover:text-blue-800 transition-colors flex items-center"
      >
        <FiArrowLeft className="mr-2" />
        Back
      </button>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start justify-center w-full gap-6"
      >
        {/* First Name */}
        <div className="flex flex-col w-full">
          <label htmlFor="firstName" className="mb-2 text-gray-600">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="p-2 border-b border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-[#F9FAFB]"
            required
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col w-full">
          <label htmlFor="lastName" className="mb-2 text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="p-2 border-b border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-[#F9FAFB]"
            required
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col w-full">
          <label htmlFor="email" className="mb-2 text-gray-600">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="p-2 border-b border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-[#F9FAFB]"
            required
          />
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start text-sm">
          <input
            type="checkbox"
            id="terms"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleInputChange}
            className="mr-2 relative top-[5px]"
            required
          />
          <label htmlFor="terms" className="text-gray-600">
            I agree to the{' '}
            <a
              href="/terms"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="/privacy"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Privacy Policy
            </a>
          </label>
        </div>

        <CustomButton
          type="submit"
          className="bg-blue-600 text-white px-6 py-4 hover:bg-blue-700 transition-colors"
        >
          Send
        </CustomButton>
      </form>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-5xl max-h-full mx-auto p-0 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-6 h-full bg-gray-100 p-16">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <a href="#" className="text-gray-500">
                    Home
                  </a>
                </li>
                <li>
                  <span className="text-gray-500">{'>'}</span>
                </li>
                <li>
                  <a href="#" className="text-gray-900 font-medium">
                    Get Involved
                  </a>
                </li>
              </ol>
            </nav>
            <div className="space-y-2 lg:w-[65%]">
              <h2 className="text-2xl font-bold text-gray-900">
                How would you like to engage with us?
              </h2>
              <p className="text-gray-500">
                Access real-time and historic air quality information across
                Africa through our easy-to-use air quality analytics dashboard.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 h-full p-16">
            {!activeSection
              ? options.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleItemClick(item.title)}
                    className="flex items-center p-4 bg-white border rounded-md shadow-sm hover:bg-blue-50 cursor-pointer transition-all"
                  >
                    <div className="flex-shrink-0 p-2 bg-blue-50 rounded-full text-blue-600 text-2xl">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))
              : renderForm()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EngagementDialog;
