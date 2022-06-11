import React from 'react'
import image from '../images/2.png'
import './connection.css'

const Connection = () => {
    return (
        <section class="section connection" id="mission">
            <div className="connection-left">
                <img src={image}></img>
            </div>

            <div className="connection-right">
                <h2>Seeking Authentic Connection</h2>
                <div className="connection-description">
                    <p>
                        All Her is a non-profit organization that supports women of all ages, ethnicities and backgrounds in enhancing their academic achievements, entrepreneurial skills, financial strengths, and self knowledge.
                        <br />
                        Our vision consists of a  community of passion driven, soulful women from all walks of life collaborating and innovating together.

                    </p>
                </div>

            </div>

        </section>
    )
}

export default Connection