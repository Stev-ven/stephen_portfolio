import React from 'react';
import Navbar from '../components/Navbar';
import Heroimg2 from '../components/Heroimg2';
import Form from '../components/Form';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
        <Navbar />
        <Heroimg2 heading="CONTACT." text="Get in touch with me. "/>
        <Form />
        <Footer />
    </div>
  )
}

export default Contact