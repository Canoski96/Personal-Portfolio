"use client";
import About from "./components/aboutSection/About";
import Contact from "./components/contactSection/Contact";
import Hero from "./components/heroSection/Hero";
import Projects from "./components/projectSection/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
