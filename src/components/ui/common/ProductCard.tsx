'use client';
import Link from 'next/link';
import { Battery as BatteryType } from '@/lib/types';
import { formatPrice, generateWhatsAppUrl } from '@/lib/utils';
import { Star, Shield, CheckCircle, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '../Card';
import Button from '../Button';
import Image from 'next/image';

interface ProductCardProps {
  battery: BatteryType;
}

const ProductCard = ({ battery }: ProductCardProps) => {
  const discountPercentage = battery.originalPrice
    ? Math.round(((battery.originalPrice - battery.price) / battery.originalPrice) * 100)
    : 0;

  return (
    <Card className="group flex flex-col overflow-hidden h-full">
      {/* Image Section */}
      <div className="relative w-full aspect-[5/3] bg-gray-100 overflow-hidden">
        <Image
          src={battery.image}
          alt={battery.name}
          fill
          sizes="(min-width: 1024px) 330px, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority
        />
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
            {discountPercentage}% OFF
          </div>
        )}
        {/* Stock Status */}
        <div className="absolute top-3 right-3 z-10">
          {battery.inStock ? (
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
              <CheckCircle className="w-3 h-3" />
              <span>In Stock</span>
            </div>
          ) : (
            <div className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Out of Stock
            </div>
          )}
        </div>
      </div>

      {/* Card Content */}
      <CardHeader className="pb-3">
        <div className="mb-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded capitalize">
            {battery.type}
          </span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {battery.name}
        </h3>
      </CardHeader>

      <CardContent className="flex-grow space-y-4">
        {/* Specifications Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-gray-500 text-xs">Capacity</p>
            <p className="font-semibold text-gray-900">{battery.capacity}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-gray-500 text-xs">Voltage</p>
            <p className="font-semibold text-gray-900">{battery.voltage}</p>
          </div>
        </div>

        {/* Warranty Badge */}
        <div className="flex items-center space-x-2 text-sm text-green-700 bg-green-50 p-2 rounded">
          <Shield className="w-4 h-4 flex-shrink-0" />
          <span className="font-medium">{battery.warranty} Warranty</span>
        </div>

        {/* Features List */}
        <div className="space-y-1">
          {battery.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
              <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>

        {/* Price Section */}
        <div className="space-y-1 pt-2">
          {battery.originalPrice && (
            <p className="text-sm text-gray-500 line-through">
              {formatPrice(battery.originalPrice)}
            </p>
          )}
          <div className="flex items-baseline space-x-2">
            <p className="text-2xl font-bold text-blue-600">
              {formatPrice(battery.price)}
            </p>
            <p className="text-sm text-gray-500">+ GST</p>
          </div>
        </div>
      </CardContent>

      {/* Card Footer */}
      <CardFooter className="gap-2 flex-col pt-4 border-t">
        <div className="grid grid-cols-2 gap-2 w-full">
          <Link href={`/products/${battery.id}`} className="w-full">
            <Button variant="outline" size="sm" className="w-full">
              View Details
            </Button>
          </Link>
          <Button
            size="sm"
            className="w-full flex items-center justify-center space-x-1"
            onClick={() => {
              const whatsappUrl = generateWhatsAppUrl('919876543210', battery.name);
              window.open(whatsappUrl, '_blank');
            }}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire</span>
          </Button>
        </div>

        <div className="flex items-center space-x-1 w-full justify-center pt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
          <span className="text-xs text-gray-500 ml-2">(4.8)</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
