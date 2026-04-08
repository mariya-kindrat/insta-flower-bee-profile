import Hero from "@/components/Hero";
import CuratedGallery from "@/components/CuratedGallery";
import WhatWeOffer from "@/components/WhatWeOffer";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Florist & Wedding Decorator | Flowerbee Boutique",
  description:
    "Connecticut florist creating timeless floral designs and wedding decorations. Make your special day unforgettable with flowers by Iryna Melnyk.",
  alternates: { canonical: "/" },
  icons: "images/logo1.png",
};

const HomePage = () => {
  return (
    <main>
      <Hero />
      <CuratedGallery />
      <WhatWeOffer />
      <Testimonial />
      <About />
    </main>
  );
};

export default HomePage;