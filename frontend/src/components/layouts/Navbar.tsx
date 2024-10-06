'use client';
import { CustomButton } from '@components/ui';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';
import { TbChevronDown, TbMenu } from 'react-icons/tb';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleExpandedMenu = (menuName: string) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
  };

  return (
    <nav className="w-full bg-white p-4">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" passHref>
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728138368/website/Logos/logo_rus4my.png"
              alt="AirQo"
              width={71}
              height={48}
              className="h-10 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Menu Button for Mobile and Tablet */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {menuOpen ? <RiCloseLargeFill size={24} /> : <TbMenu size={30} />}
          </button>
        </div>

        {/* Navigation Menu - Desktop */}
        <NavigationMenu className="hidden md:flex space-x-6 items-center">
          <NavigationMenuList className="space-x-3">
            {/* Dropdown Menu 1 */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow-lg rounded-md p-4">
                <NavigationMenuLink asChild>
                  <Link
                    href="/solution-1"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Solution 1
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/solution-2"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Solution 2
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Dropdown Menu 2 */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow-lg rounded-md p-4">
                <NavigationMenuLink asChild>
                  <Link
                    href="/solution-1"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Solution 1
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/solution-2"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Solution 2
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Dropdown Menu 3 */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow-lg rounded-md p-4">
                <NavigationMenuLink asChild>
                  <Link
                    href="/about-us"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/team"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Our Team
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Navigation Links */}
            <CustomButton
              onClick={() => alert('Primary Button Clicked')}
              className="text-blue-600 bg-blue-50 hover:bg-blue-50 rounded-none"
            >
              Get involved
            </CustomButton>

            <CustomButton
              onClick={() => alert('Primary Button Clicked')}
              className="rounded-none"
            >
              Explore data
            </CustomButton>
          </NavigationMenuList>

          {/* Viewport */}
          <NavigationMenuViewport />
        </NavigationMenu>

        {/* Navigation Menu - Mobile & Tablet */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 md:hidden z-40">
            {/* Products Section - Mobile */}
            <div className="mb-4">
              <button
                onClick={() => toggleExpandedMenu('products')}
                className="text-gray-800 font-medium w-full text-left focus:outline-none flex items-center justify-between"
              >
                Products
                <TbChevronDown
                  className={`ml-2 transition-transform duration-300 ${
                    expandedMenu === 'products' ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  expandedMenu === 'products' ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <Link
                  href="/solution-1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Solution 1
                </Link>
                <Link
                  href="/solution-2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Solution 2
                </Link>
              </div>
            </div>

            {/* Solutions Section - Mobile */}
            <div className="mb-4">
              <button
                onClick={() => toggleExpandedMenu('solutions')}
                className="text-gray-800 font-medium w-full text-left focus:outline-none flex items-center justify-between"
              >
                Solutions
                <TbChevronDown
                  className={`ml-2 transition-transform duration-300 ${
                    expandedMenu === 'solutions' ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  expandedMenu === 'solutions' ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <Link
                  href="/solution-1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Solution 1
                </Link>
                <Link
                  href="/solution-2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Solution 2
                </Link>
              </div>
            </div>

            {/* About Section - Mobile */}
            <div className="mb-4">
              <button
                onClick={() => toggleExpandedMenu('about')}
                className="text-gray-800 font-medium w-full text-left focus:outline-none flex items-center justify-between"
              >
                About
                <TbChevronDown
                  className={`ml-2 transition-transform duration-300 ${
                    expandedMenu === 'about' ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  expandedMenu === 'about' ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <Link
                  href="/about-us"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  About Us
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Our Team
                </Link>
              </div>
            </div>

            {/* Navigation Links - Mobile */}
            <CustomButton
              onClick={() => alert('Primary Button Clicked')}
              className="w-full text-blue-600 bg-blue-50 hover:bg-blue-50 rounded-none mb-2"
            >
              Get involved
            </CustomButton>

            <CustomButton
              onClick={() => alert('Primary Button Clicked')}
              className="w-full rounded-none"
            >
              Explore data
            </CustomButton>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
