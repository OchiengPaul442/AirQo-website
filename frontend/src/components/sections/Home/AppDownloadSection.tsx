import Image from 'next/image';
import React from 'react';

type AppDownloadSectionProps = {
  appTitle: string;
  description: string;
  appStoreLink: string;
  googlePlayLink: string;
  imageUrl: string;
};

const AppDownloadSection: React.FC<AppDownloadSectionProps> = ({
  appTitle,
  description,
  appStoreLink,
  googlePlayLink,
  imageUrl,
}) => {
  return (
    <div className="w-full py-16 flex justify-center px-4">
      <section className="bg-[#f0f4fa] rounded-xl w-full h-full lg:max-h-[340px] lg:max-w-[1088px] flex flex-col items-center gap-12 p-6 lg:flex-row-reverse lg:items-center lg:py-16 lg:px-12 lg:gap-8">
        {/* App Preview Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative top-0 w-[260px] sm:w-[300px] md:w-[340px] h-[500px] sm:h-[600px] md:h-[700px] lg:h-[700px] z-10">
            <Image
              src={imageUrl}
              alt="App preview"
              layout="fill"
              objectFit="contain"
              priority
              loading="eager"
            />
          </div>
        </div>

        {/* App Download Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-3xl lg:text-[36px] font-bold text-blue-600">
            {appTitle}
          </h2>
          <p className="text-lg text-gray-600">{description}</p>
          <div className="flex justify-center lg:justify-start items-center gap-4 mt-4">
            <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728179257/website/photos/apple_vpcn6j.png"
                alt="Download on the App Store"
                width={140}
                height={45}
                className="w-full lg:w-[140px] h-[45px]"
              />
            </a>
            <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728179280/website/photos/google_play_vdmjrx.png"
                alt="Get it on Google Play"
                width={140}
                height={45}
                className="w-full lg:w-[140px] h-[45px]"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDownloadSection;
