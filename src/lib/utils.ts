// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Battery } from './types';

// Utility for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format price to Indian currency
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(price);
}

// Generate WhatsApp URL for inquiry
export function generateWhatsAppUrl(
  phone: string,
  batteryName: string
): string {
  const message = `Hi, I'm interested in ${batteryName}. Can you provide more details?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// Filter batteries by type
export function filterBatteriesByType(batteries: Battery[], type: string) {
  if (type === 'all') return batteries;
  return batteries.filter(battery => battery.type === type);
}
