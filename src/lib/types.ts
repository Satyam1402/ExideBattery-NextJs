// src/lib/types.ts
export interface Battery {
  id: string;
  name: string;
  type: 'automotive' | 'inverter' | 'motorcycle' | 'ups' | 'solar';
  capacity: string;
  voltage: string;
  warranty: string;
  price: number;
  originalPrice?: number;
  image: string;
  features: string[];
  specifications: {
    dimensions: string;
    weight: string;
    terminals: string;
    technology: string;
  };
  inStock: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  batteryType: string;
  avatar?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  batteryType: string;
  message: string;
}
