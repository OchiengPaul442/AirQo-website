import Footer from '@components/layouts/Footer';
import Navbar from '@components/layouts/Navbar';
import NewsLetter from '@components/layouts/NewsLetter';
import BannerSection from '@components/sections/Forum/BannerSection';
import { ForumDataProvider } from '@context/ForumDataContext';
import { getForumEvents } from '@services/apiService';
import React, { ReactNode } from 'react';

type CleanAirLayoutProps = {
  children: ReactNode;
};

// Fetch data server-side in the layout (App Router)
export default async function CleanAirLayout({
  children,
}: CleanAirLayoutProps) {
  const res = await getForumEvents();
  const data = res ? res[0] : null;

  return (
    <ForumDataProvider data={data}>
      <div className="min-h-screen w-full flex flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        {/* Pass the fetched data to BannerSection */}
        <BannerSection data={data} />

        {/* Main Content */}
        <main className="flex-1 pb-8">{children}</main>

        {/* Action Buttons Section */}
        <section className="my-16">
          <NewsLetter />
        </section>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </ForumDataProvider>
  );
}
