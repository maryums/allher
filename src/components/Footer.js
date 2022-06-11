import React, { useState } from 'react'
import './footer.css'
import logo from '../images/all-her-logo.png'
import { TbBrandInstagram } from 'react-icons/tb'
import { AiOutlineFacebook } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineYoutube } from 'react-icons/ai'


const Footer = () => {

    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <footer>
            <div className="inner-footer">

                <div class="footer-form">
                    <form>
                        <label
                            htmlFor="email"
                        >Join Our Mailing List { }
                        </label
                        > <br />
                        <input
                            type="text"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            id="email"
                            placeholder="email address"
                        />
                        <button
                            onClick={(e) => handleSubmit}> Sign Up </button>
                    </form>

                </div>

                <div className="footer-links">
                    <ul>
                        <li> <TbBrandInstagram /> </li>
                        <li> <AiOutlineFacebook /> </li>
                        <li> <FiTwitter /> </li>
                        <li> <AiOutlineYoutube /> </li>
                    </ul>


                </div>


            </div>
            <p>All Her © 2022 </p>
        </footer>
    )
}

export default Footer