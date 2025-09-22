"use client";

import { EnvelopeIcon, PhoneIcon, CameraIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-[#faf6f0] py-6 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-700 text-sm">
          &copy; {new Date().getFullYear()} Iryna Melnyk · Florist
        </p>

        <div className="flex gap-6 text-gray-700">
          <a
            href="mailto:irynamelnyk339@gmail.com"
            className="hover:text-amber-800 flex items-center gap-2"
          >
            <EnvelopeIcon className="h-5 w-5" />
            <span className="hidden sm:inline">Email</span>
          </a>

          <a
            href="tel:+14756554646"
            className="hover:text-amber-800 flex items-center gap-2"
          >
            <PhoneIcon className="h-5 w-5" />
            <span className="hidden sm:inline">Phone</span>
          </a>

          <a
            href="https://www.instagram.com/instaflowerbee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 flex items-center gap-2"
          >
            <CameraIcon className="h-5 w-5" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;