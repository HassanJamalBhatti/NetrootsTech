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
    { name: "NHS", logo: "/clients/NHS.png", width: 120, height: 80 },
    { name: "TuvausTria", logo: "/clients/tuvaustria.png", width: 180, height: 80 },
    { name: "USP", logo: "/clients/USP.png", width: 180, height: 80 },
    { name: "Times Institute", logo: "/clients/timesInstitute.png", width: 180, height: 80 },
    { name: "HE", logo: "/clients/HE.png", width: 180, height: 80 },
    { name: "BabyMaster", logo: "/clients/BabyMaster.png", width: 180, height: 80 },
    { name: "ONEZCOMMERE", logo: "/clients/ONEZCOMMERE.png", width: 180, height: 80 },
    { name: "CornersTone", logo: "/clients/Cornerstone.png", width: 180, height: 80 },
    { name: "OAG", logo: "/clients/OAG.png", width: 180, height: 80 },
    { name: "LHRSCLLAW", logo: "/clients/LHRSCLLAW.png", width: 180, height: 80 },
    { name: "HapiNapi", logo: "/clients/HapiNapi.png", width: 180, height: 80 },
    { name: "Mercedes", logo: "/clients/Mercedes.png", width: 180, height: 80 },
    { name: "SouthToday", logo: "/clients/southtoday.png", width: 180, height: 80 },
    { name: "Zapple", logo: "/clients/zapple.png", width: 180, height: 80 },
    { name: "AGW", logo: "/clients/AGW.png", width: 180, height: 80 },
  ];

  // Duplicate for seamless loop (common marquee pattern)
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="w-full bg-blue-50 text-blue-900 py-20 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <p className="text-teal-600 md:ml-16 font-medium">
          {'// '}<span className="text-black">Clients</span>
        </p>
        <h2 className="text-4xl md:text-5xl md:ml-16 font-semibold mt-3 mb-12">
          Some of Our Trusted Clients
        </h2>

        <div className="relative">
          {/* Top Row - Left to Right */}
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicatedClients.map((client, index) => (
              <div
                key={`top-${index}`}
                className="bg-white rounded-lg w-56 h-24 flex items-center justify-center shadow-lg mx-4 flex-shrink-0 transition-transform hover:scale-105"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={client.width}
                  height={client.height}
                  className="object-contain max-w-[85%] max-h-[70%]"
                  priority={index < clients.length} // Optional: prioritize first set
                />
              </div>
            ))}
          </div>

          {/* Bottom Row - Right to Left */}
          <div className="flex animate-marquee-reverse whitespace-nowrap mt-10">
            {duplicatedClients.map((client, index) => (
              <div
                key={`bottom-${index}`}
                className="bg-white rounded-lg w-56 h-24 flex items-center justify-center shadow-lg mx-4 flex-shrink-0 transition-transform hover:scale-105"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={client.width}
                  height={client.height}
                  className="object-contain max-w-[85%] max-h-[70%]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-1100%);
          }
        }

        @keyframes marquee-reverse {
          from {
            transform: translateX(-1100%);
          }
          to {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          animation: marquee 180s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 180s linear infinite;
        }
      `}</style>
    </section>
  );
}