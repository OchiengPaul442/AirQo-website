import Link from 'next/link';
import React from 'react';

const ActionButtons = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl mx-auto">
      {/* Card 1 */}
      <Link href="#">
        <div className="flex flex-col justify-between bg-blue-600 text-white md:rounded-xl p-8 w-full cursor-pointer transform transition-transform duration-300 hover:scale-105 active:scale-95 focus:scale-105 focus:outline-none">
          <div>
            <h3 className="text-2xl font-medium mb-4">
              Explore our digital tools. Learn about the quality of air around
              you.
            </h3>
          </div>
          <p className="mt-4 text-lg hover:underline">Explore data →</p>
        </div>
      </Link>

      {/* Card 2 */}
      <Link href="#">
        <div className="flex flex-col justify-between bg-blue-100 text-blue-600 md:rounded-xl p-8 w-full cursor-pointer transform transition-transform duration-300 hover:scale-105 active:scale-95 focus:scale-105 focus:outline-none">
          <div>
            <h3 className="text-2xl font-medium mb-4">
              Get involved. Learn about ways you can support our vision.
            </h3>
          </div>
          <p className="mt-4 text-lg hover:underline">Get Involved →</p>
        </div>
      </Link>
    </div>
  );
};

export default ActionButtons;
