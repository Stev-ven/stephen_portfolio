import "./ServicesStyles.css";

/*import frontend developer icon*/
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaPhp, FaDatabase,  FaLaravel } from 'react-icons/fa';


import React from 'react'

const ServicesContent = () => {
  return (
    <div className="services-container">
        <h1 className="services-heading">What I Can Do For You</h1>
        <div className="services-wrapper">
          <div className="frontend">
             <h1>Frontend</h1>
              <ul>
                <li>Designing and developing specialized web applications 
                tailored to specific business needs.</li>
                <li>Updating and maintaining websites to ensure they 
                remain functional and secure.</li>
                <li>Ensuring websites are accessible and functional across
                 various devices and screen sizes.</li>
                <li>Optimizing websites for performance, speed, and search
                 engine visibility. </li>
              </ul>
              <FaHtml5 className="icon" size={40} />
              <FaCss3Alt className="icon" size={40}/>
              <FaJs className="icon" size={40}/>
              <FaBootstrap className="icon" size={40}/>
              <FaReact className="icon" size={40}/>
             </div>
        
          

          <div className="backend">
             <h1>Backend</h1>
              <ul>
                <li>Designing and developing specialized web applications 
                tailored to specific business needs.</li>
                <li>Updating and maintaining websites to ensure they 
                remain functional and secure.</li>
                <li>Ensuring websites are accessible and functional across
                 various devices and screen sizes.</li>
                <li>Optimizing websites for performance, speed, and search
                 engine visibility. </li>
              </ul>
              <FaPhp className="icon" size={50}/>
              <FaDatabase className="icon" size={50}/>
             <FaLaravel className="icon" size={50}/>
          </div>
          
        </div>
        
    </div>
  )
}

export default ServicesContent