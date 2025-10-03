
import Hero from "@/components/Hero";
import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Florist & Wedding Decorator | Iryna Melnyk",
  description:
    "Connecticut florist creating timeless floral designs and wedding decorations. Make your special day unforgettable with flowers by Iryna Melnyk.",
  alternates: { canonical: "/" },
};
export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}