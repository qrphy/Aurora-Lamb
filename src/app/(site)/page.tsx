import React from "react";
import Header from "../../components/layout/Header";
import Hero from "../../components/sections/Hero";
import Benefits from "../../components/sections/Benefits";
import Models from "../../components/sections/Models";
import Comparison from "../../components/sections/Comparison";
import About from "../../components/sections/About";
import BlogPreview from "../../components/sections/BlogPreview";
import FAQ from "../../components/sections/FAQ";
import FinalCTA from "../../components/sections/FinalCTA";
import Footer from "../../components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Benefits />
      <Models />
      <Comparison />
      <About />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
