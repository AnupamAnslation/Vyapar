export default function AboutPage() {
  return (
    <main className="bg-white pt-15 pb-20">

      {/* ===== HERO SECTION ===== */}
      <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            About 
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              {" "}Vyapar Sahayak
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Built on trust, professionalism, and commitment — we provide 
            reliable and transparent tax & compliance services to businesses of all sizes.
          </p>

        </div>
      </section>


      {/* ===== WHO WE ARE ===== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our team understands the challenges faced by business owners 
              in handling registrations, tax filings, and regulatory compliance.
            </p>

            <p className="text-gray-600 leading-relaxed">
              That’s why we provide structured guidance, timely execution, 
              and practical solutions tailored to your business needs.
              With us, compliance becomes simple and stress-free.
            </p>
          </div>

          {/* Highlight Card */}
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6">
              Why Businesses Trust Us
            </h3>

            <ul className="space-y-4 text-white/90">
              <li>✔ Expert Compliance Professionals</li>
              <li>✔ Transparent & Affordable Pricing</li>
              <li>✔ Timely Filing & Zero Penalty Focus</li>
              <li>✔ Dedicated Client Support</li>
            </ul>
          </div>

        </div>
      </section>


      {/* ===== MISSION & VISION ===== */}
      <section className="bg-[#FFF7ED] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white p-10 rounded-3xl shadow-lg border border-yellow-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To simplify taxation and compliance processes and make 
              professional consulting services accessible and affordable 
              for every business.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg border border-yellow-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To become a trusted compliance partner for startups and 
              established enterprises across India.
            </p>
          </div>

        </div>
      </section>


      {/* ===== CORE VALUES ===== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16">
            Our Core Values
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">

            {[
              "Integrity & Transparency",
              "Professional Excellence",
              "Client-Centric Approach",
              "Timely Execution",
              "Continuous Support",
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold">
                  {index + 1}
                </div>

                <p className="text-gray-800 font-medium">
                  {value}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}