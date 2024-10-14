import Image from 'next/image';
import React from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/';

// Define types for member data
interface Member {
  name: string;
  title: string;
  picture_url: string;

  picture: string;

  bio: string;
  descriptions: { description: string }[];
  twitter?: string; // Optional field
  linked_in?: string; // Optional field
}

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <Dialog>
      {/* Trigger for opening the dialog */}
      <DialogTrigger asChild>
        <div className="flex flex-col items-center space-y-4 cursor-pointer">
          {/* Image and hover effect */}
          <div className="w-[310px] h-[390px] overflow-hidden rounded-lg">
            <Image
              src={member.picture_url || member.picture || ''}
              alt={member.name}
              width={310}
              height={390}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Member Name and Title */}
          <div className="flex items-center w-full justify-between">
            <div className="text-left">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
            </div>

            {/* Optional Social Media Icons */}
            <div className="flex items-center space-x-2">
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition"
                >
                  <FaTwitter size={24} />
                </a>
              )}
              {member.linked_in && (
                <a
                  href={member.linked_in}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition"
                >
                  <FaLinkedinIn size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogTrigger>

      {/* Dialog Content Section */}
      <DialogContent className="max-w-[1024px] p-6">
        {/* Header Section */}
        <DialogHeader className="mb-4">
          <div className="flex flex-col items-start gap-4">
            <div>
              <DialogTitle className="text-2xl font-bold">
                {member.name}
              </DialogTitle>
              <p className="text-lg text-gray-500">{member.title}</p>
            </div>
            {/* Optional Social Media Icons in the Dialog */}
            <div className="flex items-center space-x-2">
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition"
                >
                  <FaTwitter size={24} />
                </a>
              )}
              {member.linked_in && (
                <a
                  href={member.linked_in}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition"
                >
                  <FaLinkedinIn size={24} />
                </a>
              )}
            </div>
          </div>
        </DialogHeader>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Image in Dialog */}
          <div className="flex-shrink-0 w-full lg:w-[300px] h-[300px] overflow-hidden rounded-lg">
            <Image
              src={member.picture_url || member.picture || ''}
              alt={member.name}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Descriptions */}
          <div className="flex-1">
            <DialogDescription className="leading-relaxed overflow-y-auto">
              {member.descriptions &&
                member.descriptions.map((desc, idx) => (
                  <p key={idx}>{desc.description}</p>
                ))}
              {member.bio && (
                <div dangerouslySetInnerHTML={{ __html: member.bio }}></div>
              )}
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MemberCard;
