"use client";
import Image from "next/image";

export default function ClientsSection() {
  const clients = [
    { name: "Comfatra", logo: "/clients/comfatra.png", width: 180, height: 80 },
    { name: "CureMD", logo: "/clients/curemd.png", width: 180, height: 80 },
    { name: "Faysal Bank", logo: "/clients/faysalbank.png", width: 180, height: 80 },
    { name: "Johnson & Johnson", logo: "/clients/jnj.png", width: 180, height: 80 },
    { name: "Hanif", logo: "/clients/hanif.png", width: 100, height: 30 },
    { name: "IASP", logo: "/clients/iasp.png", width: 100, height: 30 },
    { name: "IVY", logo: "/clients/IVY.png", width: 100, height: 30 },
    { name: "Pain", logo: "/clients/pain.png", width: 60, height: 20 },
    { name: "STSP", logo: "/clients/stsp.png", width: 70, height: 20 },
    { name: "AF", logo: "/clients/A10.png", width: 120, height: 50 },
    { name: "ET", logo: "/clients/A20.png", width: 120, height: 50 },
    { name: "ZT", logo: "/clients/A4.png", width: 180, height: 80 },
    { name: "MT", logo: "/clients/A12.png", width: 140, height: 80 },
    { name: "M", logo: "/clients/A17.png", width: 120, height: 50 },
    { name: "ML", logo: "/clients/A13.png", width: 120, height: 50 },
    { name: "UN", logo: "/clients/A14.png", width: 120, height: 50 },
    { name: "UL", logo: "/clients/A2.png", width: 160, height: 70 },
    { name: "MA", logo: "/clients/A7.png", width: 120, height: 80 },
    { name: "BS", logo: "/clients/A8.png", width: 120, height: 80 },
    { name: "BF", logo: "/clients/A18.png", width: 120, height: 80 },
  ];

  const repeatedClients = [...clients, ...clients];

  return (
    <section className="w-full bg-blue-50 text-blue-900 py-20 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <p className="text-teal-600 md:ml-16 font-medium">{'// '}<span className="text-black">Clients</span></p>
        <h2 className="text-4xl md:ml-16 font-semibold mt-3 mb-12">Some of Our Trusted Clients</h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {repeatedClients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-lg w-56 h-24 flex items-center justify-center shadow-lg mx-4 flex-shrink-0 transition-transform hover:scale-105"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-455%); }
        }
        .animate-marquee {
          display: flex;
          gap: 2rem;
          animation: marquee 120s linear infinite;
        }
      `}</style>
    </section>
  );
}
