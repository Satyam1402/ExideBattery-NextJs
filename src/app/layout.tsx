// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/layout/Header';
import Footer from '@/components/ui/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Exide Battery Store - Genuine Batteries with Warranty',
  description: 'Buy genuine Exide batteries for automotive, inverter, motorcycle, and UPS applications. 18-month warranty, free installation, and reliable service.',
  keywords: 'exide battery, automotive battery, inverter battery, motorcycle battery, UPS battery, battery store',
  authors: [{ name: 'Exide Battery Store' }],
  openGraph: {
    title: 'Exide Battery Store - Trusted Battery Solutions',
    description: 'Quality Exide batteries with warranty and professional installation service',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
