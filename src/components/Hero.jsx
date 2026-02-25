import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-[#FFF7ED] min-h-[85vh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-12 lg:gap-16 w-full py-26 lg:py-0">
        
        {/* Left Content */}
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Simplify Your{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Business Compliance
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            We help startups and businesses with GST filing, company registration,
            accounting, and tax compliance — so you can focus on growth.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition text-center"
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="px-6 py-3 rounded-lg border border-gray-300 font-semibold hover:bg-gray-100 transition text-center"
            >
              View Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 sm:flex sm:gap-8 justify-center lg:justify-start text-center lg:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">2500+</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">₹150Cr+</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Tax Saved</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">4.8/5</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Client Rating</p>
            </div>
          </div>

        </div>

        {/* Right Side Images */}
        <div className="relative flex justify-center items-center mt-12 lg:mt-0">
          
          {/* Background Glow */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>

          {/* Main Image */}
          <Image
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
            alt="Business Consulting"
            width={520}
            height={450}
            className="rounded-3xl shadow-2xl object-cover relative z-10 w-[90%] sm:w-[80%] lg:w-auto"
          />

          {/* Floating Images (Hide on small screens) */}
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Team Meeting"
            width={170}
            height={170}
            className="hidden lg:block absolute -top-12 -left-12 rounded-2xl shadow-lg object-cover float"
          />

          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
            alt="Consultation"
            width={150}
            height={150}
            className="hidden lg:block absolute -bottom-12 -right-12 rounded-2xl shadow-lg object-cover float-slow"
          />

        </div>
      </div>
    </section>
  );
}