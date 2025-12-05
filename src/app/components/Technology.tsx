import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";

const tabs = [
  "Mobile",
  "Front-End",
  "Web",
  "Back-End",
  "Dev&CloudOps",
  "AI/ML",
  "UI/UX",
  "QA&Testing",
  "Blockchain",
] as const;

type TabType = (typeof tabs)[number];

interface TechItem {
  name: string;
  src: string;
}

const tabContent: Record<
  TabType,
  { title: string; description: string; techs: TechItem[] }
> = {
  Mobile: {
    title: "Mobile Development",
    description:
      "Our Mobile Development team builds robust, cross-platform mobile apps with modern frameworks and tools to deliver smooth user experiences.",
    techs: [
      {
        name: "React Native",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Flutter",
        src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
      },
      {
        name: "Swift",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
      },
      {
        name: "Kotlin",
        src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
      },
      {
        name: "Xamarin",
        src: "/Xamarinlogo.png",
      },
    ],
  },
  "Front-End": {
    title: "Front-End Development",
    description:
      "Our Front-End team creates visually appealing, responsive, and user-friendly websites using modern frameworks.",
    techs: [
      {
        name: "React",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Vue.js",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      },
      {
        name: "Angular",
        src: "/angular.png",
      },
      {
        name: "Tailwind CSS",
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
      {
        name: "Sass",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
      },
      {
        name: "Next.js",
        src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      },
    ],
  },
  Web: {
    title: "Web Development",
    description: "Build dynamic full-stack web applications using modern technology stacks.",
    techs: [
      {
        name: "Node.js",
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      },
      {
        name: "React.js",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Express.js",
        src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      },
      {
        name: "MongoDB",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
      },
      {
        name: "HTML",
        src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      },
    ],
  },
  "Back-End": {
    title: "Back-End Development",
    description:
      "Robust back-end solutions using Node.js, Express.js, MongoDB, PostgreSQL, Docker, and Redis.",
    techs: [
      {
        name: "Node.js",
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      },
      {
        name: "Express.js",
        src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      },
      {
        name: "MongoDB",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
      },
      {
        name: "PostgreSQL",
        src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      },
      {
        name: "Docker",
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
      },
      {
        name: "Redis",
        src: "https://cdn.worldvectorlogo.com/logos/redis.svg",
      },
    ],
  },
  "Dev&CloudOps": {
    title: "DevOps & CloudOps",
    description:
      "Streamline development with Docker, Kubernetes, AWS, Azure, Terraform, and GitLab CI/CD.",
    techs: [
      {
        name: "Docker",
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
      },
      {
        name: "Kubernetes",
        src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
      },
      {
        name: "AWS",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      },
      {
        name: "Azure",
        src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
      },
      {
        name: "Terraform",
        src: "Terraform.png",
      },
      {
        name: "GitLab CI/CD",
        src: "/GitLab.png",
      },
    ],
  },
  "AI/ML": {
    title: "AI & Machine Learning",
    description:
      "Advanced AI/ML solutions using TensorFlow, PyTorch, Keras, Scikit-Learn, OpenAI, and Hugging Face.",
    techs: [
      {
        name: "TensorFlow",
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
      },
      {
        name: "PyTorch",
        src: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
      },
      {
        name: "Keras",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
      },
      {
        name: "Scikit-Learn",
        src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      },
      { name: "OpenAI", src: "/openai.png" },
      {
        name: "Hugging Face",
        src: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      },
    ],
  },
  "UI/UX": {
    title: "UI/UX Design",
    description:
      "Craft intuitive and user-friendly designs using Figma, Sketch, Adobe XD, InVision, and Balsamiq.",
    techs: [
      {
        name: "Figma",
        src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      },
      {
        name: "Sketch",
        src: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg",
      },
      {
        name: "Adobe XD",
        src: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
      },
      {
        name: "InVision",
        src: "/invision.png",
      },
      { name: "Balsamiq", src: "/bal.png" },
    ],
  },
  "QA&Testing": {
    title: "QA & Testing",
    description:
      "Ensure software quality and reliability using Selenium, Jest, JUnit, Cypress, Postman, and Jira.",
    techs: [
      {
        name: "Selenium",
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png",
      },
      { name: "Jest", src: "https://jestjs.io/img/jest.png" },
      {
        name: "JUnit",
        src: "/junit.png",
      },
      {
        name: "Cypress",
        src: "/cypress.png",
      },
      {
        name: "Postman",
        src: "https://www.svgrepo.com/show/354202/postman-icon.svg",
      },
      {
        name: "Jira",
        src: "/Jira.png",
      },
    ],
  },
  Blockchain: {
    title: "Blockchain Development",
    description:
      "Secure blockchain solutions using Ethereum, Solidity, Hyperledger, Polkadot, Chainlink, and Truffle.",
    techs: [
      {
        name: "Ethereum",
        src: "/ethereum.png",
      },
      { name: "Solidity", src: "/solidity.png" },
      {
        name: "Hyperledger",
        src: "/hyperledger.png",
      },
      {
        name: "Polkadot",
        src: "/polkadot.png",
      },
      {
        name: "Chainlink",
        src: "Chainlink.png",
      },
      {
        name: "Truffle",
        src: "https://trufflesuite.com/img/truffle-logo-dark.svg",
      },
    ],
  },
};

export default function TechnologiesSection() {
  const [selectedTab, setSelectedTab] = useState<TabType>("Mobile");
  const [rating, setRating] = useState<number>(4.9);
  const [reviews, setReviews] = useState<number>(127);

// NEW: fallback images state
const [fallbacks, setFallbacks] = useState<{ [key: string]: string }>({});


  useEffect(() => {
    async function fetchGoogleRating() {
      try {
        const res = await fetch("/api/google-rating");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setRating(data.rating || 4.9);
        setReviews(data.user_ratings_total || 127);
      } catch (error) {
        console.error("Error fetching Google rating:", error);
      }
    }
    fetchGoogleRating();
  }, []);

const renderStars = (value: number) => {
  return Array.from({ length: 5 }, (_, i) => {
    const index = i + 1;

    const full = index <= Math.floor(value);
    const half = !full && index - 0.5 <= value;

    return full ? (
      <FaStar key={i} className="text-yellow-400" />
    ) : half ? (
      <FaStarHalfAlt key={i} className="text-yellow-400" />
    ) : (
      <FaStar key={i} className="text-gray-300" />
    );
  });
};


  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      

      {/* Technologies Section */}
      <section className="w-full bg-white  py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

          {/* Image Section */}
          <div className="w-full lg:w-1/2 mr-15 flex justify-center">
            <Image
              src="/tech1.png"
              alt="Technology Illustration"
              width={1200}       
              height={1200}      
              className="w-full max-w-6xl lg:max-w-2xl object-contain"
              loading="lazy"
            />
          </div>



          {/* Content Section */}
          <div className="w-full lg:w-1/2 max-w-xl mr-8 mx-auto">

           

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 leading-tight">
              We Offer Solutions Powered by These{" "}
              <span className="text-blue-600">Technologies</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
              Our company uses modern technologies and frameworks to build innovative,
              scalable, and high-quality software solutions.
            </p>

            {/* Tabs */}
            <div className="flex gap-3 flex-wrap mb-6">
              {tabs.map((tab) => {
                const isSelected = selectedTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 cursor-pointer hover:bg-blue-100 hover:text-blue-600"
                      }
                    `}
                  >
                    {tab.replace(/&/g, " & ")}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="border border-blue-300 rounded-xl p-6 bg-white shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-3">
                {tabContent[selectedTab].title}
              </h3>

              <p className="text-gray-700 mb-5 text-sm sm:text-base">
                {tabContent[selectedTab].description}
              </p>

              {/* Tech Grid */}
              <div className="grid grid-cols-2 gap-6">
                {tabContent[selectedTab].techs.map((tech) => {
                  const src = fallbacks[tech.name] || tech.src;
                  
                  return (
                    <div key={tech.name} className="flex items-center gap-3">
                      <Image
                        src={src}              
                        alt={`${tech.name} logo`}
                        width={48}
                        height={48}
                        className="object-contain sm:w-12 sm:h-12"
                        unoptimized
                        onError={() =>
                          setFallbacks((prev) => ({
                            ...prev,
                            [tech.name]: '/placeholder.png',
                          }))
                        }
                      />
                      <span className="font-semibold text-gray-800 text-sm sm:text-base">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}