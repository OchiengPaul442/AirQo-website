import MainLayout from '@components/layouts/MainLayout';
import React from 'react';

type SolutionsLayoutLayoutProps = {
  children: React.ReactNode;
};

const SolutionsLayout: React.FC<SolutionsLayoutLayoutProps> = ({
  children,
}) => {
  return <MainLayout>{children}</MainLayout>;
};

export default SolutionsLayout;
