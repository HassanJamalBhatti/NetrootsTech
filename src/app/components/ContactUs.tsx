"use client";

import { Inter } from "next/font/google";
import { FaCheckCircle, FaChevronRight } from "react-icons/fa";
import Select from "react-select";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

/* -------------------- DATA -------------------- */
const countryCodes = [
  { code: "+93", name: "Afghanistan" },
  { code: "+355", name: "Albania" },
  { code: "+213", name: "Algeria" },
  { code: "+1‑684", name: "American Samoa" },
  { code: "+376", name: "Andorra" },
  { code: "+244", name: "Angola" },
  { code: "+1‑264", name: "Anguilla" },
  { code: "+1‑268", name: "Antigua and Barbuda" },
  { code: "+54", name: "Argentina" },
  { code: "+374", name: "Armenia" },
  { code: "+297", name: "Aruba" },
  { code: "+247", name: "Ascension Island" },
  { code: "+61", name: "Australia" },
  { code: "+672", name: "Australian External Territories" },
  { code: "+43", name: "Austria" },
  { code: "+994", name: "Azerbaijan" },
  { code: "+1‑242", name: "Bahamas" },
  { code: "+973", name: "Bahrain" },
  { code: "+880", name: "Bangladesh" },
  { code: "+1‑246", name: "Barbados" },
  { code: "+375", name: "Belarus" },
  { code: "+32", name: "Belgium" },
  { code: "+501", name: "Belize" },
  { code: "+229", name: "Benin" },
  { code: "+1‑441", name: "Bermuda" },
  { code: "+975", name: "Bhutan" },
  { code: "+591", name: "Bolivia" },
  { code: "+387", name: "Bosnia and Herzegovina" },
  { code: "+267", name: "Botswana" },
  { code: "+55", name: "Brazil" },
  { code: "+1‑284", name: "British Virgin Islands" },
  { code: "+673", name: "Brunei Darussalam" },
  { code: "+359", name: "Bulgaria" },
  { code: "+226", name: "Burkina Faso" },
  { code: "+257", name: "Burundi" },
  { code: "+855", name: "Cambodia" },
  { code: "+237", name: "Cameroon" },
  { code: "+1‑345", name: "Cayman Islands" },
  { code: "+236", name: "Central African Republic" },
  { code: "+235", name: "Chad" },
  { code: "+56", name: "Chile" },
  { code: "+86", name: "China" },
  { code: "+57", name: "Colombia" },
  { code: "+269", name: "Comoros and Mayotte" },
  { code: "+242", name: "Congo (Republic)" },
  { code: "+243", name: "Congo (DRC)" },
  { code: "+506", name: "Costa Rica" },
  { code: "+385", name: "Croatia" },
  { code: "+53", name: "Cuba" },
  { code: "+357", name: "Cyprus" },
  { code: "+420", name: "Czech Republic" },
  { code: "+45", name: "Denmark" },
  { code: "+253", name: "Djibouti" },
  { code: "+1‑767", name: "Dominica" },
  { code: "+1‑809", name: "Dominican Republic" },
  { code: "+593", name: "Ecuador" },
  { code: "+20", name: "Egypt" },
  { code: "+503", name: "El Salvador" },
  { code: "+240", name: "Equatorial Guinea" },
  { code: "+291", name: "Eritrea" },
  { code: "+372", name: "Estonia" },
  { code: "+251", name: "Ethiopia" },
  { code: "+679", name: "Fiji" },
  { code: "+358", name: "Finland" },
  { code: "+33", name: "France" },
  { code: "+594", name: "French Guiana / Overseas Territories" },
  { code: "+241", name: "Gabon" },
  { code: "+220", name: "Gambia" },
  { code: "+995", name: "Georgia" },
  { code: "+49", name: "Germany" },
  { code: "+233", name: "Ghana" },
  { code: "+30", name: "Greece" },
  { code: "+1‑473", name: "Grenada" },
  { code: "+502", name: "Guatemala" },
  { code: "+224", name: "Guinea" },
  { code: "+245", name: "Guinea‑Bissau" },
  { code: "+592", name: "Guyana" },
  { code: "+509", name: "Haiti" },
  { code: "+504", name: "Honduras" },
  { code: "+852", name: "Hong Kong" },
  { code: "+36", name: "Hungary" },
  { code: "+354", name: "Iceland" },
  { code: "+91", name: "India" },
  { code: "+62", name: "Indonesia" },
  { code: "+98", name: "Iran" },
  { code: "+964", name: "Iraq" },
  { code: "+353", name: "Ireland" },
  { code: "+972", name: "Israel" },
  { code: "+39", name: "Italy" },
  { code: "+1‑876", name: "Jamaica" },
  { code: "+81", name: "Japan" },
  { code: "+962", name: "Jordan" },
  { code: "+7", name: "Kazakhstan / Russia" },
  { code: "+254", name: "Kenya" },
  { code: "+686", name: "Kiribati" },
  { code: "+965", name: "Kuwait" },
  { code: "+996", name: "Kyrgyzstan" },
  { code: "+856", name: "Laos" },
  { code: "+371", name: "Latvia" },
  { code: "+961", name: "Lebanon" },
  { code: "+266", name: "Lesotho" },
  { code: "+231", name: "Liberia" },
  { code: "+218", name: "Libya" },
  { code: "+423", name: "Liechtenstein" },
  { code: "+370", name: "Lithuania" },
  { code: "+352", name: "Luxembourg" },
  { code: "+853", name: "Macau" },
  { code: "+389", name: "North Macedonia" },
  { code: "+261", name: "Madagascar" },
  { code: "+265", name: "Malawi" },
  { code: "+60", name: "Malaysia" },
  { code: "+960", name: "Maldives" },
  { code: "+223", name: "Mali" },
  { code: "+356", name: "Malta" },
  { code: "+692", name: "Marshall Islands" },
  { code: "+596", name: "Martinique" },
  { code: "+222", name: "Mauritania" },
  { code: "+230", name: "Mauritius" },
  { code: "+52", name: "Mexico" },
  { code: "+691", name: "Micronesia" },
  { code: "+373", name: "Moldova" },
  { code: "+377", name: "Monaco" },
  { code: "+976", name: "Mongolia" },
  { code: "+382", name: "Montenegro" },
  { code: "+1‑664", name: "Montserrat" },
  { code: "+212", name: "Morocco" },
  { code: "+258", name: "Mozambique" },
  { code: "+95", name: "Myanmar" },
  { code: "+264", name: "Namibia" },
  { code: "+674", name: "Nauru" },
  { code: "+977", name: "Nepal" },
  { code: "+31", name: "Netherlands" },
  { code: "+687", name: "New Caledonia" },
  { code: "+64", name: "New Zealand" },
  { code: "+505", name: "Nicaragua" },
  { code: "+227", name: "Niger" },
  { code: "+234", name: "Nigeria" },
  { code: "+850", name: "North Korea" },
  { code: "+47", name: "Norway" },
  { code: "+968", name: "Oman" },
  { code: "+92", name: "Pakistan" },
  { code: "+680", name: "Palau" },
  { code: "+970", name: "Palestine" },
  { code: "+507", name: "Panama" },
  { code: "+675", name: "Papua New Guinea" },
  { code: "+595", name: "Paraguay" },
  { code: "+51", name: "Peru" },
  { code: "+63", name: "Philippines" },
  { code: "+48", name: "Poland" },
  { code: "+351", name: "Portugal" },
  { code: "+1‑787", name: "Puerto Rico" },
  { code: "+974", name: "Qatar" },
  { code: "+262", name: "Réunion" },
  { code: "+40", name: "Romania" },
  { code: "+7", name: "Russia / Kazakhstan" },
  { code: "+250", name: "Rwanda" },
  { code: "+290", name: "Saint Helena" },
  { code: "+1‑869", name: "Saint Kitts and Nevis" },
  { code: "+1‑758", name: "Saint Lucia" },
  { code: "+508", name: "Saint Pierre and Miquelon" },
  { code: "+1‑784", name: "Saint Vincent & the Grenadines" },
  { code: "+685", name: "Samoa" },
  { code: "+378", name: "San Marino" },
  { code: "+239", name: "São Tomé and Príncipe" },
  { code: "+221", name: "Senegal" },
  { code: "+381", name: "Serbia" },
  { code: "+248", name: "Seychelles" },
  { code: "+232", name: "Sierra Leone" },
  { code: "+65", name: "Singapore" },
  { code: "+421", name: "Slovakia" },
  { code: "+386", name: "Slovenia" },
  { code: "+677", name: "Solomon Islands" },
  { code: "+252", name: "Somalia" },
  { code: "+27", name: "South Africa" },
  { code: "+82", name: "South Korea" },
  { code: "+211", name: "South Sudan" },
  { code: "+34", name: "Spain" },
  { code: "+94", name: "Sri Lanka" },
  { code: "+249", name: "Sudan" },
  { code: "+597", name: "Suriname" },
  { code: "+268", name: "Swaziland (Eswatini)" },
  { code: "+46", name: "Sweden" },
  { code: "+41", name: "Switzerland" },
  { code: "+963", name: "Syria" },
  { code: "+886", name: "Taiwan" },
  { code: "+992", name: "Tajikistan" },
  { code: "+255", name: "Tanzania" },
  { code: "+66", name: "Thailand" },
  { code: "+228", name: "Togo" },
  { code: "+690", name: "Tokelau" },
  { code: "+676", name: "Tonga" },
  { code: "+1868", name: "Trinidad and Tobago" },
  { code: "+216", name: "Tunisia" },
  { code: "+90", name: "Turkey" },
  { code: "+993", name: "Turkmenistan" },
  { code: "+1‑649", name: "Turks and Caicos Islands" },
  { code: "+688", name: "Tuvalu" },
  { code: "+256", name: "Uganda" },
  { code: "+380", name: "Ukraine" },
  { code: "+971", name: "United Arab Emirates" },
  { code: "+44", name: "United Kingdom" },
  { code: "+1", name: "United States / Canada" },
  { code: "+598", name: "Uruguay" },
  { code: "+998", name: "Uzbekistan" },
  { code: "+678", name: "Vanuatu" },
  { code: "+379", name: "Vatican City (Holy See)" },
  { code: "+58", name: "Venezuela" },
  { code: "+84", name: "Vietnam" },
  { code: "+967", name: "Yemen" },
  { code: "+260", name: "Zambia" },
  { code: "+263", name: "Zimbabwe" }
];
interface CountryOption {
  value: string;
  label: string;
}
const serviceOptions = [
  { value: "web-development", label: "Web Development" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "branding", label: "Branding" },
  { value: "seo-optimization", label: "SEO Optimization" },
  { value: "graphic-design", label: "Graphic Design" },
  { value: "content-writing", label: "Content Writing" },
  { value: "social-media-management", label: "Social Media Management" },
  { value: "mobile-app-development", label: "Mobile App Development" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "ecommerce-solutions", label: "eCommerce Solutions" },
  { value: "email-marketing", label: "Email Marketing" },
  { value: "video-production", label: "Video Production" },
  { value: "ppc", label: "Pay Per Click (PPC)" },
  { value: "influencer-marketing", label: "Influencer Marketing" },
  { value: "market-research", label: "Market Research" },
  { value: "cloud-solutions", label: "Cloud Solutions" },
  { value: "it-consulting", label: "IT Consulting" },
  { value: "web-hosting", label: "Web Hosting" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "analytics-reporting", label: "Analytics & Reporting" },
];
interface ServiceOption {
  value: string;
  label: string;
}

