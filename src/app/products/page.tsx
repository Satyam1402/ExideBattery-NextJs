
import { batteries } from "@/lib/data";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default function ProductsList() {
  return (
    <main className="min-h-screen bg-white px-4 py-12">
      <h1 className="text-2xl font-bold mb-8 text-center">Exide Battery Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {batteries.map((battery) => (
          <Link key={battery.id} href={`/products/${battery.id}`}>
            <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">{battery.name}</h3>
              <div className="text-sm text-gray-600 mb-2">{battery.type}</div>
              <div className="text-xs text-gray-500">
                {battery.capacity} • {battery.voltage} • {battery.warranty}
              </div>
              <div className="mt-2 text-lg font-bold text-blue-600">
                ₹{battery.price}
              </div>
              <div className="mt-2 text-xs text-gray-400">
                Click for details &rarr;
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
