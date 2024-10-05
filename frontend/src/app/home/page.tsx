import MainLayout from '@components/layouts/MainLayout';
import React from 'react';

import HomePage from './HomePage';

const page = () => {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
};

export default page;
