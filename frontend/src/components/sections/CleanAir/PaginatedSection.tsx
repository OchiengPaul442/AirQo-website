import Image from 'next/image';
import { ReactNode, useState } from 'react';

import { Pagination } from '../../ui';

const logosPerPage = 8;

type PaginatedSectionProps = {
  title: ReactNode;
  description: ReactNode;
  logos: { src: string; alt: string }[];
  bgColor?: string; // Optional background color
};

const PaginatedSection: React.FC<PaginatedSectionProps> = ({
  title,
  description,
  logos,
  bgColor = '', // Default is no background color
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(logos.length / logosPerPage);

  const startIndex = (currentPage - 1) * logosPerPage;
  const paginatedLogos = logos.slice(startIndex, startIndex + logosPerPage);

  return (
    <section className={`${bgColor} py-14`}>
      <div className="max-w-5xl mx-auto px-4 lg:px-0 w-full">
        <div className="flex flex-col gap-8 items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>{title}</div>
            <div>{description}</div>
          </div>

          <div className="w-full flex justify-start">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full">
              {paginatedLogos.map((partner, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-full h-[144px] border border-gray-300 py-4"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={271}
                    height={144}
                    className="object-contain w-full h-full mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Conditional Pagination */}
          {logos.length > logosPerPage && (
            <div className="flex justify-center mt-8">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PaginatedSection;
