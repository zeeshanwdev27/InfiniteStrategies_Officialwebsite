import HeroSection from './HeroSection.jsx'
import About from './About.jsx'
import WhatWeDo from './WhatWeDo.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import { useEffect } from 'react'

function Home() {
    useEffect(() => {
    // Scroll smoothly to HeroSection on refresh
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback: scroll to top if hero not found
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <Navbar/>
      <div id="hero-section">
      <HeroSection/>

      </div>
      <About/>
      <WhatWeDo/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default Home
