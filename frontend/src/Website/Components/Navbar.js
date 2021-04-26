import React from 'react'
import { Link } from 'react-router-dom'


const Navbarr = ({color}) => {
   
    return (
       <div className="navbar" style={{'backgroundColor':color}}>
           <Link to="/" style={{'lineHeight':'70px'}}><div className="brandName">W<span>o</span>rkspacee</div></Link>
           {/* <div className="brandName">W<span>o</span>rkspace</div> */}
           <div className="loginBtn">
           <a href="https://work-spacee.herokuapp.com/login"><button>Login</button></a>
           </div>
       </div>
    )
}

export default Navbarr
