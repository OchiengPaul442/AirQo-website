import MainLayout from '@components/layouts/MainLayout';
import React from 'react';

type AboutLayoutProps = {
  children: React.ReactNode;
};

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default AboutLayout;
