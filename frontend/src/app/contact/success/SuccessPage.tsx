'use client';
import { CustomButton } from '@components/ui';
import SuccessImage from '@public/assets/images/success/successImage.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SuccessPage: React.FC = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  // Countdown and redirect effect
  useEffect(() => {
    if (countdown === 0) {
      router.push('/');
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, router]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-85px)] bg-[#F9FAFB] p-8">
      {/* Success Image */}
      <div className="flex items-center justify-center mb-8">
        <Image
          src={SuccessImage}
          alt="Success"
          width={250}
          height={250}
          className="mb-4"
        />
      </div>

      {/* Success Message */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Thank you for reaching out!
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-lg">
        We have received your message and our team will get back to you as soon
        as possible.
      </p>

      {/* Back Button */}
      <CustomButton
        onClick={() => router.push('/')}
        className="bg-blue-600 text-white px-8 py-4 hover:bg-blue-700 transition-colors mb-4"
      >
        Back to Home
      </CustomButton>

      {/* Countdown Timer */}
      <p className="text-gray-500 text-sm">
        You will be redirected to the home page in {countdown} seconds.
      </p>
    </div>
  );
};

export default SuccessPage;
