import React from 'react'

const Navbar = ({name}) => {
    return (
        <div>
            <img src="https://instagram.fixc2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/159992073_784603389135372_4288082327388053488_n.jpg?tp=1&_nc_ht=instagram.fixc2-1.fna.fbcdn.net&_nc_ohc=EqHJp68WgJMAX8KYDUF&oh=6c1376cbd9dd9cd409ffe8b3d2841e44&oe=6079BC86" alt="avtar" className="avtar"/>
           <h2>Good morning, {name}</h2>
           <p>Lets work together.</p> 
        </div>
    )
}

export default Navbar
