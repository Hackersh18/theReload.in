import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex flex-col flex-1">
        {/* Hero Banner Section */}
        <Hero />

        {/* Services List Grid */}
        <Services />

        {/* Portfolio Filter Grid */}
        <Projects />

        {/* About details & stats */}
        <About />

        {/* Blog listings */}
        <Blogs />

        {/* Call to action Contact Form */}
        <Contact />
      </main>

      {/* Footer Branding & Links */}
      <Footer />
    </>
  );
}
