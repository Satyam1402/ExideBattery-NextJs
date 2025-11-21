
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          About Exide Store
        </h1>
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            Exide Store is a trusted supplier of genuine Exide batteries for automotive and inverters across Delhi and NCR.
            With over 10 years of expertise, we deliver premium products and real support to homes, shops, and businesses.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Our Promise</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Original warranty-backed Exide batteries</li>
            <li>Free home delivery and professional installation</li>
            <li>Flexible payment options—including UPI, QR, cash, or card</li>
            <li>Quick response for all inquiries and warranty claims</li>
            <li>100% satisfaction from order to support</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Why Customers Choose Us</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Expert advice on battery selection</li>
            <li>Transparent, no-hidden-cost pricing</li>
            <li>Top ratings from local vehicle owners and businesses</li>
            <li>Long-term partnership with Exide, India’s leading battery brand</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
