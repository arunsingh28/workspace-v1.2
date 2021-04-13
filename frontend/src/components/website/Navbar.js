import React from 'react'
import { Link } from 'react-router-dom'


const Navbarr = ({color}) => {
   
    return (
       <div className="navbar" style={{'backgroundColor':color}}>
           <div className="brandName">W<span>o</span>rkspace</div>
           <div className="loginBtn">
           <Link to="/login"><button>Login</button></Link>
           </div>
       </div>
        
    )
}

export default Navbarr
