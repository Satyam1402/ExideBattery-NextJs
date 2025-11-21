export const metadata = {
  title: "Exide Battery Store – Delhi NCR | Genuine Products, Free Delivery",
  description: "Buy genuine Exide automotive and inverter batteries with 18-month warranty, free installation, and cashless payments in Delhi and NCR.",
  keywords: [
    "Exide Battery", "Automotive Batteries", "Inverter Batteries", 
    "Battery Store Delhi", "Installation", "Warranty", "NCR"
  ],
  openGraph: {
    title: "Exide Battery Store | Delhi NCR",
    description: "Genuine Exide batteries, expert support & quick delivery.",
    url: "https://yourdomain.com",
    siteName: "Exide Battery Store",
    images: [{ url: "https://yourdomain.com/images/logo.png", width: 600, height: 320, alt: "Exide Battery Store" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Exide Battery Store",
    description: "Shop Exide batteries with installation and warranty.",
    images: ["https://yourdomain.com/images/logo.png"]
  }
};

import ContactForm from "@/components/ui/sections/ContactForm";
import Gallery from "@/components/ui/sections/Gallery";
import Hero from "@/components/ui/sections/Hero";
import Products from "@/components/ui/sections/Products";
import Testimonials from "@/components/ui/sections/Testimonials";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Products />
      <Gallery />
      <Testimonials />
      <ContactForm />
      {/* Temporary spacing to see the layout */}
      <div className="h-96 bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">More sections will be added here...</p>
      </div>
    </div>
  );
}
