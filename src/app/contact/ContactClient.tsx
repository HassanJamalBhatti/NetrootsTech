"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Select from "react-select";

/* ================= TYPES ================= */
interface ServiceOption {
  label: string;
  value: string;
}

interface CountryOption {
  label: string;
  value: string;
  code: string;
}

/* ================= SERVICES ================= */
const serviceOptions: ServiceOption[] = [
  { value: "Intelligent Automation & AI Solutions", label: "Intelligent Automation & AI Solutions" },
  { value: "Data Intelligence & Predictive Analytics", label: "Data Intelligence & Predictive Analytics" },
  { value: "Cloud Architecture & Next-Gen Infrastructure", label: "Cloud Architecture & Next-Gen Infrastructure" },
  { value: "Talent-as-a-Service (Staff Augmentation)", label: "Talent-as-a-Service (Staff Augmentation)" },
  { value: "Product Innovation & MVP Launch", label: "Product Innovation & MVP Launch" },
  { value: "Growth Marketing & Digital Acceleration", label: "Growth Marketing & Digital Acceleration" },
  { value: "Web3 & App Experiences", label: "Web3 & App Experiences" },
  { value: "DevOps & Continuous Delivery", label: "DevOps & Continuous Delivery" },
];

/* ================= COUNTRY CODES ================= */
const countryOptions = [
  { code: "+93", label: "Afghanistan +93", value: "+93" },
  { code: "+355", label: "Albania +355", value: "+355" },
  { code: "+213", label: "Algeria +213", value: "+213" },
  { code: "+1‑684", label: "American Samoa +1‑684", value: "+1‑684" },
  { code: "+376", label: "Andorra +376", value: "+376" },
  { code: "+244", label: "Angola +244", value: "+244" },
  { code: "+1‑264", label: "Anguilla +1‑264", value: "+1‑264" },
  { code: "+1‑268", label: "Antigua and Barbuda +1‑268", value: "+1‑268" },
  { code: "+54", label: "Argentina +54", value: "+54" },
  { code: "+374", label: "Armenia +374", value: "+374" },
  { code: "+297", label: "Aruba +297", value: "+297" },
  { code: "+247", label: "Ascension Island +247", value: "+247" },
  { code: "+61", label: "Australia +61", value: "+61" },
  { code: "+672", label: "Australian External Territories +672", value: "+672" },
  { code: "+43", label: "Austria +43", value: "+43" },
  { code: "+994", label: "Azerbaijan +994", value: "+994" },
  { code: "+1‑242", label: "Bahamas +1‑242", value: "+1‑242" },
  { code: "+973", label: "Bahrain +973", value: "+973" },
  { code: "+880", label: "Bangladesh +880", value: "+880" },
  { code: "+1‑246", label: "Barbados +1‑246", value: "+1‑246" },
  { code: "+375", label: "Belarus +375", value: "+375" },
  { code: "+32", label: "Belgium +32", value: "+32" },
  { code: "+501", label: "Belize +501", value: "+501" },
  { code: "+229", label: "Benin +229", value: "+229" },
  { code: "+1‑441", label: "Bermuda +1‑441", value: "+1‑441" },
  { code: "+975", label: "Bhutan +975", value: "+975" },
  { code: "+591", label: "Bolivia +591", value: "+591" },
  { code: "+387", label: "Bosnia and Herzegovina +387", value: "+387" },
  { code: "+267", label: "Botswana +267", value: "+267" },
  { code: "+55", label: "Brazil +55", value: "+55" },
  { code: "+1‑284", label: "British Virgin Islands +1‑284", value: "+1‑284" },
  { code: "+673", label: "Brunei Darussalam +673", value: "+673" },
  { code: "+359", label: "Bulgaria +359", value: "+359" },
  { code: "+226", label: "Burkina Faso +226", value: "+226" },
  { code: "+257", label: "Burundi +257", value: "+257" },
  { code: "+855", label: "Cambodia +855", value: "+855" },
  { code: "+237", label: "Cameroon +237", value: "+237" },
  { code: "+1‑345", label: "Cayman Islands +1‑345", value: "+1‑345" },
  { code: "+236", label: "Central African Republic +236", value: "+236" },
  { code: "+235", label: "Chad +235", value: "+235" },
  { code: "+56", label: "Chile +56", value: "+56" },
  { code: "+86", label: "China +86", value: "+86" },
  { code: "+57", label: "Colombia +57", value: "+57" },
  { code: "+269", label: "Comoros and Mayotte +269", value: "+269" },
  { code: "+242", label: "Congo (Republic) +242", value: "+242" },
  { code: "+243", label: "Congo (DRC) +243", value: "+243" },
  { code: "+506", label: "Costa Rica +506", value: "+506" },
  { code: "+385", label: "Croatia +385", value: "+385" },
  { code: "+53", label: "Cuba +53", value: "+53" },
  { code: "+357", label: "Cyprus +357", value: "+357" },
  { code: "+420", label: "Czech Republic +420", value: "+420" },
  { code: "+45", label: "Denmark +45", value: "+45" },
  { code: "+253", label: "Djibouti +253", value: "+253" },
  { code: "+1‑767", label: "Dominica +1‑767", value: "+1‑767" },
  { code: "+1‑809", label: "Dominican Republic +1‑809", value: "+1‑809" },
  { code: "+593", label: "Ecuador +593", value: "+593" },
  { code: "+20", label: "Egypt +20", value: "+20" },
  { code: "+503", label: "El Salvador +503", value: "+503" },
  { code: "+240", label: "Equatorial Guinea +240", value: "+240" },
  { code: "+291", label: "Eritrea +291", value: "+291" },
  { code: "+372", label: "Estonia +372", value: "+372" },
  { code: "+251", label: "Ethiopia +251", value: "+251" },
  { code: "+679", label: "Fiji +679", value: "+679" },
  { code: "+358", label: "Finland +358", value: "+358" },
  { code: "+33", label: "France +33", value: "+33" },
  { code: "+594", label: "French Guiana / Overseas Territories +594", value: "+594" },
  { code: "+241", label: "Gabon +241", value: "+241" },
  { code: "+220", label: "Gambia +220", value: "+220" },
  { code: "+995", label: "Georgia +995", value: "+995" },
  { code: "+49", label: "Germany +49", value: "+49" },
  { code: "+233", label: "Ghana +233", value: "+233" },
  { code: "+30", label: "Greece +30", value: "+30" },
  { code: "+1‑473", label: "Grenada +1‑473", value: "+1‑473" },
  { code: "+502", label: "Guatemala +502", value: "+502" },
  { code: "+224", label: "Guinea +224", value: "+224" },
  { code: "+245", label: "Guinea‑Bissau +245", value: "+245" },
  { code: "+592", label: "Guyana +592", value: "+592" },
  { code: "+509", label: "Haiti +509", value: "+509" },
  { code: "+504", label: "Honduras +504", value: "+504" },
  { code: "+852", label: "Hong Kong +852", value: "+852" },
  { code: "+36", label: "Hungary +36", value: "+36" },
  { code: "+354", label: "Iceland +354", value: "+354" },
  { code: "+91", label: "India +91", value: "+91" },
  { code: "+62", label: "Indonesia +62", value: "+62" },
  { code: "+98", label: "Iran +98", value: "+98" },
  { code: "+964", label: "Iraq +964", value: "+964" },
  { code: "+353", label: "Ireland +353", value: "+353" },
  { code: "+972", label: "Israel +972", value: "+972" },
  { code: "+39", label: "Italy +39", value: "+39" },
  { code: "+1‑876", label: "Jamaica +1‑876", value: "+1‑876" },
  { code: "+81", label: "Japan +81", value: "+81" },
  { code: "+962", label: "Jordan +962", value: "+962" },
  { code: "+7", label: "Kazakhstan / Russia", value: "+7" },
  { code: "+254", label: "Kenya +254", value: "+254" },
  { code: "+686", label: "Kiribati +686", value: "+686" },
  { code: "+965", label: "Kuwait +965", value: "+965" },
  { code: "+996", label: "Kyrgyzstan +996", value: "+996" },
  { code: "+856", label: "Laos +856", value: "+856" },
  { code: "+371", label: "Latvia +371", value: "+371" },
  { code: "+961", label: "Lebanon +961", value: "+961" },
  { code: "+266", label: "Lesotho +266", value: "+266" },
  { code: "+231", label: "Liberia +231", value: "+231" },
  { code: "+218", label: "Libya +218", value: "+218" },
  { code: "+423", label: "Liechtenstein +423", value: "+423" },
  { code: "+370", label: "Lithuania +370", value: "+370" },
  { code: "+352", label: "Luxembourg +352", value: "+352" },
  { code: "+853", label: "Macau +853", value: "+853" },
  { code: "+389", label: "North Macedonia +389", value: "+389" },
  { code: "+261", label: "Madagascar +261", value: "+261" },
  { code: "+265", label: "Malawi +265", value: "+265" },
  { code: "+60", label: "Malaysia +60", value: "+60" },
  { code: "+960", label: "Maldives +960", value: "+960" },
  { code: "+223", label: "Mali +223", value: "+223" },
  { code: "+356", label: "Malta +356", value: "+356" },
  { code: "+692", label: "Marshall Islands +692", value: "+692" },
  { code: "+596", label: "Martinique +596", value: "+596" },
  { code: "+222", label: "Mauritania +222", value: "+222" },
  { code: "+230", label: "Mauritius +230", value: "+230" },
  { code: "+52", label: "Mexico +52", value: "+52" },
  { code: "+691", label: "Micronesia +691", value: "+691" },
  { code: "+373", label: "Moldova +373", value: "+373" },
  { code: "+377", label: "Monaco +377", value: "+377" },
  { code: "+976", label: "Mongolia +976", value: "+976" },
  { code: "+382", label: "Montenegro +382", value: "+382" },
  { code: "+1‑664", label: "Montserrat +1‑664", value: "+1‑664" },
  { code: "+212", label: "Morocco +212", value: "+212" },
  { code: "+258", label: "Mozambique +258", value: "+258" },
  { code: "+95", label: "Myanmar +95", value: "+95" },
  { code: "+264", label: "Namibia +264", value: "+264" },
  { code: "+674", label: "Nauru +674", value: "+674" },
  { code: "+977", label: "Nepal +977", value: "+977" },
  { code: "+31", label: "Netherlands +31", value: "+31" },
  { code: "+687", label: "New Caledonia +687", value: "+687" },
  { code: "+64", label: "New Zealand +64", value: "+64" },
  { code: "+505", label: "Nicaragua +505", value: "+505" },
  { code: "+227", label: "Niger +227", value: "+227" },
  { code: "+234", label: "Nigeria +234", value: "+234" },
  { code: "+850", label: "North Korea +850", value: "+850" },
  { code: "+47", label: "Norway +47", value: "+47" },
  { code: "+968", label: "Oman +968", value: "+968" },
  { code: "+92", label: "Pakistan +92", value: "+92" },
  { code: "+680", label: "Palau +680", value: "+680" },
  { code: "+970", label: "Palestine +970", value: "+970" },
  { code: "+507", label: "Panama +507", value: "+507" },
  { code: "+675", label: "Papua New Guinea +675", value: "+675" },
  { code: "+595", label: "Paraguay +595", value: "+595" },
  { code: "+51", label: "Peru +51", value: "+51" },
  { code: "+63", label: "Philippines +63", value: "+63" },
  { code: "+48", label: "Poland +48", value: "+48" },
  { code: "+351", label: "Portugal +351", value: "+351" },
  { code: "+1‑787", label: "Puerto Rico +1‑787", value: "+1‑787" },
  { code: "+974", label: "Qatar +974", value: "+974" },
  { code: "+262", label: "Réunion +262", value: "+262" },
  { code: "+40", label: "Romania +40", value: "+40" },
  { code: "+7", label: "Russia / Kazakhstan +7", value: "+7" },
  { code: "+250", label: "Rwanda +250", value: "+250" },
  { code: "+290", label: "Saint Helena +290", value: "+290" },
  { code: "+1‑869", label: "Saint Kitts and Nevis +1‑869", value: "+1‑869" },
  { code: "+1‑758", label: "Saint Lucia +1‑758", value: "+1‑758" },
  { code: "+508", label: "Saint Pierre and Miquelon +508", value: "+508" },
  { code: "+1‑784", label: "Saint Vincent & the Grenadines +1‑784", value: "+1‑784" },
  { code: "+685", label: "Samoa +685", value: "+685" },
  { code: "+378", label: "San Marino +378", value: "+378" },
  { code: "+239", label: "São Tomé and Príncipe +239", value: "+239" },
  { code: "+221", label: "Senegal +221", value: "+221" },
  { code: "+381", label: "Serbia +381", value: "+381" },
  { code: "+248", label: "Seychelles +248", value: "+248" },
  { code: "+232", label: "Sierra Leone +232", value: "+232" },
  { code: "+65", label: "Singapore +65", value: "+65" },
  { code: "+421", label: "Slovakia +421", value: "+421" },
  { code: "+386", label: "Slovenia +386", value: "+386" },
  { code: "+677", label: "Solomon Islands +677", value: "+677" },
  { code: "+252", label: "Somalia +252", value: "+252" },
  { code: "+27", label: "South Africa +27", value: "+27" },
  { code: "+82", label: "South Korea +82", value: "+82" },
  { code: "+211", label: "South Sudan +211", value: "+211" },
  { code: "+34", label: "Spain +34", value: "+34" },
  { code: "+94", label: "Sri Lanka +94", value: "+94" },
  { code: "+249", label: "Sudan +249", value: "+249" },
  { code: "+597", label: "Suriname +597", value: "+597" },
  { code: "+268", label: "Swaziland (Eswatini) +268", value: "+268" },
  { code: "+46", label: "Sweden +46", value: "+46" },
  { code: "+41", label: "Switzerland +41", value: "+41" },
  { code: "+963", label: "Syria +963", value: "+963" },
  { code: "+886", label: "Taiwan +886", value: "+886" },
  { code: "+992", label: "Tajikistan +992", value: "+992" },
  { code: "+255", label: "Tanzania +255", value: "+255" },
  { code: "+66", label: "Thailand +66", value: "+66" },
  { code: "+228", label: "Togo +228", value: "+228" },
  { code: "+690", label: "Tokelau +690", value: "+690" },
  { code: "+676", label: "Tonga +676", value: "+676" },
  { code: "+1868", label: "Trinidad and Tobago +1868", value: "+1868" },
  { code: "+216", label: "Tunisia +216", value: "+216" },
  { code: "+90", label: "Turkey +90", value: "+90" },
  { code: "+993", label: "Turkmenistan +993", value: "+993" },
  { code: "+1‑649", label: "Turks and Caicos Islands +1‑649", value: "+1‑649" },
  { code: "+688", label: "Tuvalu +688", value: "+688" },
  { code: "+256", label: "Uganda +256", value: "+256" },
  { code: "+380", label: "Ukraine +380", value: "+380" },
  { code: "+971", label: "United Arab Emirates +971", value: "+971" },
  { code: "+44", label: "United Kingdom +44", value: "+44" },
  { code: "+1", label: "United States / Canada +1", value: "+1" },
  { code: "+598", label: "Uruguay +598", value: "+598" },
  { code: "+998", label: "Uzbekistan +998", value: "+998" },
  { code: "+678", label: "Vanuatu +678", value: "+678" },
  { code: "+379", label: "Vatican City (Holy See) +379", value: "+379" },
  { code: "+58", label: "Venezuela +58", value: "+58" },
  { code: "+84", label: "Vietnam +84", value: "+84" },
  { code: "+967", label: "Yemen +967", value: "+967" },
  { code: "+260", label: "Zambia +260", value: "+260" },
  { code: "+263", label: "Zimbabwe +263", value: "+263" }
];
/* ================= COMPONENT ================= */
export default function ContactClient() {
  const searchParams = useSearchParams();
  const serviceFromURL = searchParams.get("service");

  const [selectedServices, setSelectedServices] = useState<ServiceOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  /* Preselect service from URL */
  useEffect(() => {
    if (serviceFromURL) {
      const matched = serviceOptions.find(
        (s) => s.value === serviceFromURL
      );
      if (matched) {
        setSelectedServices([matched]);
      }
    }
  }, [serviceFromURL]);

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 mt-16">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Get your <span className="text-blue-600">Free Quote</span> Today!
        </h1>
        <p className="mt-4 text-gray-600">
          Tell us about your project and we’ll get back to you shortly.
        </p>
      </div>

      {/* FORM */}
      <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">

          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Your Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition "
              />
            </div>
          </div>

          {/* PHONE NUMBER */}
          <div>
            <label className="block mb-2 text-sm font-medium">Phone</label>
            <div className="flex gap-3">
              {/* COUNTRY CODE */}
              <div className="w-36">
                <Select
                  options={countryOptions}
                  value={selectedCountry}
                  onChange={(option) => setSelectedCountry(option)}
                  placeholder="Code"
                  isSearchable
                  classNamePrefix="react-select"
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      backgroundColor: "#f3f4f6",
                      borderRadius: "0.75rem",
                      borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
                      minHeight: "3rem",
                      boxShadow: state.isFocused ? "0 0 0 2px #3b82f6" : "none",
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused ? "#bfdbfe" : "white",
                      color: "black",
                    }),
                  }}
                />
              </div>

              {/* PHONE INPUT */}
              <input
                type="text"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
               className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          {/* SERVICE */}
          <div>
            <label className="block mb-2 text-sm font-medium">Service</label>
            <Select
              options={serviceOptions}
              value={selectedServices}
              onChange={(val) => setSelectedServices(val as ServiceOption[])}
              isMulti
              isSearchable
              placeholder="Select Services"
              classNamePrefix="react-select"
              styles={{
                control: (base, state) => ({
                  ...base,
                  backgroundColor: "#f3f4f6",
                  borderRadius: "0.75rem",
                  borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
                  minHeight: "3rem",
                  boxShadow: state.isFocused ? "0 0 0 2px #3b82f6" : "none",
                }),
                multiValue: (base) => ({
                  ...base,
                  backgroundColor: "#3b82f6",
                  color: "white",
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  color: "white",
                }),
                multiValueRemove: (base) => ({
                  ...base,
                  color: "white",
                  ":hover": { backgroundColor: "#2563eb" },
                }),
              }}
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block mb-2 text-sm font-medium">Your Message</label>
            <textarea
              rows={5}
              placeholder="Tell us more about your project..."
              className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition "
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Submit
          </button>

        </form>
    </main>
  );
}
