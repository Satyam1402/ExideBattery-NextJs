import { batteries } from "@/lib/data";
import { formatPrice, generateWhatsAppUrl } from "@/lib/utils";
import { Shield, Star, CheckCircle, Truck, Zap, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

export default function ProductDetail({}: { params: { slug: string } }) {
  // Find battery by slug
  const battery = batteries[0]

  if (!battery) {
    return null;
  }

  console.log('battery',battery);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6">
          <Link
            href="/products"
            className="inline-flex items-center text-blue-600 hover:underline text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Products
          </Link>
        </nav>

        {/* Product Summary Card */}
        <Card className="flex flex-col md:flex-row p-6 gap-8">
          {/* Left: Image/Badge */}
          <div className="flex-shrink-0 w-full md:w-60 flex flex-col items-center">
            <div className="rounded-2xl bg-blue-100 p-6 mb-4">
              <Image
                src={batteries[0].image}
                alt={batteries[0].image}
                width={180}
                height={120}
                className="object-contain mx-auto"
                // priority
              />
            </div>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded capitalize mb-2">
              {battery.type}
            </span>
            <span className="text-xs text-gray-400 pb-2">
              {battery.inStock ? "In Stock" : "Out of Stock"}
            </span>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          {/* Right: Main Details */}
          <div className="flex-1 flex flex-col justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {battery.name}
              </h1>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="inline-flex items-center gap-1 bg-green-50 text-green-800 rounded px-2 py-0.5 text-xs font-semibold">
                  <Shield className="w-4 h-4" />
                  {battery.warranty} warranty
                </span>
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 rounded px-2 py-0.5 text-xs font-medium">
                  <Zap className="w-4 h-4" />
                  {battery.capacity}
                </span>
                <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 rounded px-2 py-0.5 text-xs font-medium">
                  {battery.voltage} voltage
                </span>
              </div>
              <p className="text-gray-700 mb-2">
                {battery.features.join(", ")}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center md:items-end">
              <span className="text-3xl font-bold text-blue-600">
                {formatPrice(battery.price)}{" "}
                <span className="text-xs text-gray-600">+ GST</span>
              </span>
              {battery.originalPrice && (
                <span className="text-base text-gray-400 line-through">
                  {formatPrice(battery.originalPrice)}
                </span>
              )}

              {/* WhatsApp Inquiry Button */}
              <a
                href={generateWhatsAppUrl("919876543210", battery.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-semibold transition"
              >
                <Truck className="w-5 h-5 mr-2" />
                Inquire/Order via WhatsApp
              </a>
            </div>
          </div>
        </Card>

        {/* Specs Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="font-semibold mb-4 text-lg text-gray-900">
              Specifications
            </h2>
            <ul className="text-sm space-y-2">
              <li>
                <strong>Dimensions:</strong> {battery.specifications.dimensions}
              </li>
              <li>
                <strong>Weight:</strong> {battery.specifications.weight}
              </li>
              <li>
                <strong>Terminals:</strong> {battery.specifications.terminals}
              </li>
              <li>
                <strong>Technology:</strong> {battery.specifications.technology}
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <h2 className="font-semibold mb-4 text-lg text-gray-900">
              Features
            </h2>
            <ul className="text-sm space-y-2">
              {battery.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </main>
  );
}
