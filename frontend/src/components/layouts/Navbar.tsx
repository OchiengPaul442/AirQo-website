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

// Type definitions
type MenuItem = {
  title: string;
  description?: string;
  href: string;
};

type MenuItems = {
  [key: string]: MenuItem[];
};

// Data for menu items
const menuItems: MenuItems = {
  Products: [
    {
      title: 'Binos Monitor',
      description: 'Built in Africa for African cities',
      href: '/products/monitor',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Air quality analytics for African cities',
      href: '/products/analytics',
    },
    {
      title: 'Mobile App',
      description: 'Discover the quality of air around you',
      href: '/products/mobile-app',
    },
    {
      title: 'Air Quality API',
      description: 'Access raw and calibrated data',
      href: '/products/api',
    },
    {
      title: 'AirQalibrate',
      description: 'Calibrate your low-cost sensor data',
      href: '/products/calibrate',
    },
    {
      title: 'Air Quality Reporting Tool',
      description: 'Generate and download reports',
      href: 'https://platform.airqo.net/reports/login',
    },
  ],
  Solutions: [
    {
      title: 'For African Cities',
      description: 'Advancing air quality management in African Cities',
      href: '/solutions/african-cities',
    },
    {
      title: 'For Communities',
      description: 'Empowering communities with air quality information',
      href: '/solutions/communities',
    },
    {
      title: 'For Research',
      description: 'Free access to air quality analytics',
      href: '/solutions/research',
    },
  ],
  About: [
    { title: 'About Us', href: '/about-us' },
    { title: 'Resources', href: '/resources' },
    { title: 'Careers', href: '/careers' },
    { title: 'Contact Us', href: '/contact-us' },
    { title: 'Events', href: '/events' },
    { title: 'Press', href: '/press' },
    { title: 'CLEAN-Air Forum', href: '/clean-air-forum' },
  ],
};

// Helper component for rendering dropdown items
interface DropdownMenuContentProps {
  title: string;
  items: MenuItem[];
}

const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
  title,
  items,
}) => (
  <NavigationMenuContent className="bg-white shadow-lg md:w-[400px] lg:w-[600px] rounded-md p-4">
    <div className="text-gray-500 mb-4">{title}</div>
    <div className="flex gap-8">
      {items
        .reduce<MenuItem[][]>((acc, item, idx) => {
          const colIdx = Math.floor(idx / Math.ceil(items.length / 2));
          if (!acc[colIdx]) acc[colIdx] = [];
          acc[colIdx].push(item);
          return acc;
        }, [])
        .map((colItems, index) => (
          <ul key={index} className="flex-1 space-y-3">
            {colItems.map((item) => (
              <li key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className="block p-2 rounded-xl hover:bg-blue-50 transition"
                  >
                    <div className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </div>
                    {item.description && (
                      <div className="text-sm text-gray-600">
                        {item.description}
                      </div>
                    )}
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        ))}
    </div>
  </NavigationMenuContent>
);

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
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
            {Object.entries(menuItems).map(([title, items]) => (
              <NavigationMenuItem key={title}>
                <NavigationMenuTrigger className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
                  {title}
                </NavigationMenuTrigger>
                <DropdownMenuContent title={title} items={items} />
              </NavigationMenuItem>
            ))}

            {/* Navigation Links */}
            <CustomButton
              onClick={() => alert('Primary Button Clicked')}
              className="text-blue-600 bg-blue-50 hover:bg-blue-100 transition rounded-none"
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
            {Object.entries(menuItems).map(([title, items]) => (
              <div key={title} className="mb-4">
                <button
                  onClick={() => toggleExpandedMenu(title)}
                  className="text-gray-800 font-medium w-full text-left focus:outline-none flex items-center justify-between"
                >
                  {title}
                  <TbChevronDown
                    className={`ml-2 transition-transform duration-300 ${expandedMenu === title ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    expandedMenu === title ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition rounded"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Navigation Links - Mobile */}
            <CustomButton
              onClick={() => alert('Primary Button Clicked')}
              className="w-full text-blue-600 bg-blue-50 hover:bg-blue-100 transition rounded-none mb-2"
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
