'use client';

import Hero from "@/components/landing/Hero";
import Navbar from "@/components/ui/Navbar";

/**
 * Main Home page component rendering the floating Navbar and all portfolio sections.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
