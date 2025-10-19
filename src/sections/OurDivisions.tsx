"use client";

const divisions = [
  {
    title: "Education Division",
    description:
      "Our education arm operates a network of modern schools and nurseries across Saudi Arabia, Egypt, and the UAE - focused on innovative learning and holistic development.",
    image: "/images/667.jpg",
  },
  {
    title: "Logistics Division",
    description:
      "Energize Logistics provides high-quality heavy transportation and logistics solutions across the Kingdom, ensuring reliability, safety, and efficiency.",
    image: "/images/f.jpeg",
  },
];

export default function OurDivisions() {
  return (
    <section className="py-20 bg-[#0a0f1d] border-t border-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Our Divisions
        </h2>
        <p className="text-center text-gray-300 max-w-xl mx-auto mb-12 text-sm md:text-base">
          Energize Future Group is a diversified organization combining excellence
          in education and logistics - building a smarter, more connected future.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {divisions.map((division, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md bg-[#111827] hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={division.image}
                alt={division.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 bg-gray-800">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {division.title}
                </h3>
                <p className="text-gray-300 text-sm">{division.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}