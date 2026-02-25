export default function Category() {
  const categories = [
    { title: "Billing Software", desc: "Fast & easy invoice creation" },
    { title: "Inventory Management", desc: "Track stock in real-time" },
    { title: "GST Reports", desc: "Generate GST reports easily" },
    { title: "Accounting", desc: "Complete business accounting" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Features
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}