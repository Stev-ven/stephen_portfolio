import "./SkillsCardStyles.css";
import { Link } from "react-router-dom";

import React from 'react'

const SkillsCard = () => {
  return (
    <div className="skills">
        <div className="card-container">
           <div className="card">
             <h3>- Frontend -</h3>
             <span className="bar"></span>
             <p className="btc">CSS</p>
             <p className="btc">javaScript</p>
             <p className="btc">React.js</p>
             <p className="btc">Next.js</p>
             <p className="btc">Tailwind/Bootstrap</p>
             <Link to ="/contact" className="btn">Hire Me</Link>
           </div>
           <div className="card">
             <h3>- Backend -</h3>
             <span className="bar"></span>
             <p className="btc">PHP</p>
             <p className="btc">Laravel</p>
             <p className="btc">MySQL</p>
             <Link to ="/contact" className="btn">Hire Me</Link>
           </div>
           {/* <div className="card">
             <h3>- Frontend -</h3>
             <span className="bar"></span>
             <p className="btc">CSS</p>
             <p className="btc">javaScript</p>
             <p className="btc">React.js</p>
             <p className="btc">Tailwind/Bootstrap</p>
             <Link to ="/contact" className="btn">Hire Me</Link>
           </div> */}
           
        </div>
    </div>
  )
}

export default SkillsCard