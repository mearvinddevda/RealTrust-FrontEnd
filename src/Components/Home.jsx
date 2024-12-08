import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Services from './Services'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Projects from './Projects'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <AboutUs/>
      <Projects />
      <Footer/>

    </div>
  )
}

export default Home
