import Hero from "@/components/Hero";
import WhatWeOffer from "@/components/WhatWeOffer";
import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Florist & Wedding Decorator | Iryna Melnyk",
  description:
    "Connecticut florist creating timeless floral designs and wedding decorations. Make your special day unforgettable with flowers by Iryna Melnyk.",
  alternates: { canonical: "/" },
  icons: "images/logo1.png",
};

const HomePage = () => {
  return (
    <main>
      <Hero />
      <WhatWeOffer />
      <About />
    </main>
  );
};

export default HomePage;