import { FaRegFileAlt, FaLightbulb, FaCogs, FaSmile } from "react-icons/fa";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional
});

export default function WorkProcess() {
  const steps = [
    {
      id: "01",
      title: "Consultation",
      desc: "We begin with a detailed discussion to understand your goals and needs.",
      icon: <FaRegFileAlt />,
    },
    {
      id: "02",
      title: "Strategy",
      desc: "We create a clear, actionable strategy tailored to your business.",
      icon: <FaLightbulb />,
    },
    {
      id: "03",
      title: "Implementation",
      desc: "Our team puts the plan into action using best practices and tools.",
      icon: <FaCogs />,
    },
    {
      id: "04",
      title: "Final Results",
      desc: "We deliver the final product and measure success against your objectives.",
      icon: <FaSmile />,
    },
  ];

  return (
    <section className={`py-16 bg-white text-center ${inter.className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="s font-medium mb-2"><span className="text-teal-500">{'//'}</span> Our Work Process</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Proven <span className="text-blue-600">Work Process</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className="relative">
                <div className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl">
                  {step.icon}
                </div>
                <div className="absolute  bottom-4.5 -right-2.5 bg-black text-white text-xs rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">
                  {step.id}
                </div>
              </div>

              <h3 className="font-semibold text-lg mt-6">{step.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
