import Hero from "@/components/Hero";
import MonthSpecialEvent from "@/components/MonthSpecialEvent";
import CuratedGallery from "@/components/CuratedGallery";
import WhatWeOffer from "@/components/WhatWeOffer";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import SpecialOfferModal from "@/components/SpecialOfferModal";
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
      <SpecialOfferModal />
      <Hero />
      <MonthSpecialEvent />
      <CuratedGallery />
      <WhatWeOffer />
      <Testimonial />
      <About />
    </main>
  );
};

export default HomePage;