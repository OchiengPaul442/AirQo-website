import Navbar from '@components/layouts/Navbar';
import React from 'react';

type ContactLayoutProps = {
  children: React.ReactNode;
};

const ContactLayout: React.FC<ContactLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col overflow-hidden">
      <div className="w-full border-b border-gray-200 sticky top-0 z-50">
        <Navbar />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default ContactLayout;
