import "./FooterStyles.css"
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <p><FaHome size={20} style={{ color: 'white', marginRight: "2rem" }} />
                            Matthews,NC</p>
                        <div>


                        </div>
                        <div className="phone">
                            <h4> <FaPhone size={20} style={{ color: 'white', marginRight: "2rem" }} />
                                980-310-0533</h4>
                        </div>
                        <div className="Email">
                            <h4><FaMailBulk size={20} style={{ color: 'white', marginRight: "2rem" }} />
                                chambersg16@yahoo.com</h4>

                        </div>


                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>I am Greg Chambers. I enjoy dicussing new projects and design challanges.</p>
                    <div className="social">
                        <FaGithub
                        size={30}
                        style={{color: '#fff', marginRight: "1rem"}}/>
                        <FaLinkedin
                        size={30}
                        style={{color: '#fff', marginRight: "1rem"}}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer