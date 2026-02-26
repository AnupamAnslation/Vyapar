"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-white pt-15 pb-20">

      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Get In Touch
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Let us handle your compliance while you focus on growing your business.
          </p>
        </div>
      </section>


      {/* ===== CONTACT CARD ===== */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">

            {/* Left Info Panel */}
            <div className="bg-gradient-to-br from-yellow-300 to-orange-500 text-white p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-6">
                Let’s Simplify Your Compliance
              </h2>

              <p className="text-white/90 leading-relaxed mb-8">
                Whether you need GST filing, company registration, or tax advisory,
                our experts are ready to assist you.
              </p>

              <div className="space-y-4 text-white/90">
                <p>✔ Professional Guidance</p>
                <p>✔ Transparent Pricing</p>
                <p>✔ Quick Response</p>
              </div>
            </div>


            {/* Right Form Panel */}
            <div className="p-10 bg-white">

              <form className="space-y-6">

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                  >
                    <option value="">Select a Service</option>
                    <option>Company Registration</option>
                    <option>GST Filing</option>
                    <option>ITR Filing</option>
                    <option>TDS Services</option>
                    <option>Accounting & Compliance</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    onChange={handleChange}
                    placeholder="Write your query..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition resize-none"
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition"
                >
                  Submit Inquiry
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}