import React from 'react'
import Icon from '../Images/favico.png'
import Science from '../Images/science.svg'
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <div className="menu__section">
            <div className="top">
                <img src={Icon} height="50"/>
                <p>Workspace</p>
            </div>
            <div className="center">
                <div className="menu__">
                    <ul>
                        <Link to="/home"><li style={{color:'rgb(24, 107, 202)',fontWeight:'900'}}><i className="fas fa-braille"  style={{color:'rgb(24, 107, 202)'}}></i>  Home</li></Link>
                        <Link to="/WS"><li><i className="fas fa-globe"></i>  Work</li></Link>
                        <Link to="/storageWS"><li><i className="fas fa-hdd"></i>  Storage</li></Link>
                        <Link to="/cloudWS"><li><i className="fab fa-mixcloud"></i>  Cloud</li></Link>
                        <Link to="/music"><li><i className="fas fa-music"></i>  Music</li></Link>
                        <Link to="/cong"><li><i className="fas fa-cog"></i>  Setting</li></Link>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <div className="adver__">
                    <div className="pix">
                        <img src={Science} alt="avtar"/>
                    </div>
                    <p>You saved over 10.4MB of Data.Our Pleasure.</p>
                </div>
            </div>
        </div>
    )
}

export default Menu
