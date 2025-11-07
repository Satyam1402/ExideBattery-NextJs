// src/app/page.tsx

import Hero from "@/components/ui/sections/Hero";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Temporary spacing to see the layout */}
      <div className="h-96 bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">More sections will be added here...</p>
      </div>
    </div>
  );
}
