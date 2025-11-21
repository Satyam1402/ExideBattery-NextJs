// src/lib/data.ts
import { Battery, Testimonial } from './types';

export const batteries: Battery[] = [
  {
    id: 'exide-fmi0-mred45',
    name: 'Exide FMI0-MRED45',
    type: 'automotive',
    capacity: '45Ah',
    voltage: '12V',
    warranty: '18 months',
    price: 4500,
    originalPrice: 5200,
    image: '/images/batteries/automotive-45ah.jpg',
    features: [
      'Maintenance Free',
      'Vibration Resistant',
      'Fast Charging',
      'Long Life'
    ],
    specifications: {
      dimensions: '238 x 129 x 227mm',
      weight: '11.8 kg',
      terminals: 'Top Terminal',
      technology: 'AGM'
    },
    inStock: true
  },
  {
    id: 'exide-inva-tubular-150ah',
    name: 'Exide Inva Tubular IT500',
    type: 'inverter',
    capacity: '150Ah',
    voltage: '12V',
    warranty: '60 months',
    price: 12500,
    originalPrice: 14000,
    image: '/images/batteries/inverter-150ah.jpg',
    features: [
      'Deep Cycle Technology',
      'Tubular Plates',
      'Water Level Indicator',
      'High Backup'
    ],
    specifications: {
      dimensions: '507 x 191 x 367mm',
      weight: '47 kg',
      terminals: 'Side Terminal',
      technology: 'Tubular'
    },
    inStock: true
  },
  // Solar Battery Example
  {
    id: 'exide-solar-100ah',
    name: 'Exide Solar 100Ah',
    type: 'solar',
    capacity: '100Ah',
    voltage: '12V',
    warranty: '36 months',
    price: 9500,
    originalPrice: 11000,
    image: '/images/batteries/solar-100ah.jpg',
    features: [
      'Suitable for Solar Power Systems',
      'Long Deep Discharge Life',
      'Eco-Friendly Technology',
      'Low Water Loss'
    ],
    specifications: {
      dimensions: '410 x 176 x 233mm',
      weight: '28 kg',
      terminals: 'Top Terminal',
      technology: 'Tubular'
    },
    inStock: true
  },
  // Motorcycle Battery Example
  {
    id: 'exide-bike-9ah',
    name: 'Exide Xplore 9Ah',
    type: 'motorcycle',
    capacity: '9Ah',
    voltage: '12V',
    warranty: '24 months',
    price: 1500,
    originalPrice: 1800,
    image: '/images/batteries/motorcycle-9ah.jpg',
    features: [
      'Maintenance Free',
      'High Cranking Power',
      'Leak-Proof Design',
      'Vibration Resistant'
    ],
    specifications: {
      dimensions: '151 x 87 x 107mm',
      weight: '2.7 kg',
      terminals: 'Top Terminal',
      technology: 'VRLA'
    },
    inStock: true
  }
  // Add more batteries as needed
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    review: 'Excellent battery life! My Exide automotive battery has been running for 3 years without any issues.',
    batteryType: 'Automotive Battery'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    location: 'Delhi, NCR',
    rating: 5,
    review: 'Great inverter battery! Provides long backup during power cuts. Highly recommended.',
    batteryType: 'Inverter Battery'
  }
];
