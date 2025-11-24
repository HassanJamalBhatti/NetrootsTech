import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fonts with CSS variable support
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Metadata with favicon support
export const metadata = {
  title: "NetrootsTechnologies",
  description: "Grow Your Business With Us",
 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
