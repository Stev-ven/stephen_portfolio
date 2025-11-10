import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import pic from "../assets/dp.png";
import pic2 from "../assets/dp.png"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>
                Hello! I'm Stephen, Innovative and detail-oriented Full-Stack 
                Web Developer 
                with hands-on experience building scalable, high-performance 
                applications using React, Laravel, and modern development tools.
                Skilled in developing user-friendly interfaces, 
                optimizing backend systems, and delivering solutions that create 
                real-world impact. Passionate about clean code, problem-solving, 
                and continuous improvement.
            </p>
            <Link to="/contact">
               <button className="btn">Contact</button> 
            </Link>
        </div>
       
        <div className="right">
            <div className="img-container">
               <div className="img-stack top">
                   <img src={pic} className="img" alt="true"/>
               </div> 
               <div className="img-stack bottom">
                   <img src={pic2} className="img" alt="true"/>
               </div> 
            </div>
           
           
        </div>
    </div>
  )
}

export default AboutContent