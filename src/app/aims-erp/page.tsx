"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import { Inter } from "next/font/google";

// Load Inter font
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function AimsErpPage() {
  const menuItems = [
    "Overview",
    "Benefits",
    "Features",
    "Customizable",
    "What's New",
    "Download Brochure",
  ];

  const [activeTab, setActiveTab] = useState("Overview");
     const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
            <>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>

            <p className="mb-4 text-justify">
                <strong>All-in-One Business Accounting & Inventory Solution</strong>
                <br />
                AIMS ERP is a robust Accounts and Inventory Management System
                specifically tailored to meet the needs of growing businesses in
                Pakistan. Built on international standards of bookkeeping and financial
                control, it offers a fully integrated platform to Plan, Source, Stock,
                Sell, Recover, and Analyze your entire business lifecycle. It seamlessly
                unifies your operations with your customers, suppliers, employees, and
                processes, unlocking hidden ROI and improving productivity across the
                organization.
            </p>

            <p className="mb-4 text-justify">
                <strong>Powerful Financial Management</strong>
                <br />
                The Accounts & Finance Module of AIMS ERP empowers businesses to
                maintain accurate records, manage transactions, and gain clear financial
                insights. It supports flexible GL accounts, journal vouchers, payment
                and receipt handling, and full bank reconciliation  allowing management
                to make informed, strategic decisions with confidence. With built-in
                compliance to international auditing standards, businesses can prepare
                reports that are audit-ready and fully transparent.
            </p>

            <p className="mb-4 text-justify">
                <strong>Smart Inventory Management</strong>
                <br />
                AIMS ERP offers FIFO-based inventory tracking with real-time updates and
                forecasting tools. The Inventory Module helps register, monitor, and
                optimize stock levels using multi-unit measurement, batch barcoding, and
                automated reorder suggestions. Whether managing a single warehouse or
                multiple locations, the system provides a centralized view of inventory
                and ensures efficient procurement-to-sales flow, minimizing losses and
                maximizing client satisfaction.
            </p>

            <p className="mb-4 text-justify">
                <strong>Efficient Purchase & Sales Operations</strong>
                <br />
                With a streamlined Purchase Order Management (POM) system, businesses
                can generate and track purchase orders, manage supplier records, and
                accurately calculate costs including on-invoice expenses. The Sales
                Invoice Management (SIM) module includes advanced tools for sales
                orders, profit margin analysis, discount handling, and real-time sales
                reporting. Admin rights ensure data security, while support for multiple
                languages and formats enhances billing flexibility.
            </p>

            <p className="mb-4 text-justify">
                <strong>Retail-Ready Point of Sale (POS)</strong>
                <br />
                Designed for retail environments, AIMS ERP includes a high-speed POS
                system that supports barcode scanners, receipt printers, cash drawers,
                and even credit/debit card processing. It synchronizes with accounting
                and inventory modules, enabling businesses to track stock, handle
                multiple payment types, and process transactions offline or in the
                cloud. POS reports offer valuable insights into customer behavior, sales
                trends, and inventory performance.
            </p>

            <p className="mb-4 text-justify">
                <strong>Advanced Reporting & Business Intelligence</strong>
                <br />
                The system includes over 100 customizable reports across Sales,
                Inventory, Warehousing, Accounts, and Expenses. With powerful filters
                and export capabilities, reports can be generated in PDF, Excel, Word,
                HTML, or image formats. Managers can quickly assess key metrics like
                profit margins, overdue invoices, and sales by product or salesman to
                make data-driven decisions that grow the business.
            </p>

            <p className="mb-4 text-justify">
                <strong>User-Centric Features & Simplicity</strong>
                <br />
                From role-based user access to easy document attachments, SMS device
                integration, and quick recovery tools, AIMS ERP is designed for
                usability and efficiency. It includes multi-level dashboards, reminder
                tools, and real-time insights all contributing to smoother operations.
                Whether a startup or a scaling enterprise, AIMS ERP offers a
                comprehensive, scalable, and cost-effective ERP experience.
            </p>
            </>
        );
      case "Benefits":
        return (
            <>
            <h2 className="text-2xl font-bold mb-4">Benefits</h2>

            <p className="mb-4 text-justify">
                <strong>Designed for Growing Businesses</strong>
                <br />
                AIMS ERP is tailored specifically for small to medium-sized businesses in Pakistan. 
                It delivers a complete suite of integrated tools for managing finances, inventory, 
                sales, and operations. With a user-friendly interface and localized features, it 
                simplifies complex processes and supports business growth without the overhead costs 
                of large-scale ERP systems.
            </p>

            <p className="mb-4 text-justify">
                <strong>Affordable and Scalable ERP Solution</strong>
                <br />
                Unlike many expensive ERP platforms, AIMS ERP offers an affordable pricing model 
                without compromising on features. Its modular design ensures businesses only pay 
                for what they use, while retaining the ability to scale seamlessly as operations 
                expand. Whether managing a single branch or multiple locations, AIMS adapts to the 
                organization’s needs over time.
            </p>

            <p className="mb-4 text-justify">
                <strong>Boosts Operational Efficiency</strong>
                <br />
                By automating core accounting and inventory tasks, AIMS ERP minimizes manual work 
                and reduces the chances of errors. From generating invoices and purchase orders to 
                tracking stock and calculating taxes, the software simplifies day-to-day operations 
                and enables faster decision-making.
            </p>

            <p className="mb-4 text-justify">
                <strong>Real-Time Visibility & Control</strong>
                <br />
                AIMS ERP provides real-time data insights across your entire business from sales 
                and inventory levels to customer balances and expenses. This transparency empowers 
                business owners to make informed decisions, avoid stock-outs, and control cash flow 
                with confidence. It also reduces dependency on external consultants for everyday 
                reporting.
            </p>

            <p className="mb-4 text-justify">
                <strong>Seamless Integration Across Departments</strong>
                <br />
                All modules in AIMS ERP including Accounts, Inventory, POS, Purchase, Sales, and 
                Reporting are interconnected. Data entered in one module automatically updates related 
                modules, eliminating duplication and ensuring consistency across the organization. 
                This integration enhances collaboration and streamlines workflows.
            </p>

            <p className="mb-4 text-justify">
                <strong>Localized Features for the Pakistani Market</strong>
                <br />
                AIMS ERP is built with a deep understanding of local business practices, tax structures, 
                and reporting needs. It supports Urdu and English interfaces, GST/SRB integration, and 
                prepares audit-ready financials aligned with Pakistani regulatory standards making 
                compliance easy and reliable.
            </p>

            <p className="mb-4 text-justify">
                <strong>Robust Data Security & User Access Control</strong>
                <br />
                The software includes role-based access controls, ensuring sensitive financial and 
                operational data is only accessible to authorized users. Permissions can be customized 
                for each employee, increasing accountability and reducing risks. Secure logins and 
                frequent backups ensure business continuity.
            </p>

            <p className="mb-4 text-justify">
                <strong>Customer Support & Training</strong>
                <br />
                AIMS ERP provides dedicated customer support and training resources. From initial setup 
                and migration to advanced usage queries, businesses receive expert guidance to ensure 
                smooth adoption and maximum ROI.
            </p>
            </>
        );
      case "Features":
        return (
            <div className="space-y-6">

            <h2 className="text-2xl font-bold mb-4">Features</h2>

            {/* Header */}
            <h3 className="text-xl font-semibold">AIMS ERP - Accounts & Inventory Management System</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <img src="/products/amis/Invoicing-Summary.png" className="rounded shadow" alt="Screenshot 1" />
                <img src="/products/amis/ProfitBooks-Dashboard.png" className="rounded shadow" alt="Screenshot 2" />
            </div>

            {/* Complete Package */}
            <h3 className="text-xl font-semibold mt-8">Complete Package for Any Business Domain</h3>
            <img src="/products/amis/maxresdefault.png" className="rounded shadow my-4" alt="Screenshot 3" />

            {/* Dashboard Overview */}
            <h3 className="text-xl font-semibold mt-8">Dashboard Overview</h3>

            <ul className="list-disc pl-6 space-y-2">
                <li>Real-Time Graphical View of Your Business</li>
                <li>Purchases & Sales Overview</li>
                <li>Active & Inactive Products</li>
                <li>Dead Sales Items</li>
                <li>Reorder Level Alerts</li>
                <li>Document Statistics</li>
                <li>Scheduled Tasks</li>
                <li>To-Do List</li>
            </ul>

            <img src="/products/amis/Dashboard.png" className="rounded shadow my-4" alt="Screenshot 4" />

            {/* Accounts Management */}
            <h3 className="text-2xl font-bold mt-10">Accounts Management (AM)</h3>

            <p className="mt-2 text-justify">
                The AIMS Accounts & Finance Module gives you complete control over financial decisions.
                Developed according to international bookkeeping standards, it ensures your reports meet
                audit requirements in Pakistan.
            </p>

            <p className="mt-2 text-justify">
                With AIMS ERP, businesses can reduce operational costs and increase profits with structured,
                automated financial processes.
            </p>

            <h4 className="text-xl font-semibold mt-4">Key Features of AM</h4>
            <ul className="list-disc pl-6 space-y-2">
                <li>Flexible Chart of Accounts & Sub-Accounts</li>
                <li>Payment & Receipt Vouchers</li>
                <li>Cash & Bank Vouchers with Cheque Management</li>
                <li>Journal Vouchers</li>
                <li>Create Custom Vouchers</li>
                <li>Scheduled / Recurring Transactions</li>
                <li>Reversing Entries</li>
                <li>Bulk Payment & Receipt Entry</li>
                <li>Bank Reconciliation</li>
                <li>Multi-Level Trial Balance</li>
                <li>Final Financial Statements</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <img src="/products/amis/key-account.png" className="rounded shadow" />
                <img src="/products/amis/feature-6.png" className="rounded shadow" />
            </div>

            {/* Inventory Management */}
            <h3 className="text-2xl font-bold mt-10">Inventory Management (IM)</h3>

            <p className="text-justify">
                A highly efficient FIFO-based inventory & warehouse solution. AIMS ERP helps manage stock,
                forecast inventory, and enhance warehouse operations with real-time tracking.
            </p>

            <h4 className="text-xl font-semibold mt-4">Key Features of IM</h4>
            <ul className="list-disc pl-6 space-y-2">
                <li>Dynamic Product Chart</li>
                <li>Multi Units of Measure</li>
                <li>Active & Inactive Products</li>
                <li>Unicode / Urdu Language Support</li>
                <li>Multiple Barcode Support</li>
                <li>Advanced Filtration Options</li>
                <li>Automated & Manual Reorder Management</li>
                <li>Inventory Optimization & Forecasting</li>
                <li>Multi Location / Warehouses</li>
                <li>Billing & Invoicing</li>
                <li>Purchase vs Sales Analysis</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <img src="/feature-7.png" className="rounded shadow" />
                <img src="/feature-8.png" className="rounded shadow" />
            </div>

            {/* Purchase Order Management */}
            <h3 className="text-2xl font-bold mt-10">Purchase Order Management (POM)</h3>

            <p className="text-justify">
                Smart purchase management with system-generated and manual POs, document tracking,
                expense control, and multi-UOM support.
            </p>

            <h4 className="text-xl font-semibold mt-4">Key Features of POM</h4>
            <ul className="list-disc pl-6 space-y-2">
                <li>Complete Purchase Management System</li>
                <li>Detailed & Summary Purchase Orders</li>
                <li>Track Purchase History</li>
                <li>Email POs to Suppliers</li>
                <li>Advanced Document Filtration</li>
                <li>On-Invoice Expense Allocation</li>
                <li>Manual & System Generated POs</li>
                <li>Attachments per PO/PI</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <img src="/feature-9.png" className="rounded shadow" />
                <img src="/feature-10.png" className="rounded shadow" />
            </div>

            {/* Sales Invoice Management */}
            <h3 className="text-2xl font-bold mt-10">Sales Invoice Management (SIM)</h3>

            <p className="text-justify">
                A powerful sales module with invoices, returns, profit calculations, and admin-controlled
                invoice permissions.
            </p>

            <h4 className="text-xl font-semibold mt-4">Key Features of SIM</h4>
            <ul className="list-disc pl-6 space-y-2">
                <li>Sales Orders & Invoices</li>
                <li>Sales Returns</li>
                <li>Multi UOM</li>
                <li>On-Invoice Expense Control</li>
                <li>Salesman Credit Balance Control</li>
                <li>Profit Calculator</li>
                <li>Multi-Language Invoice Prints</li>
                <li>Admin Invoice Edit/Delete Rights</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <img src="/feature-11.png" className="rounded shadow" />
                <img src="/feature-12.png" className="rounded shadow" />
            </div>

            {/* POS */}
            <h3 className="text-2xl font-bold mt-10">Point of Sale (POS)</h3>

            <p className="text-justify">
                A fast, modern POS system fully integrated with accounting, inventory, and reporting.
            </p>

            <h4 className="text-xl font-semibold mt-4">Key Features of POS</h4>
            <ul className="list-disc pl-6 space-y-2">
                <li>Multi-Store Support</li>
                <li>Multiple Payment Types</li>
                <li>Barcode Scanner Support</li>
                <li>Receipt & Invoice Printing</li>
                <li>Credit/Debit Card Support</li>
                <li>Offline & Cloud Mode</li>
                <li>Hold/Resume Invoice</li>
                <li>Invoice History</li>
            </ul>

            <img src="/feature-13.png" className="rounded shadow my-4" />

            {/* Reports */}
            <h3 className="text-2xl font-bold mt-10">Reports & Business Intelligence</h3>

            <p className="text-justify">
                Over 100 detailed business reports with advanced filtering, financial statements,
                and export options (PDF, XLSX, CSV, HTML, Image).
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
                <img src="/feature-14.png" className="rounded shadow" />
                <img src="/feature-15.png" className="rounded shadow" />
                <img src="/feature-16.png" className="rounded shadow" />
                <img src="/feature-17.png" className="rounded shadow" />
            </div>

            {/* Key Features Section */}
            <h3 className="text-2xl font-bold mt-10">Key Features Overview</h3>

            <h4 className="text-xl font-semibold mt-4">Master</h4>
            <ul className="list-disc pl-6 space-y-1">
                <li>Product Chart</li>
                <li>Group & Category Creation</li>
                <li>Units of Measure</li>
                <li>Chart of Accounts</li>
                <li>Warehouse Creation</li>
                <li>Supplier & Customer Management</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6">Accounts</h4>
            <ul className="list-disc pl-6 space-y-1">
                <li>Cash & Bank Vouchers</li>
                <li>Journal Vouchers</li>
                <li>Service Vouchers</li>
                <li>Bank Book / Cash Book</li>
                <li>Ledger Reports</li>
                <li>Expense Summary</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6">Purchase & Sales</h4>
            <ul className="list-disc pl-6 space-y-1">
                <li>Sales & Purchase Orders</li>
                <li>Sales Tax Invoices</li>
                <li>Stock Transfers</li>
                <li>Bulk Price Updates</li>
                <li>Stock Adjustments</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6">Tools</h4>
            <ul className="list-disc pl-6 space-y-1">
                <li>Quick Search</li>
                <li>User Maintenance</li>
                <li>SMS Device Connection</li>
                <li>Application Settings</li>
                <li>Email Integration</li>
            </ul>

            </div>
        );
      case "Customizable":
        return (
            <div>
            <h2 className="text-2xl font-bold mb-4">Customizable</h2>

            <p className="mb-4 text-justify">
                <strong>Tailored to Fit Your Unique Business Needs</strong>
                <br />
                Every business operates differently, and AIMS (Standard) understands that one-size-fits-all solutions often fall short. 
                That’s why the system is built with customization flexibility at its core, empowering businesses to shape the software 
                according to their exact workflows and preferences.
            </p>

            <p className="mb-4 text-justify">
                From the very first setup, AIMS (Standard) allows you to choose and activate only the modules relevant to your operations
                be it Accounting, Inventory, POS, Purchase, Sales, or Reporting. As your business grows, you can add more modules without 
                needing a complete system overhaul.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Flexible Chart of Accounts & Reporting</h3>
            <p className="mb-4 text-justify">
                The system supports custom Chart of Accounts (COA) structures, allowing organizations to align their financial records 
                with internal policies or external regulatory requirements. Reporting formats can also be customized, including branded 
                invoice templates, tax summaries, and multi-level dashboards tailored to the management team’s KPIs.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">User Roles, Access & Workflows</h3>
            <p className="mb-4 text-justify">
                With customizable user roles and permissions, you can control who accesses what within the platform. You can also define 
                approval hierarchies, set up email alerts for specific actions, and create automated workflows that match your internal 
                processes whether for order approvals, stock transfers, or payment verifications.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Field Customization & Localization</h3>
            <p className="mb-4 text-justify">
                Businesses can rename fields, add custom fields to forms, and even hide or show data based on user type. The software 
                supports both Urdu and English, and localized tax rules (GST/SRB) can be configured based on region and industry. Currency, 
                units of measurement, and barcode formats are all adjustable.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Built for Adaptability</h3>
            <p className="mb-4 text-justify">
                Whether you are a retailer, wholesaler, manufacturer, or service provider, AIMS (Standard) provides the flexibility 
                to adapt without needing any coding knowledge. Our technical team can also offer advanced customizations on request, 
                helping businesses meet complex operational or compliance needs with ease.
            </p>
            </div>
        );
      case "What's New":
        return (
            <div>
            <h2 className="text-2xl font-bold mb-4">What's New</h2>

            <p className="mb-6 font-semibold">What’s New in AIMS (Standard)</p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                Revamped user interface with a fresh, modern, and intuitive layout for easier navigation across all devices.
                </li>
                <li>
                Advanced reporting engine with 100+ customizable reports, filters, and export options (PDF, Excel, Word).
                </li>
                <li>
                Smart document attachment system to link invoices, receipts, and contracts directly with transactions.
                </li>
                <li>
                Enhanced security with role-based access control, OTP verification, login history, and auto session timeout.
                </li>
                <li>
                Improved POS integration with faster barcode scanning, real-time sync, and offline support.
                </li>
                <li>
                Auto reorder alerts based on stock thresholds and intelligent purchase suggestions.
                </li>
                <li>
                AI-powered insights to predict sales trends, overdue payments, and slow-moving inventory.
                </li>
                <li>
                Multi-language interface (English & Urdu) for broader accessibility and ease of use.
                </li>
                <li>
                Email and SMS notification features for instant updates on purchases, sales, and payments.
                </li>
                <li>
                Custom field creation in sales, purchase, customer, and product forms without development effort.
                </li>
            </ul>
            </div>
        );
      case "Download Brochure":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Download Brochure</h2>
            <p className="text-gray-700 leading-relaxed">
              Download the official AIMS ERP brochure to explore all modules,
              benefits, pricing, and technical specs.
            </p>

            <a
              href="/brochures/aims-erp.pdf"
              download
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
            >
              Download PDF Brochure
            </a>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`bg-[#f4f7fb] mt-10 min-h-screen ${inter.className}`}>
      <Navbar />

      {/* ---------- HERO SECTION ---------- */}
      <motion.section
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AIMS ERP</h1>
          <p className="text-lg mb-6 text-justify">
            Discover NetRoots Technologies AIMS ERP the ultimate business accounting, inventory, and sales management solution for small and growing businesses in Pakistan.
          </p>
          <motion.a
            href="/AIMS-ERP-Brochure.pdf"
            download
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            Download Brochure
          </motion.a>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/products/amis/Dashboard.png"
            alt="AIMS ERP Dashboard"
            className="w-full md:w-4/5 rounded-xl shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* ---------- MAIN SECTION ---------- */}
      <section className="px-6 md:px-20 py-12 flex flex-col md:flex-row gap-10">
        
        {/* SIDEBAR */}
        <motion.div
          className="w-full md:w-1/4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-b from-blue-700 to-blue-700 shadow-lg rounded-xl p-4 sticky top-24">
                {menuItems.map((item) => (
                    <button
                    key={item}
                    onClick={() => setActiveTab(item)}
                    className={`w-full text-left px-4 py-3 mb-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${
                        activeTab === item
                        ? "bg-gradient-to-r from-indigo-500 to-blue-400 text-white font-bold border-l-4 border-white shadow-lg"
                        : "text-white bg-transparent hover:bg-white hover:text-blue-700"
                    }`}
                    >
                    {item}
                    
                    </button>
                ))}
                </div>

        </motion.div>

        {/* CONTENT */}
        <motion.div
        className="w-full md:w-3/4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
        <motion.div
            key={activeTab} // ensures animation on tab change
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className={`bg-white p-8 rounded-xl shadow-lg border-l-4 ${
            activeTab === "Overview"
                ? "border-blue-600"
                : activeTab === "Benefits"
                ? "border-blue-600"
                : activeTab === "Features"
                ? "border-blue-600"
                : activeTab === "Customizable"
                ? "border-blue-600"
                : activeTab === "What's New"
                ? "border-blue-600"
                : "border-blue-600"
            }`}
        >
            {renderContent()}
        </motion.div>
        </motion.div>


      </section>

      <ContactUs />
      <Footer />
    </div>
  );
}
