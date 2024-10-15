'use client';
import '@/Styles/globals.scss';

import localFont from 'next/font/local';
import { useEffect, useState } from 'react';

import EngagementDialog from '@/components/dialogs/EngagementDialog';
import { ReduxDataProvider } from '@/context/ReduxDataProvider';

import MaintenancePage from './MaintenancePage';

const interFont = localFont({
  src: [
    {
      path: '../../public/fonts/Inter-VariableFont_opsz,wght.ttf',
      style: 'normal',
      weight: '100 900',
    },
    {
      path: '../../public/fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
      style: 'italic',
      weight: '100 900',
    },
  ],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Fetch maintenance status from the API
    const fetchMaintenanceStatus = async () => {
      try {
        const response = await fetch('/api/maintenance');
        const data = await response.json();
        setIsActive(data.isActive);
      } catch (error) {
        console.error('Failed to fetch maintenance status:', error);
      }
    };

    fetchMaintenanceStatus();
  }, []);

  if (isActive) {
    return (
      <html lang="en">
        <body className={`${interFont.variable} antialiased`}>
          <MaintenancePage />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased`}>
        <ReduxDataProvider>
          <main>{children}</main>
          <EngagementDialog />
        </ReduxDataProvider>
      </body>
    </html>
  );
}
