"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, CameraIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },

  ];

  return (
    <header className="relative bg-ivory border-b border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex items-center justify-between py-6 md:py-8">
          <Link
            href="/"
            className="flex items-center gap-3 font-serif text-4xl md:text-4xl font-bold tracking-wide text-graphite hover:text-forest transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-ivory rounded-sm"
            onClick={closeMenu}
          >
            <span>FLOWER</span>
            <Image
              src="/images/bee_BLACK.svg"
              alt="Flowerbee Boutique Logo"
              width={40}
              height={40}
              className="hover:scale-105 transition-transform duration-300"
              priority
            />
            <span>BEE</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-base lg:text-lg font-bold text-graphite hover:text-forest transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-ivory rounded-sm px-2 py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            {/* <a
              href="https://www.instagram.com/instaflowerbee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-forest transition-colors duration-300 flex items-center gap-3 text-base md:text-lg font-bold group focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-ivory rounded-sm p-2"
            >
              <CameraIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              <span>Instagram</span>
            </a> */}
          </nav>


          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-graphite hover:text-forest transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-ivory rounded-sm"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <nav className="py-4 border-t border-hairline">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-lg font-bold text-graphite hover:text-forest transition-colors duration-300 py-2 px-4 rounded-sm hover:bg-champagne focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-ivory"
                >

                  {item.label}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/instaflowerbee"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="text-lg font-bold text-graphite hover:text-forest transition-colors duration-300 py-2 px-4 rounded-sm hover:bg-champagne focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-ivory flex items-center gap-3"
              >
                <CameraIcon className="h-6 w-6" />
                <span>Instagram</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;