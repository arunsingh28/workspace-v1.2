import React from 'react'
import Footer from '../website/Footer'
import Navbar from '../website/Navbar'
import Cursor from '../website/Cursor'

const About = () => {

    

    return (
        <>
        <Navbar color={"#000"} margin={"0px"}/>
        <Cursor/>
        <div className="about_wrapper">
        <div className="a">
            <div className="inner">
          <h1>About Us</h1>
         <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cupiditate consequatur provident alias dolor ipsa, nesciunt similique accusantium? Magni aut, qui debitis doloremque quaerat quo omnis eum error labore accusantium!</p>
         <div className="skills">
            <span>Music</span>
            <span>Data Storage</span>
            <span>Connect</span>
        </div>
         </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}

export default About
