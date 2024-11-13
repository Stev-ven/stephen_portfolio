import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';
import Heroimg2 from '../components/Heroimg2';

const About = () => {
  return (
    <div>
      <Navbar />
       <Heroimg2 heading="ABOUT ME" text="Im a fullstack developer"/>
      <AboutContent />
      <Footer />
    </div>
  )
}
export default About