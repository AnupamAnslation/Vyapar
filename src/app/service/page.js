import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Company Registration",
      slug: "company-registration",
      points: [
        "Private Limited Company Registration",
        "LLP Registration",
        "Partnership Firm Registration",
        "Proprietorship Registration",
      ],
    },
    {
      title: "Business License Registration",
      slug: "business-license-registration",
      points: [
        "Shop & Establishment License",
        "Trade License",
        "Professional Tax Registration",
      ],
    },
    {
      title: "GST Registration & Filing",
      slug: "gst-registration-filing",
      points: [
        "GST Registration",
        "Monthly/Quarterly Return Filing",
        "Annual Return Filing",
      ],
    },
    {
      title: "MSME / Udyam Registration",
      slug: "msme-udyam-registration",
      points: [
        "Government Scheme Benefits",
        "Loan & Subsidy Eligibility",
      ],
    },
    {
      title: "IEC Registration",
      slug: "iec-registration",
      points: [
        "Import Export Code Registration",
        "International Trade Support",
      ],
    },
    {
      title: "Annual & Regulatory Compliance",
      slug: "annual-regulatory-compliance",
      points: [
        "ROC Compliance",
        "Director KYC",
        "Annual Filing",
      ],
    },
    {
      title: "Accounting & Compliance",
      slug: "accounting-compliance-services",
      points: [
        "Bookkeeping",
        "Financial Statements",
        "Business Advisory",
      ],
    },
    {
      title: "ITR Filing",
      slug: "itr-filing",
      points: [
        "Individuals",
        "Business Owners",
        "Firms & Companies",
      ],
    },
    {
      title: "TDS Services",
      slug: "tds-services",
      points: [
        "TDS Registration",
        "Return Filing",
        "TDS Compliance",
      ],
    },
  ];

  return (
    <main className="bg-white pt-15 pb-24">

      {/* ===== HERO ===== */}
      <section className="bg-[#FFF7ED] py-20 border-b border-yellow-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Our Professional Services
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
            Complete compliance, taxation, and registration solutions
            designed to support your business growth.
          </p>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Top Section */}
              <div>
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-lg shadow-md group-hover:scale-110 transition">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-5 group-hover:text-orange-600 transition">
                  {service.title}
                </h3>

                <ul className="space-y-2 text-gray-600 text-sm">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-orange-500">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 text-orange-600 font-medium group-hover:underline">
                View Details →
              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold">
            Need Professional Assistance?
          </h2>
          <p className="mt-4 text-white/90">
            Speak with our experts and get personalized compliance solutions.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-orange-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            Get Consultation
          </Link>
        </div>
      </section>

    </main>
  );
}