import Navbar from '@components/layouts/Navbar';
import React from 'react';

type PartnersLayoutProps = {
  children: React.ReactNode;
};

const PartnersLayout: React.FC<PartnersLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default PartnersLayout;
