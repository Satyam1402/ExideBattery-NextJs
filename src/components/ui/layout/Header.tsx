// src/components/layout/Header.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Container from '../Container';
import Button from '../Button';
import { Menu, X, Phone, Mail, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50" suppressHydrationWarning>
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2">
        <Container>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@exidebattery.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Free Delivery | 18 Month Warranty | Genuine Products</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Exide Store</h1>
              <p className="text-sm text-gray-600">Trusted Battery Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex items-center space-x-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Quote</span>
            </Button>
            
            <Button size="sm" className="hidden md:block">
              Call Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Button variant="outline" size="sm" className="flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  <span>Get Quote</span>
                </Button>
                <Button size="sm">Call Now</Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
