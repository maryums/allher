import React, { useState } from 'react'
import './nav.css';
import logo from '../images/all-her-logo.png'

const Nav = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [isLiCliced, setIsLiClicke] = useState(false)

    const handleClick = () => {
        setIsNavExpanded(!isNavExpanded)

    }
    const handleLiClick = () => {
        setIsLiClicke(!isLiCliced)
        console.log("opposite clicked")
    }

    return (
        <div>
            <nav>
                <div className="inner-nav">

                    <div className="brand">
                        <a href="index.html">
                            <img className="nav-brand" src={logo} /></a>
                        <div
                            className={isNavExpanded ? "burger open" : "burger"}
                            id="nav-icon1"
                            onClick={handleClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div className="nav-items">
                        <ul className="nav">
                            <li> <a href="#about" className="hvr-float"> About Us</a> </li>
                            <li> <a href="#mission" className="hvr-float"> Mission</a> </li>
                            <li> <a href="#services" className="hvr-float"> Services</a> </li>
                            <li> <a href="#" className="hvr-float"> Events</a> </li>
                        </ul>
                    </div>

                    <div className="signin-offers">
                        <button className="hvr-float"> Donate </button>
                    </div>

                    <div className={isNavExpanded ? "mobile-nav active" : "mobile-nav"} >
                        <ul className="mobile-items">
                            <li className="mobile-links" onClick={handleClick}> <a href="#"> Card </a></li>
                            <li className="mobile-links" onClick={handleClick}> <a href="#"> App </a></li>
                            <li className="mobile-links" onClick={handleClick}> <a href="#"> Resources </a></li>
                            <li className="mobile-links" onClick={handleClick}> <a href="#"> Sign In </a></li>
                            <li class="mobile-links offers"> <a href="#"> Donate </a></li>
                        </ul>
                    </div>
                </div>


            </nav>

        </div >
    )
}

export default Nav