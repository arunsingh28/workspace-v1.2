import React from 'react'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper } from 'swiper/react'
import img from '../Images/winner.svg'

import Navbar from './Navbar'




// import '../../../node_modules/swiper/'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);





const Banner = () => {
    return (
        <div className="message__banner" >
            <div className="banner__">
                <p>Welcome to WorkSpacee.
                   <p className="p">
                        Lets get stated with us with our new Tool.
                   </p>
                    <button>Let's go!</button>
                    <Link to="/"><button>Cancel</button></Link>
                </p>
                <img src={img} alt="tropy" />
            </div>
            <div className="next__banner">
                <i class="far fa-arrow-alt-circle-right"></i>
            </div>
        </div>
    )
}






export default Banner
