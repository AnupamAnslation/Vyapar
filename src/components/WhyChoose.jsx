import Image from "next/image";

export default function WhyChooseSection() {
  const points = [
    {
      title: "Trusted Professionals",
      desc: "Experienced compliance experts and financial specialists dedicated to your business success.",
      icon: "👔",
    },
    {
      title: "Never Miss a Deadline",
      desc: "Structured compliance calendar ensures timely filing and zero penalty risks.",
      icon: "⏰",
    },
    {
      title: "Transparent Pricing",
      desc: "Clear pricing structure with no hidden charges and complete service clarity.",
      icon: "₹",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#FFF7ED] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Image */}
        <div className="relative order-1 lg:order-none">
          
          {/* Background Accent */}
          <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl"></div>

          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
            alt="Office Meeting"
            width={600}
            height={450}
            className="relative rounded-2xl shadow-2xl object-cover w-full h-[300px] sm:h-[380px] lg:h-[450px]"
          />
        </div>

        {/* Right Content */}
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Why Choose Vyapar Sahayak?
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mt-4 mb-6 rounded-full mx-auto lg:mx-0"></div>

          <p className="text-slate-600 text-base sm:text-lg mb-10 leading-relaxed">
            We combine professional expertise with personalized service
            to provide clarity, compliance, and confidence for your business.
          </p>

          {/* Points */}
          <div className="space-y-8">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start text-center sm:text-left group"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-xl shadow-md group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:text-white transition-all duration-300 shrink-0">
                  {point.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}