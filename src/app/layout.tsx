// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/ui/layout/Header';
import Footer from '@/components/ui/layout/Footer';
// import ChatBot from '@/components/ui/ChatBot';

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
        {/* <Script src="https://chatlyfy.com/widget/chatlyfy-widget-loader.js" data-bot-id="9dd158be-5630-42d4-8f93-96501eac2649"/> */}
        <script src="https://chatlyfy.com/widget/chatlyfy-widget-loader.js" data-bot-id="aa80945c-2ebc-4bb3-97ac-9c40b5795b92"></script>
      </body>
    </html>
  );
}
