export default function ContactSection() {
  return (
    <section className="py-24 bg-[#0a0f1d] text-white px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Logistics?</h2>
        <p className="mb-12">
          Get in touch with our team today to explore how Energize can simplify your supply chain and accelerate your business.
        </p>
        <a
          href="mailto:info@energize-logistics.com"
          className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition"
        >
          Contact Us Now
        </a>
      </div>
    </section>
  );
}