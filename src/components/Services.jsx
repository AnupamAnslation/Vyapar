export default function ServicesSection() {
  const services = [
    {
      title: "Business Registration",
      desc: "Private Limited, LLP, OPC & Company Incorporation services.",
    },
    {
      title: "Taxation & Compliance",
      desc: "GST Filing, ITR Preparation, TDS & Audit Assistance.",
    },
    {
      title: "Financial Advisory",
      desc: "CMA Reports, Forecasting & Business Financial Planning.",
    },
    {
      title: "Payroll Compliance",
      desc: "ESI, EPF, Labour Law & Monthly Regulatory Returns.",
    },
    {
      title: "Startup India",
      desc: "DPIIT Recognition & Startup Tax Benefit Assistance.",
    },
    {
      title: "Trademark Registration",
      desc: "Search, Filing, Objection Handling & Renewal Support.",
    },
  ];

  return (
<section className="relative bg-[#FFF7ED] overflow-hidden">      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-64 sm:w-72 h-64 sm:h-72  rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-72 h-64 sm:h-72 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Our Expertise
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Comprehensive compliance, taxation, and advisory services
            tailored for modern businesses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-lg p-6 sm:p-8 lg:p-10 rounded-3xl shadow-md border border-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              {/* Gradient Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>

              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xl sm:text-2xl font-bold mb-6 shadow-md">
                {service.title.charAt(0)}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                {service.desc}
              </p>

              {/* Bottom Line */}
              <div className="w-10 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mt-6 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}