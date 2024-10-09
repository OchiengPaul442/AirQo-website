'use client';
import MainLayout from '@components/layouts/MainLayout';
import TabSection from '@components/sections/legal/Tabsection';
import React, { useEffect } from 'react';

type LegalPageLayoutProps = {
  children: React.ReactNode;
};

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ children }) => {
  useEffect(() => {
    // Add smooth scrolling behavior
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <MainLayout>
      <TabSection />
      <main className="legal-page-content">{children}</main>
    </MainLayout>
  );
};

export default LegalPageLayout;
