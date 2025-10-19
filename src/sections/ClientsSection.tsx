import ClientLogo from "../components/ClientLogo";

const clients = [
  "/images/clients/client1.png",
  "/images/clients/client2.png",
  "/images/clients/client3.png",
  "/images/clients/client4.png",
  "/images/clients/client5.png",
];

export default function ClientsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Valued Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
          {clients.map((logo, index) => (
            <ClientLogo key={index} src={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}