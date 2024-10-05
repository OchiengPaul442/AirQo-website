import React from 'react';

import ActionButtons from './ActionButtons';
import Footer from './Footer';
import Highlight from './Highlight';
import Navbar from './Navbar';
import NewsLetter from './NewsLetter';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8">
        <div className="max-w-screen-xl mx-auto px-4">{children}</div>

        {/* Highlight Section */}
        <section className="my-8">
          <Highlight />
        </section>

        {/* Action Buttons Section */}
        <section className="my-8">
          <ActionButtons />
        </section>

        {/* Newsletter Section */}
        <section className="my-16">
          <NewsLetter />
        </section>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
