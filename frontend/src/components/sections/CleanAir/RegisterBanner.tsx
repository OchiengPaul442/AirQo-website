'use client';
import { CustomButton } from '@components/ui';
import Image from 'next/image';

const RegisterBanner = () => {
  return (
    <section className="max-w-5xl mx-auto w-full px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center bg-card-custom-gradient py-12 px-12 gap-6 rounded-lg">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            className="rounded-lg object-cover"
            src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132392/website/cleanAirForum/images/team_vrlpd0.webp"
            alt="AirQo Team"
            width={255}
            height={230}
            objectFit="cover"
          />
        </div>

        {/* Text Section */}
        <div className="ml-6">
          <p className="text-[28px] leading-[42px] font-medium">
            Individuals actively involved in air quality work in Africa are
            welcome to join the CLEAN-Air Africa Network.
          </p>

          {/* Button */}
          <CustomButton
            onClick={() => {}}
            className="mt-4 inline-block text-white"
          >
            Register here →
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default RegisterBanner;
