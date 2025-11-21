'use client'
import { useState, useMemo } from 'react';
import ProductCard from '../common/ProductCard';
import { batteries } from '@/lib/data';
import { Battery, Search } from 'lucide-react';
import Button from '../Button';
import Container from '../Container';

const Products = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Battery type filters
  const batteryTypes = [
    { id: 'all', label: 'All Batteries', icon: '🔋' },
    { id: 'automotive', label: 'Automotive', icon: '🚗' },
    { id: 'inverter', label: 'Inverter', icon: '💡' },
    { id: 'motorcycle', label: 'Motorcycle', icon: '🏍️' },
    { id: 'ups', label: 'UPS', icon: '💻' },
  ];

  // Filtered batteries based on type and search
  const filteredBatteries = useMemo(() => {
    return batteries.filter((battery) => {
      const matchesType = selectedType === 'all' || battery.type === selectedType;
      const matchesSearch = battery.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           battery.type.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [selectedType, searchQuery]);

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <Battery className="w-4 h-4" />
            <span>Our Products</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900">
            Browse <span className="text-blue-600">Exide Batteries</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect battery for your needs. All products come with genuine warranty 
            and professional installation service.
          </p>
        </div>

        {/* Filter & Search Section */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search batteries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {batteryTypes.map((type) => (
              <Button
                key={type.id}
                variant={selectedType === type.id ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedType(type.id)}
                className="flex items-center space-x-2"
              >
                <span>{type.icon}</span>
                <span>{type.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredBatteries.length}</span> {' '}
            {filteredBatteries.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Products Grid */}
        {filteredBatteries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBatteries.map((battery) => (
              <ProductCard key={battery.id} battery={battery} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg">
            <Battery className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No batteries found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search query
            </p>
            <Button onClick={() => { setSelectedType('all'); setSearchQuery(''); }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More Button (Optional) */}
        {filteredBatteries.length > 8 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Products;
