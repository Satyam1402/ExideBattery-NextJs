// src/components/sections/Hero.tsx
'use client';
import { useState } from 'react';
import { Star, Shield, Truck, Phone, ArrowRight, Battery } from 'lucide-react';
import Button from '../Button';
import { Card, CardContent } from '../Card';
import Container from '../Container'; // ✅ Must be your own wrapper

const Hero = () => {
  const [activeTab, setActiveTab] = useState('automotive');

  const batteryTypes = [
    { id: 'automotive', label: 'Car Batteries', icon: '🚗' },
    { id: 'inverter', label: 'Inverter Batteries', icon: '🔋' },
    { id: 'motorcycle', label: 'Bike Batteries', icon: '🏍️' },
    { id: 'ups', label: 'UPS Batteries', icon: '💻' },
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: '18 Month Warranty',
      description: 'Comprehensive warranty coverage'
    },
    {
      icon: <Truck className="w-6 h-6 text-green-600" />,
      title: 'Free Installation',
      description: 'Professional setup at your location'
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-600" />,
      title: 'Genuine Products',
      description: '100% authentic Exide batteries'
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Battery className="w-4 h-4" />
                <span>Trusted Since 2010</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Premium 
                <span className="text-blue-600"> Exide</span>
                <br />
                Battery Store
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Get genuine Exide batteries for all your power needs. From automotive to 
                inverter batteries, we provide quality products with warranty and 
                professional installation service.
              </p>
            </div>

            {/* Battery Type Selector */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Choose Battery Type:</h3>
              <div className="grid grid-cols-2 gap-3">
                {batteryTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveTab(type.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                      activeTab === type.id
                        ? 'border-blue-500 bg-blue-50 text-blue-900'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{type.icon}</span>
                      <span className="font-medium text-sm">{type.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call for Quote</span>
              </Button>
              <Button variant="outline" size="lg" className="flex items-center space-x-2">
                <span>View Products</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">500+ Happy Customers</span>
              </div>
            </div>
          </div>

          {/* Right Content - Features & Image */}
          <div className="space-y-8">
            {/* Battery Image Placeholder */}
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Battery className="w-24 h-24 text-blue-600 mx-auto" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-blue-900">Exide Batteries</h3>
                  <p className="text-blue-700">Reliable Power Solutions</p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4">
                <Card className="p-4 bg-white shadow-lg">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">18</p>
                    <p className="text-xs text-gray-600">Month Warranty</p>
                  </div>
                </Card>
              </div>
              
              <div className="absolute -bottom-4 -left-4">
                <Card className="p-4 bg-white shadow-lg">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">500+</p>
                    <p className="text-xs text-gray-600">Installations</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
