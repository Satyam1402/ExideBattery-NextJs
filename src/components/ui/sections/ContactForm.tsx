'use client';
import { useState } from 'react';

export default function ContactForm() {
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Contact Us / Inquiry</h2>
        {/* Responsive Flex Container */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Contact Form (Left) */}
          <div className="flex-1">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-xl shadow-sm border space-y-4"
            >
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
                <p className="text-green-600 text-center mt-4">
                  Thank you! We’ll contact you soon.
                </p>
              )}
            </form>
          </div>
          {/* Map (Right) */}
          <div className="flex-1 w-full bg-white rounded-xl shadow-sm border overflow-hidden min-h-[320px] flex items-center justify-center">
            <iframe
              title="Store Location"
              src="https://maps.google.com/maps?q=Delhi%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="320"
              frameBorder="0"
              className="rounded-xl w-full"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
