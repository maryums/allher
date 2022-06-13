import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './nav.css';
import logo from '../images/all-her-logo.png'

const Nav = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const handleClick = () => {
        setIsNavExpanded(!isNavExpanded)

    }

    return (
        <div>
            <nav>
                <div className="inner-nav">

                    <div className="brand">
                        <a href="index.html">
                            <img className="nav-brand" src={logo} alt="all her logo" /></a>
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
                            <li className="hvr-float"> <Link to="/about">About Us</Link></li>
                            <li className="hvr-float"> <Link to="/mission">Mission</Link></li>
                            <li className="hvr-float"> <Link to="/services">Services</Link></li>
                            <li className="hvr-float"> <Link to="/events">Events</Link></li>
                        </ul>
                    </div>

                    <div className="signin-offers">
                        <button className="hvr-float"> Donate </button>
                    </div>

                    <div className={isNavExpanded ? "mobile-nav active" : "mobile-nav"} >
                        <ul className="mobile-items">
                            <li className="mobile-links" onClick={handleClick}> <Link to="/about">About Us</Link></li>
                            <li className="mobile-links" onClick={handleClick}> <Link to="/mission">Mission</Link></li>
                            <li className="mobile-links" onClick={handleClick}> <Link to="/services">Services</Link></li>
                            <li className="mobile-links" onClick={handleClick}> <Link to="/events">Events</Link></li>
                            <li class="mobile-links offers"> <a href="https://www.paypal.com/donate/buttons"> Donate </a></li>
                        </ul>
                    </div>
                </div>


            </nav>

        </div >
    )
}

export default Nav