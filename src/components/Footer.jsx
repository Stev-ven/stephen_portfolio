import "./FooterStyles.css";
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";


import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
       <div className="footer-container">
           <div className="left-footer">
                <div className="location">
                  <FaHome size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                  <div>
                      {/* <p>Rx Health Info Systems</p> */}
                      <p>Accra, Ghana</p>
                  </div>
                </div> 
                <div className="phone">
                  <FaPhone size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                  <div>
                      <p> +233 559 128 632 </p>
                      <p> +233 501 309 911 </p>
                  </div> 
                </div>
                <div className="email">
                  <FaMailBulk size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                      <p>wajastephenofficial@gmail.com</p>
                    </div>    
                  </div>         
           </div>
           <div className="right-footer">
               <h4>About me</h4>
               <p>  Hi! I'm Stephen, a passionate full-stack developer with 
                    experience in both front-end and back-end development. 
                    I love creating dynamic, user-friendly web applications
                    that deliver exceptional user experiences. You have a project in mind? Let's connect and bring your ideas to life! 
               </p>
               <div className="social-icons">
               <a href="https://www.linkedin.com/in/stephen-waja-a40a50220/">
               <FaLinkedin size={30} style={{color: "#fff", marginRight: "2rem"}}/></a>
               <a href="https://github.com/Stev-ven">
               <FaGithub size={30} style={{color: "#fff", marginRight: "2rem"}}/></a>
               <FaFacebook size={30} style={{color: "#fff", marginRight: "2rem"}}/>
               
               
               </div>
           </div>
        </div> 
    </div>
  )
}
export default Footer