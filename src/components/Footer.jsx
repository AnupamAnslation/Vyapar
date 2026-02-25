import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-20 pb-10 relative overflow-hidden">
      
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h4 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6">
            Vyapar Sahayak
          </h4>
          <p className="text-gray-400 leading-relaxed mb-6">
            Your trusted partner for business registration, GST filing,
            tax compliance, and financial advisory services across India.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-white transition cursor-pointer">
              f
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-white transition cursor-pointer">
              in
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-white transition cursor-pointer">
              ig
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-white font-semibold mb-6">Quick Links</h5>
          <ul className="space-y-3 text-gray-400">
            <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-yellow-400 transition">Services</Link></li>
            <li><Link href="/pricing" className="hover:text-yellow-400 transition">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 className="text-white font-semibold mb-6">Our Services</h5>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-yellow-400 transition cursor-pointer">Company Registration</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">GST Filing & Returns</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">MSME / Udyam</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">ITR & TDS Filing</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Accounting & Advisory</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-white font-semibold mb-6">Contact Info</h5>
          <ul className="space-y-4 text-gray-400">
            <li>
              📍 <span>Office No. 21, Business Plaza,<br />Hyderabad, India</span>
            </li>
            <li>
              📞 <span>+91 8130807360</span>
            </li>
            <li>
              📧 <span>support@vyaparsahayak.com</span>
            </li>
            <li>
              🕒 <span>Mon – Sat : 9:00 AM – 7:00 PM</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Vyapar Sahayak. All Rights Reserved.
      </div>
    </footer>
  );
}