const countryOptions = countryCodes.map((c) => ({
  value: c.code,
  label: `${c.code} ${c.name}`,
}));

/* -------------------- COMPONENT -------------------- */
export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<ServiceOption[]>([]);
  const [selectedCountry, setSelectedCountry] =
    useState<CountryOption | null>(null);

  return (
    <div className={`${inter.className} w-full flex justify-center py-16 px-4`}>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* ================= LEFT CARD ================= */}
        <div className="bg-black text-white rounded-2xl p-8 md:p-10">
          <h2 className="text-lg md:text-xl font-semibold leading-relaxed">
            Partner with Us for Comprehensive <br className="hidden md:block" />
            IT & Digital Marketing Solutions
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed text-sm md:text-base">
            Get in touch & let’s start crafting solutions that drive your
            business forward.
          </p>

          <p className="mt-6 font-semibold text-sm md:text-base">
            Email us at :
            <span className="text-gray-200 font-normal block md:inline">
              {" "}
              business@netrootstech.com
            </span>
          </p>

          {/* BENEFITS */}
          <div className="mt-8">
            <h3 className="font-bold text-lg">Your Benefits</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mt-4 text-gray-300">
              {[
                "Client-oriented",
                "Results-Driven",
                "Independent",
                "Problem-Solving",
                "Competent",
                "Transparent",
              ].map((item, idx) => (
                <p key={idx} className="flex items-center gap-3 text-sm">
                  <FaCheckCircle className="text-teal-400 shrink-0" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* WHAT'S NEXT */}
          <div className="mt-8">
            <h3 className="font-bold text-lg">What’s Next?</h3>

            <ul className="mt-4 space-y-3 text-gray-300 text-sm">
              {[
                "We schedule a call at your convenience.",
                "We do a discovery & consulting meeting.",
                "We prepare a proposal.",
              ].map((text, idx) => (
                <li key={idx} className="flex gap-3">
                  <FaChevronRight className="text-teal-400 mt-1 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Get your <span className="text-blue-600">Free Quote</span> Today!
          </h1>

          <form className="mt-8 space-y-6">

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Eg. John Doe"
                  className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="block mb-2 text-sm font-medium">Phone</label>
              <div className="flex gap-3">
                <div className="w-36">
                  <Select
                    options={countryOptions}
                    value={selectedCountry}
                    onChange={(opt) => setSelectedCountry(opt)}
                    placeholder="Code"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="flex-1 bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* SERVICE */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Service
              </label>
              <Select
                options={serviceOptions}
                value={selectedServices}
                onChange={(s) =>
                  setSelectedServices((s ?? []) as ServiceOption[])
                }
                isMulti
                placeholder="Select Services"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Your Message
              </label>
              <textarea
                rows={4}
                placeholder="Enter here..."
                className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 text-white px-10 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
