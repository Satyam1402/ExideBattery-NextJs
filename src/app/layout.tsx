// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
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
        
        {/* Chatlyfy AI Chat Widget */}
        <Script
          id="chatbot-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.chatbotConfig = {
                botId: 'ff8022b7-1c5b-49f8-a169-c85eaeea8c25'
              };
            `,
          }}
        />
        <Script
          src="https://chatlyfy.com/widget/chatbot-widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
