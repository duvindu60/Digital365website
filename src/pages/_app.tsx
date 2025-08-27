// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '@/styles/globals.css'; // Make sure to move `globals.css` to `src/styles/` or update the path

import { Navbar } from '@/components/Navbar';
import { MobileNav } from '@/components/MobileNav';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Navbar />
      <MobileNav />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
