import React from 'react'
import {Link} from 'react-router-dom'
import SwiperCore, { Navigation,Pagination,Scrollbar,A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import img from './Images/winner.svg'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Main = () => {
    return (
        <div className="main__Dis">
        <img src="https://instagram.fixc2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/159992073_784603389135372_4288082327388053488_n.jpg?tp=1&_nc_ht=instagram.fixc2-1.fna.fbcdn.net&_nc_ohc=EqHJp68WgJMAX8KYDUF&oh=6c1376cbd9dd9cd409ffe8b3d2841e44&oe=6079BC86" alt="avtar" className="avtar"/>
           <h2>Good morning, Arun</h2>
           <p>Lets work together.</p> 
       
           {/* message banner */}
           <div className="message__banner">
               <div className="banner__">
                   <p>Welcome to WorkSpacee.
                   <p className="p">
                       Lets get stated with us with our new Tool.
                   </p>
                   <button>Let's go!</button>
                  <Link to="/"><button>Cancel</button></Link>
                   </p>
                   
                   <img src={img} alt="tropy"/>
               </div>
               <div className="next__banner">
               <i class="far fa-arrow-alt-circle-right"></i>
               </div>
           </div>
        </div>
    )
}

export default Main
