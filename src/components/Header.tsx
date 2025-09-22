'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
          {/* Text Logo */}
          <Link
            href="/"
            className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-graphite hover:text-forest transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-ivory rounded-sm"
            onClick={closeMenu}
          >
            Iryna Melnyk
          </Link>

          {/* Center Logo Image */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" onClick={closeMenu} className="focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-ivory rounded-sm">
              <Image
                src="/images/logo.png"
                alt="Iryna Melnyk Florist Logo"
                width={80}
                height={80}
                className="hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-base lg:text-lg font-medium text-graphite hover:text-forest transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-ivory rounded-sm px-2 py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
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

        {/* Mobile Navigation Menu */}
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
                  className="text-lg font-medium text-graphite hover:text-forest transition-colors duration-300 py-2 px-4 rounded-sm hover:bg-champagne focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-ivory"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;