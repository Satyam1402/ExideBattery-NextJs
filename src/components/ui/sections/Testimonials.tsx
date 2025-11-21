'use client';
import { testimonials } from '@/lib/data';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Customer Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((review) => (
            <div key={review.id} className="bg-gray-50 p-6 rounded-xl shadow-sm border">
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-block w-8 h-8 rounded-full bg-blue-200 text-center font-bold text-blue-800 flex items-center justify-center">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
                <span className="ml-auto bg-blue-100 px-2 py-0.5 rounded text-xs text-blue-700 font-medium">
                  {review.batteryType}
                </span>
              </div>
              <div className="flex items-center mb-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
