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


  // Duplicate logos for continuous marquee
  const repeatedClients = [...clients, ...clients];

  return (
    <section className="w-full bg-black text-white py-16 font-inter overflow-hidden">
  <div className="max-w-[1440px] mx-auto px-4">
    <p className="text-teal-400 md:ml-16 font-semibold">{'// '}<span className="text-white">Clients</span></p>
    <h2 className="text-3xl md:ml-16 font-bold mt-2 mb-8">Some of Our Clients</h2>

    <div className="relative overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeatedClients.map((client, index) => (
          <div
            key={index}
            className="bg-white rounded-full w-60 h-20 flex items-center justify-center shadow-md mx-4 flex-shrink-0"
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
      animation: marquee 90s linear infinite;
    }
  `}</style>
</section>

  );
}
