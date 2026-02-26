import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ServiceDetail({ params }) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <main className="bg-white pt-15 pb-24">

      {/* ================= HERO ================= */}
      <section className="bg-[#FFF7ED] py-20 border-b border-yellow-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            {service.title}
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-16">

            {/* Full Description */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Service Overview
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {service.fullDescription}
              </p>
            </div>

            {/* Services Included */}
            {service.servicesIncluded && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                  Services Included
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {service.servicesIncluded.map((item, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 p-6 rounded-2xl shadow-sm"
                    >
                      <span className="text-orange-500 font-bold mr-2">✔</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {service.benefits && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                  Key Benefits
                </h2>

                <ul className="space-y-4 text-gray-700">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-orange-500 font-bold">✔</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Process */}
            {service.process && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                  Our Process
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {service.process.map((step, i) => (
                    <div
                      key={i}
                      className="bg-[#FFF7ED] p-6 rounded-2xl"
                    >
                      <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold">
                        {i + 1}
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Documents */}
            {service.documentsRequired && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                  Documents Required
                </h2>

                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  {service.documentsRequired.map((doc, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-orange-500 font-bold">•</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQ */}
            {service.faqs && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                  {service.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 p-6 rounded-2xl"
                    >
                      <h3 className="font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 mt-2 text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-8 rounded-3xl shadow-xl h-fit">
            <h3 className="text-xl font-semibold mb-4">
              Need Professional Assistance?
            </h3>

            <p className="text-white/90 text-sm mb-6">
              Our experts are ready to guide you through every step.
              Get personalized support for your business today.
            </p>

            <Link
              href="/contact"
              className="block text-center bg-white text-orange-600 font-semibold py-3 rounded-xl hover:scale-105 transition"
            >
              Get Consultation
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}