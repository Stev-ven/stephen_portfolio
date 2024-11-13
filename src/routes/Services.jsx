import Navbar from '../components/Navbar';
import Heroimg2 from '../components/Heroimg2';
import Footer from '../components/Footer';
import React from 'react'
import ServicesContent from '../components/ServicesContent';


const Services = () => {
  return (
    <div>
        <Navbar />
        <Heroimg2 heading="Services." text="What I Can Do For You!."/>
        <ServicesContent />
        <Footer />
    </div>
    
  )
}

export default Services