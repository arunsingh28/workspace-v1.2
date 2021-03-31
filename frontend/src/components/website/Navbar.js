import React,{ useRef,useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
// import { Pic } from './Auth0'
// import {TweenMax, Power3, } from 'gsap'

const Navbarr = () => {
    let navbar = useRef(null)
    const { loginWithRedirect, isAuthenticated } = useAuth0()

    // useEffect(()=>{
    //     TweenMax.to(navbar,
    //         1,{
    //             opacity:1,
    //             y:10,
    //             ease:Power3.easeOut
    //     })
    // },[])
    return (
        !isAuthenticated && (
       <div className="navbar" ref={ e => navbar = e}>
           <div className="brandName">W<span>o</span>rkspace</div>
           <div className="loginBtn">
           {/* <button onClick={()=> loginWithRedirect() }>Login</button> */}
           <Link to="/login"><button>Login</button></Link>
           {/* <Pic.Consumer></Pic.Consumer> */}
           </div>
       </div>
        )
    )
}

export default Navbarr
