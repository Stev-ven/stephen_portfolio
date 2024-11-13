import "./HeroimageStyles.css";
import { Link } from "react-router-dom";

import React from 'react';
import BgImg from "../assets/homeimage.jpg";

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img"
         src={BgImg} alt="bg-img"/>
      </div>
      <div className="content">
        <p>Hello, I'M STEPHEN.</p>
        <h1>fullStack developer.</h1>
        <div className="btn-container">
          <Link to="/projects" className="btn">Projects</Link>
          <Link to="/contact" className=" btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimage