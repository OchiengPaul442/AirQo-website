import '@/Styles/globals.scss';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import EngagementDialog from '@/components/dialogs/EngagementDialog';
import { ReduxDataProvider } from '@/context/ReduxDataProvider';

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

export const metadata: Metadata = {
  title: 'AirQo',
  description: 'Air quality monitoring',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
