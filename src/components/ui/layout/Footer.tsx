// src/components/layout/Footer.tsx
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe,
  MessageCircle,
  Camera,
  Play,
} from 'lucide-react';
import Container from '../Container';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <h3 className="text-xl font-bold">Exide Store</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for genuine Exide batteries. Quality products with 
              reliable service since 2010.
            </p>
            <div className="flex space-x-4">
              {/* Removed title props - they're not supported by Lucide icons */}
              <Globe className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <MessageCircle className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Camera className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Play className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Products', 'About Us', 'Contact', 'Warranty', 'Installation'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Battery Types</h4>
            <ul className="space-y-2">
              {[
                'Automotive Batteries', 
                'Inverter Batteries', 
                'Motorcycle Batteries', 
                'UPS Batteries', 
                'Solar Batteries', 
                'Truck Batteries'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="/products" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Battery Street, Industrial Area, Mumbai, Maharashtra 400001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">info@exidebattery.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">Mon-Sat: 9AM-7PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Exide Battery Store. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/sitemap" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
