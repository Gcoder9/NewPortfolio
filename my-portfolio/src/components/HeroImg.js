import "./HeroImgstlye.css"
import React from "react"


import img from '../assets/code.jpg'
import { Link } from "react-router-dom"

function HeroImg() {
  return (
    <div className="hero">
    <div className="mask">
        <img className="img"
        src={img} alt='img'/>
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER</p>
            <h1>React Developer</h1>
       
        <Link to='/project'
        className="btn">Projects</Link>
         <Link to='/contact'
        className="btn btn-light">Contact</Link>
        </div>
         </div>
  )
}

export default HeroImg