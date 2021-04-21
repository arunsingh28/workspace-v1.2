import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'


const MiniMenu = ({ onRequestClose , arrow}) => {



    useEffect(() => {

        const onkeyDown = (e) => {
            if (e.keyCode === 27) {
                arrow.current.style.transform = "rotate(180deg)"
                onRequestClose()
            } 
        }

        const hide = ()=>{
            arrow.current.style.transform = "rotate(180deg)"
            onRequestClose()
        }
    
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown',onkeyDown)
        document.addEventListener('click',hide)
        arrow.current.style.transform = "rotate(-180deg)"
        return()=>{
            document.body.style.overflow = 'visible'
            document.removeEventListener('keydown',onkeyDown)
            document.removeEventListener('click',hide)
            arrow.current.style.transform = "rotate(180deg)"
        }
    })


    return (
        <div className="miniMenu_">
                <ul>
                    <li><i className="fas fa-user-shield" style={{'marginLeft':'-15px','marginRight':'6px'}}></i>Account Settings</li>
                    <div style={{'borderBottom':'1px solid','display':'block','width':'100%','margin':'5px 0px'}}></div>
                    <li><i className="fas fa-key"></i> Change Password</li>
                    <li><i className="fas fa-camera"></i> Change Avtar</li>
                    <li><i className="fas fa-sign-out-alt" style={{'marginLeft':'-15px','marginRight':'6px'}}></i> User Setting</li>
                    <div style={{'borderBottom':'1px solid','display':'block','width':'100%','margin':'5px 0px'}}></div>
                    <li><i className="fas fa-key"></i> Change Password</li>
                    <Link to="/asdfasfd" style={{'color':'rgb(68, 68, 68)'}}><li><i className="fas fa-camera"></i> Logout</li></Link>
                </ul>
		</div>
    )
}

export default MiniMenu
