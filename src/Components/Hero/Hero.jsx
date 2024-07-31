import React from "react";
import './Hero.css'
import profile_img from '../../assets/profile2.jpg'

const Hero = () => {
  return(
    <div id="hero" className="hero">
        <img src={profile_img} alt="" className="heroImg"  />
        <h1><span>I'm Fahad Ahmed,</span>  frontend developer from Pakistan</h1>
        <p>I am a dedicated and skilled Frontend Developer and Graphic designer with 2 years of professional experience in creating dynamic <br />and responsive web applications and also Gaming logos and animations,. Proficient in HTML, CSS, JavaScript, and modern frontend frameworks like React. </p>
        <div className="hero-action">
        <div className="hero-connect" onClick={() => window.location.href= '#contact'}>Connect with me</div>
        <div className="hero-resume">My Resume</div>

        </div>


    </div>
  )
}
export default Hero