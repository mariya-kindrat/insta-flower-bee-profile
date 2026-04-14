import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { CameraIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { RootLayoutProps } from "@/types";

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
  title: {
    default: "Flower Bee Boutique | Wedding Florist & Event Decor in Connecticut",
    template: "%s | Flower Bee Boutique",
  },
  description:
    "Flower Bee Boutique by Iryna Melnyk offers elegant wedding florals, bouquets, and event decor in Connecticut, including Stamford and Shelton.",
  alternates: { canonical: "/" },
  icons: "/images/bee_BLACK.svg",
};
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-ivory text-brown font-sans min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <footer className="bg-ivory pt-10 md:pt-16 pb-6 md:pb-12 border-t border-hairline/60 mt-auto">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-8 lg:gap-10 mb-10 md:mb-16">
              {/* Brand Identity */}
              <div className="flex flex-col gap-3.5 order-1">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-serif text-2xl md:text-xl font-bold tracking-wider text-graphite hover:text-forest transition-all duration-300 group"
                >
                  <span>FLOWER</span>
                  <Image
                    src="/images/bee_BLACK.svg"
                    alt="Logo"
                    width={20}
                    height={20}
                    className="group-hover:rotate-12 transition-transform duration-500 md:w-[18px] md:h-[18px]"
                  />
                  <span>BEE</span>
                </Link>
                <p className="text-graphite/70 md:text-graphite/60 text-[14px] md:text-[13px] leading-relaxed max-w-[280px] md:max-w-[240px] font-sans">
                  Romantic, garden-style florals for modern weddings and refined celebrations.
                </p>
                <Link
                  href="/contact"
                  className="md:hidden mt-2 inline-flex items-center justify-center px-8 py-3 bg-forest text-ivory text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-forest/90 transition-all duration-300 shadow-sm active:scale-[0.98]"
                >
                  Inquire Now
                </Link>
              </div>

              {/* Navigation */}
              <div className="order-4 md:order-2">
                <h3 className="font-serif text-[11px] md:text-[10px] font-bold text-graphite/40 mb-4 md:mb-4 tracking-[0.2em] uppercase">Curation</h3>
                <ul className="space-y-2.5 md:space-y-2">
                  <li>
                    <Link href="/portfolio" className="text-graphite/80 md:text-graphite/70 hover:text-forest transition-colors text-[11px] md:text-[10px] uppercase tracking-[0.15em] font-medium">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-graphite/80 md:text-graphite/70 hover:text-forest transition-colors text-[11px] md:text-[10px] uppercase tracking-[0.15em] font-medium">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-graphite/80 md:text-graphite/70 hover:text-forest transition-colors text-[11px] md:text-[10px] uppercase tracking-[0.15em] font-medium">
                      Our Story
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Connect */}
              <div className="order-3 md:order-3">
                <h3 className="font-serif text-[11px] md:text-[10px] font-bold text-graphite/40 mb-4 md:mb-4 tracking-[0.2em] uppercase">Connect</h3>
                <ul className="space-y-3 md:space-y-3">
                  <li>
                    <a
                      href="mailto:instaFlowerbee@gmail.com"
                      className="text-graphite/80 md:text-graphite/70 hover:text-forest transition-colors text-[14px] md:text-[13px] flex items-center gap-3 md:gap-2 group font-sans"
                    >
                      <EnvelopeIcon className="h-4 w-4 md:h-3.5 md:w-3.5 text-graphite/30 group-hover:text-forest transition-colors" />
                      <span>flowerbeeboutique@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/instaflowerbee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-graphite/80 md:text-graphite/70 hover:text-forest transition-colors text-[14px] md:text-[13px] flex items-center gap-3 md:gap-2 group font-sans"
                    >
                      <CameraIcon className="h-4 w-4 md:h-3.5 md:w-3.5 text-graphite/30 group-hover:text-forest transition-colors" />
                      <span>@instaflowerbee</span>
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-graphite/80 md:text-graphite/70 hover:text-forest transition-colors text-[14px] md:text-[13px] flex items-center gap-3 md:gap-2 group font-sans"
                    >
                      <MapPinIcon className="h-4 w-4 md:h-3.5 md:w-3.5 text-graphite/30 group-hover:text-forest transition-colors" />
                      <span>Connecticut, USA</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Philosophy */}
              <div className="order-5 md:order-4">
                <h3 className="font-serif text-[11px] md:text-[10px] font-bold text-graphite/40 mb-3 md:mb-4 tracking-[0.2em] uppercase">Philosophy</h3>
                <p className="text-graphite/60 md:text-graphite/50 text-[14px] md:text-[13px] leading-relaxed font-serif mb-4 md:mb-4">
                  Capturing the fleeting beauty of nature&apos;s most romantic moments with intentional design.
                </p>
                <Link
                  href="/contact"
                  className="hidden md:inline-block border-b border-forest/20 text-forest/80 text-[10px] uppercase tracking-[0.25em] font-bold pb-0.5 hover:border-forest hover:text-forest transition-all"
                >
                  Inquire
                </Link>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="pt-6 border-t border-hairline/40 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
              <p className="text-graphite/40 md:text-graphite/30 text-[10px] md:text-[9px] uppercase tracking-[0.2em] text-center md:text-left">
                &copy; {new Date().getFullYear()} Flower Bee. Est. 2018.
              </p>
              <div className="flex items-center gap-10 md:gap-8">
                <Link href="#" className="text-graphite/30 md:text-graphite/20 hover:text-graphite transition-colors text-[10px] md:text-[8px] uppercase tracking-[0.15em]">
                  Privacy
                </Link>
                <Link href="#" className="text-graphite/30 md:text-graphite/20 hover:text-graphite transition-colors text-[10px] md:text-[8px] uppercase tracking-[0.15em]">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;