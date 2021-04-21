import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({margin}) => {
    return (
        <div className="footer-work" style={{'marginTop':margin}}>
           <div className="container-footer w-container">
  <div className="w-row">
    <div className="footer-column w-clearfix w-col w-col-4"><img src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/596d33f36607b12cfdaf8ad2_LogoWhite.png" alt="" width="40" className="failory-logo-image"/>
      <Link to="/" ><h3 className="footer-failory-name">Workspace</h3></Link>
      <p className="footer-description-failory">Storing Multiple type Data.</p>
    </div>
    <div className="footer-column w-col w-col-8">
      <div className="w-row">
        <div className="w-col w-col-8">
          <div className="w-row">
            <div className="w-col w-col-7 w-col-small-6 w-col-tiny-7">
              <h3 className="footer-titles">Learn</h3>
              <p className="footer-links"><Link to="/about" ><span className="footer-link">About us</span></Link><a href="/"><span className="footer-link">Successful Startups</span></a><a href="/"><span className="footer-link">Blog</span></a><span></span><a href="/"><span className="footer-link">Entrepreneurial Tools</span></a><a href="/"><span className="footer-link">Startup Cemetery</span></a><a href="/"><span className="footer-link">Podcast</span></a><strong></strong></p>
            </div>
            <div className="w-col w-col-5 w-col-small-6 w-col-tiny-5">
              
              <p className="footer-links">
                  <a href="/"><span className="footer-link">Sponsor Us!</span></a><a href="/"><span className="footer-link">Open Startup</span></a><a href="/"><span className="footer-link"></span></a><a href="/"><span className="footer-link">Contribute</span></a><a href="/"><span className="footer-link">FAQ</span></a><strong></strong></p>
            </div>
          </div>
        </div>
        <div className="column-center-mobile w-col w-col-4">
          <h3 className="footer-titles">Follow Us!</h3>
          <a href="/" target="_blank" className="footer-social-network-icons w-inline-block">
              <img src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbf0a2f2b67e3b3ba079c_Twitter%20Icon.svg" width="20" alt="Twitter icon"/></a>
          <a href="/" target="_blank" className="footer-social-network-icons w-inline-block">
              <img src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbfe70fcf5a0514c5b1da_Instagram%20Icon.svg" width="20" alt="Instagram icon"/></a>
          <a href="/" target="_blank" className="footer-social-network-icons w-inline-block">
              <img src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbe42e1e6034fdaba46f6_Facebook%20Icon.svg" width="20" alt="Facebook Icon"/>
          </a>
            <a href="/" target="_blank" className="footer-social-network-icons w-inline-block"><img src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dc0002f2b676eb4ba0869_LinkedIn%20Icon.svg" width="20" alt="LinkedIn Icon"/></a>
            <a href="/" target="_blank" className="footer-social-network-icons w-inline-block">
              <img src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dc0112f2b6739c9ba0871_Pinterest%20Icon.svg" width="20" alt="Pinterest Icon"/>
            </a>
          <p className="footer-description">Email me at: 
          <a href="/"><strong className="link-email-footer">arunsingh28aug.as@gmail.com</strong></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
    )
}

export default Footer
