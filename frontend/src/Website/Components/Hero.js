import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../../Asset/image/hero.svg'




const Hero = () => {

    return (
        <div className="hero-sec">
 
            <div className="hero-content">
                <p>Combine Your Data with our Cloud. </p>
                <Link to="/signup"><button>Join</button></Link>
            </div>
            <div className="hero-img">
                <img src={img} height="300" alt="hero" />
            </div>
        </div>
    )
}

export default Hero
