import React from 'react';

import ActionButtons from './ActionButtons';
import Footer from './Footer';
import Highlight from './Highlight';
import Navbar from './Navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <div>
        <Highlight />
        <ActionButtons />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
