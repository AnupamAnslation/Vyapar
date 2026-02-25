export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Tech Startup • Hyderabad",
      saved: "₹3.2L Saved",
      review:
        "Switched from old CA for GST compliance. They streamlined processes and saved us from costly penalties.",
    },
    {
      name: "Anita Singh",
      role: "Restaurant Owner • Nellore",
      saved: "₹1.8L Saved",
      review:
        "Income tax filing became effortless. They identified deductions I didn't know existed.",
    },
    {
      name: "Vikram Gupta",
      role: "Manufacturing • Bangalore",
      saved: "₹12L Saved",
      review:
        "Outstanding tax planning advice helped us optimize depreciation and annual savings.",
    },
    {
      name: "Meera Patel",
      role: "Freelancer",
      saved: "₹85K Saved",
      review:
        "Professional and responsive. WhatsApp support makes compliance stress-free.",
    },
    {
      name: "Suresh Khanna",
      role: "Real Estate",
      saved: "₹6.5L Saved",
      review:
        "Strategic structuring of investments saved us from major financial mistakes.",
    },
    {
      name: "Dr. Deepak Tiwari",
      role: "Medical Practice",
      saved: "₹4.2L Saved",
      review:
        "Finally found experts who understand medical taxation. Excellent service!",
    },
  ];

  return (
    <section className=" bg-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          <p className="text-yellow-600 font-semibold tracking-wide uppercase text-sm">
            Client Success Stories
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Real Results from Real Clients
          </h2>

          <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed">
            Helping businesses save lakhs through expert compliance & planning.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative bg-white rounded-3xl shadow-xl p-6 sm:p-10 lg:p-12 mb-14 lg:mb-16 border border-yellow-100 overflow-hidden">
          
          <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-yellow-300 blur-3xl opacity-20"></div>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
            “Vyapar Sahayak transformed our tax approach. They identified 
            deductions we missed and helped us save 
            <span className="text-orange-600 font-semibold"> ₹8.5 Lakhs </span> 
            in just one year.”
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 className="font-semibold text-gray-900">
                Priya Sharma
              </h4>
              <p className="text-gray-500 text-sm">
                Founder • EcoTech Solutions
              </p>
            </div>
            <div className="text-yellow-500 text-lg">★★★★★</div>
          </div>
        </div>

        {/* Grid Testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-slate-100 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  {item.name}
                </h4>
                <span className="text-orange-600 font-semibold text-xs sm:text-sm">
                  {item.saved}
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {item.review}
              </p>

              <p className="text-gray-400 text-xs mb-2">
                {item.role}
              </p>

              <div className="text-yellow-500 text-sm">★★★★★</div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-14 sm:mt-16 lg:mt-20 bg-white rounded-2xl shadow-lg p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center border border-yellow-100">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-600">
              4.8/5
            </h3>
            <p className="text-gray-500 text-sm">Average Rating</p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-green-600">
              ₹150Cr+
            </h3>
            <p className="text-gray-500 text-sm">Total Client Savings</p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-600">
              2500+
            </h3>
            <p className="text-gray-500 text-sm">Happy Clients</p>
          </div>
        </div>

      </div>
    </section>
  );
}