import MainLayout from '@components/layouts/MainLayout';
import React from 'react';

type ProductsLayoutProps = {
  children: React.ReactNode;
};

const ProductsLayout: React.FC<ProductsLayoutProps> = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default ProductsLayout;
