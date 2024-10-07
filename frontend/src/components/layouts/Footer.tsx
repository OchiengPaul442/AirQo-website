'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';

const Footer = () => {
  return (
    <footer className="py-8 px-4 max-w-5xl mx-auto">
      {/* Top Section with Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Logo and Social Media */}
        <div className="flex flex-col space-y-4">
          <div>
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728138368/website/Logos/logo_rus4my.png"
              alt="AirQo"
              width={100}
              height={60}
            />
            <p className="text-gray-800 mt-4">
              Clean air for all <br /> African Cities.
            </p>
          </div>
          <div className="flex space-x-4 mt-6">
            <Link
              href="#"
              aria-label="Facebook"
              className="text-blue-600 bg-blue-50 rounded-full p-2 hover:bg-blue-200 transition-all"
            >
              <FaFacebookF size={14} />
            </Link>
            <Link
              href="#"
              aria-label="YouTube"
              className="text-blue-600 bg-blue-50 rounded-full p-2 hover:bg-blue-200 transition-all"
            >
              <FaYoutube size={14} />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-blue-600 bg-blue-50 rounded-full p-2 hover:bg-blue-200 transition-all"
            >
              <FaLinkedinIn size={14} />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="text-blue-600 bg-blue-50 rounded-full p-2 hover:bg-blue-200 transition-all"
            >
              <FaTwitter size={14} />
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex justify-between flex-wrap gap-8">
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-800 mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:underline">
                  Air Quality Network
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:underline">
                  Air Quality Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:underline">
                  AirQo Map
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-800 mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:underline">
                  For African cities
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:underline">
                  For Communities
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:underline">
                  For Research
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-800 mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:underline">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-4 lg:space-y-0">
        {/* Location Button with Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-xl text-gray-800 hover:bg-gray-200 transition-all">
              <IoLocationSharp size={20} color="#2563eb" />
              <span>Uganda</span>
              <FiChevronDown size={16} className="text-gray-600" />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Select Location</DialogTitle>
              <DialogDescription>
                Choose your location to get tailored content.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              {/* Location options or content can go here */}
              <p>Location selection will be available here.</p>
            </div>
          </DialogContent>
        </Dialog>

        {/* Monitors in Uganda */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <span className="bg-blue-600 text-white px-2 py-1 rounded">0</span>
            <span className="bg-blue-600 text-white px-2 py-1 rounded">1</span>
            <span className="bg-blue-600 text-white px-2 py-1 rounded">1</span>
            <span className="bg-blue-600 text-white px-2 py-1 rounded">3</span>
          </div>
          <p className="text-gray-800">Monitors in Uganda</p>
        </div>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        {/* Footer Bottom Links */}
        <div className="text-center lg:text-left text-gray-600">
          &copy; 2021 AirQo &nbsp;|&nbsp;{' '}
          <Link href="#" className="hover:underline">
            Terms of service
          </Link>
        </div>

        {/* Makerere University Attribution */}
        <div className="flex flex-col items-center lg:items-start">
          <Image
            src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728142537/website/Logos/MakName_xmsi0k.png"
            alt="Makerere University"
            width={237}
            height={38}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
