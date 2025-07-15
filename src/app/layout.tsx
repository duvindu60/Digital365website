import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { MobileNav } from '@/components/MobileNav';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digital365 - Digital Transformation & IT Services',
  description:
    'Digital365 provides comprehensive digital transformation and IT services including cloud solutions, AI/ML, ERP implementation, and custom software development.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MobileNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
