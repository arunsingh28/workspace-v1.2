import React from 'react'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper } from 'swiper/react'
import img from './Images/winner.svg'
import Navbar from '../Dashboard/components/Navbar'



// import '../../../node_modules/swiper/'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



const Main = () => {
    return (
        <div className="main__Dis">
            <Navbar name={'Arun'} />
            {/* message banner */}
            <div className="flex_wraper">
                <Router>
                    <Switch>
                        <Route component={Slide} path="/d" exact/>
                        <Route component={Slide} path="/dh" exact/>
                    </Switch>
                </Router>

            </div>

        </div>
    )
}


const Slide = () => {
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






export default Main
