'use client';
import { useState } from 'react';

// Contact Form as a separate component
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border space-y-4 w-full">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full border rounded px-4 py-2"
        required
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full border rounded px-4 py-2"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Question or Inquiry..."
        rows={4}
        className="w-full border rounded px-4 py-2"
        required
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        disabled={submitted}
      >
        {submitted ? 'Message Sent!' : 'Send Inquiry'}
      </button>
      {submitted && (
        <p className="text-green-600 text-center mt-2">Thank you! We’ll contact you soon.</p>
      )}
    </form>
  );
}

// Main Contact Page
export default function ContactPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Contact Us</h2>
        {/* Contact Form + Map in two columns */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="flex-1">
            <ContactForm />
          </div>
          <div className="flex-1 w-full bg-white rounded-xl shadow-md overflow-hidden min-h-[340px] flex items-center justify-center">
            <iframe
              title="Store Location"
              src="https://maps.google.com/maps?q=Delhi%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="340"
              frameBorder="0"
              className="rounded-xl w-full"
              style={{ minHeight: '340px' }}
              allowFullScreen
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-md px-6 py-8">
          <h2 className="text-lg font-semibold mb-4 text-blue-700">Frequently Asked Questions</h2>
          <ul className="space-y-5 text-gray-700">
            <li>
              <b>Q:</b> How long is the battery warranty?<br />
              <b>A:</b> All Exide batteries come with 18–60 month warranty.
            </li>
            <li>
              <b>Q:</b> Do you provide installation?<br />
              <b>A:</b> Yes, free installation within city limits.
            </li>
            <li>
              <b>Q:</b> Can I pay via UPI/QR or card?<br />
              <b>A:</b> Yes, all digital and cash payments are accepted.
            </li>
            <li>
              <b>Q:</b> How can I claim warranty?<br />
              <b>A:</b> Contact support with your original invoice for claim procedure.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
