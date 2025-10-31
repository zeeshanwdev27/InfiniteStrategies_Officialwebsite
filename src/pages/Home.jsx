import HeroSection from './HeroSection.jsx'
import About from './About.jsx'
import WhatWeDo from './WhatWeDo.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <WhatWeDo/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default Home
