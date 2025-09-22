import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond,  Inter } from "next/font/google";
import { CameraIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Header from "@/components/Header";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});



export const metadata: Metadata = {
  title: "Iryna Melnyk · Florist & More",
  description: "Timeless flowers for heartfelt moments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-ivory text-brown font-sans min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <footer className="bg-ivory py-12 border-t border-hairline mt-auto">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <p className="text-graphite text-lg md:text-xl font-medium tracking-wideish mb-2">
                  &copy; {new Date().getFullYear()} Iryna Melnyk · Florist
                </p>
                <p className="text-graphite/70 text-sm md:text-base">
                  Timeless flowers for heartfelt moments
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 text-graphite">
                <a
                  href="mailto:irynamelnyk@gmail.com"
                  className="hover:text-forest transition-colors duration-300 flex items-center gap-3 text-base md:text-lg font-medium group focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-ivory rounded-sm p-2"
                >
                  <EnvelopeIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>Email</span>
                </a>

                <a
                  href="tel:+111335454646"
                  className="hover:text-forest transition-colors duration-300 flex items-center gap-3 text-base md:text-lg font-medium group focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-ivory rounded-sm p-2"
                >
                  <PhoneIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>Phone</span>
                </a>

                <a
                  href="https://www.instagram.com/instaflowerbee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-forest transition-colors duration-300 flex items-center gap-3 text-base md:text-lg font-medium group focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-ivory rounded-sm p-2"
                >
                  <CameraIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}