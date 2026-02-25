"use client";

export default function FaqSection() {
  const faqs = [
    {
      q: "What documents do I need for income tax filing?",
      a: "You generally need PAN, Aadhaar, bank statements, Form 16 (if salaried), investment proofs, capital gains statements, and details of any other income such as rent or interest."
    },
    {
      q: "How much can I save on taxes legally?",
      a: "Your savings depend on your income, investments, and applicable deductions. Our experts help you optimise benefits under all eligible sections to ensure maximum legal tax savings."
    },
    {
      q: "Should I choose old or new tax regime?",
      a: "It depends on your income structure and deductions. We evaluate both regimes and suggest the option that results in the lowest tax liability for you."
    },
    {
      q: "How long does GST registration take and what's included?",
      a: "GST registration usually takes 3–7 working days. We handle documentation, application filing, follow-ups, and provide guidance after registration."
    },
    {
      q: "What are the penalties for late tax filing?",
      a: "Late filing may attract penalties, interest on tax due, and loss of certain benefits. Our team ensures timely filing to help you avoid unnecessary charges."
    },
    {
      q: "Do you handle TDS issues and refunds?",
      a: "Yes. We assist with TDS reconciliation, correction of mismatches, filing of returns, and complete support for refund processing."
    },
    {
      q: "What makes your CA services different?",
      a: "We offer proactive tax planning, fast turnaround, WhatsApp support, and personalised advisory instead of one-size-fits-all services."
    },
    {
      q: "How do you ensure my data is secure?",
      a: "We follow strict access control, encrypted storage practices, and secure communication channels to protect all client information."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#FFF7ED]">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-orange-600 font-semibold tracking-wide uppercase text-sm">
            Frequently Asked Questions
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Got Questions? We Have Answers
          </h2>

          <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed">
            Find answers to the most common questions about our compliance & tax services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="group bg-white border border-yellow-100 rounded-2xl shadow-sm p-5 sm:p-6 transition hover:shadow-md"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">
                  {item.q}
                </span>

                <span className="transition-transform duration-300 group-open:rotate-180 text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 sm:mt-16">
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Still have questions? Get expert CA advice instantly!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918130807360"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow-md hover:scale-105 transition"
            >
              📞 Call Now: +91 8130807360
            </a>

            <a
              href="https://wa.me/918130807360"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-xl border-2 border-green-500 text-green-600 font-semibold hover:bg-green-50 transition"
            >
              💬 WhatsApp Chat
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}