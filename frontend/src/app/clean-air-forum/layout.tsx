import Footer from '@components/layouts/Footer';
import Navbar from '@components/layouts/Navbar';
import NewsLetter from '@components/layouts/NewsLetter';
import TabNavigation from '@components/sections/Forum/TabNavigation';
import React from 'react';

type CleanAirLayoutProps = {
  children: React.ReactNode;
};

const CleanAirLayout: React.FC<CleanAirLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50">
        <Navbar />
        {/* <TabNavigation /> */}
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-8">{children}</main>

      {/* Action Buttons Section */}
      <section className="my-16">
        <NewsLetter />
      </section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CleanAirLayout;
