// src/components/sections/Gallery.tsx

import Image from "next/image";

const galleryImages = [
  {
    src: "/images/batteries/automotive-45ah.jpg",
    alt: "Automotive Battery Installation"
  },
  {
    src: "/images/batteries/inverter-150ah.jpg",
    alt: "Inverter Battery Stock"
  },
  {
    src: "/images/batteries/inverter-150ah.jpg",
    alt: "Inverter Battery Stock"
  }
  // Add more images as needed!
];

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Our Installations & Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-3 flex flex-col items-center">
             <Image
                src={img.src}
                alt={img.alt}
                width={350}           // Set to your intended display width
                height={180}          // Set to your intended display height
                className="rounded-lg w-full h-44 object-cover mb-3"
                />

              <div className="text-sm text-gray-700 font-medium text-center">{img.alt}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
