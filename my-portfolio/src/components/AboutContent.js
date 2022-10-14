import "./AboutContentStyle.css"
import { Link } from "react-router-dom"
import React from 'react'
import Me from "../assets/meLink.jpg"
function AboutContent() {
  return (
    <div className="about">
        <div className="left">
<h1>Who Am I?</h1>
<img src={Me} alt=""></img>
<p>Im a software developer. I create responsive secure websites for my clients.</p>
<Link to="/contact">
    <button className="btn">Contact</button>
    </Link>
        </div>

        <div className="right">

        </div>
    </div>
  )
}

export default AboutContent