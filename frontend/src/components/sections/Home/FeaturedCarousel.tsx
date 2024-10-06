import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiArrowSmallLeft, HiArrowSmallRight } from 'react-icons/hi2';

const featuredItems = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1719937206094-8de79c912f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Featured',
    type: 'Event',
    title:
      'Helping communities combat air pollution through digital technologies',
    link: '/articles/helping-communities',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1719937050446-a121748d4ba0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'News',
    type: 'Update',
    title: 'Empowering local communities with air quality monitoring tools',
    link: '/articles/empowering-communities',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1726809448984-2e7f60cc6e97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Featured',
    type: 'Story',
    title: 'Making a difference: Our journey in environmental awareness',
    link: '/articles/our-journey',
  },
];

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredItems.length) % featuredItems.length,
    );
  };

  return (
    <section className="w-full bg-[#F0F4FA] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Carousel Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="w-full flex-shrink-0 flex flex-col md:flex-row gap-8 md:gap-16"
              >
                {/* Image Container */}
                <div className="md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="md:w-1/2 flex flex-col justify-center">
                  <div className="flex gap-3 mb-4">
                    <span className="text-blue-600 bg-white rounded-full px-2 py-1 text-sm font-medium">
                      {item.category}
                    </span>
                    <span className="text-gray-400 bg-white rounded-full px-2 py-1 text-sm font-medium">
                      {item.type}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {item.title}
                  </h2>

                  <Link
                    href={item.link}
                    className="text-blue-600 font-medium flex items-center group"
                  >
                    <span className="mr-2">Read article</span>
                    <HiArrowSmallRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-gray-400">
                / {String(featuredItems.length).padStart(2, '0')}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors"
                aria-label="Previous slide"
              >
                <HiArrowSmallLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors"
                aria-label="Next slide"
              >
                <HiArrowSmallRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
