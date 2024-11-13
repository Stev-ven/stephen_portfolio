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
                Hello! I'm Stephen, a recent graduate in Electrical and
                Electronics Engineering from Kwame Nkrumah University 
                of Science and Technology with a strong passion for web 
                development. As a creative and detail-oriented Full-stack 
                Developer, I specialize in building user-friendly, visually
                appealing websites and efficient server-side services. I
                have experience in both frontend and backend development
                using HTML, CSS, JavaScript, React, PHP, Laravel, and MySQL. 
                Skilled in responsive design, database management,
                version control, and API integration, I’m dedicated to 
                staying current with new technologies and delivering high-quality
                projects on time. Excited to bring my expertise to a dynamic 
                and collaborative development team!
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