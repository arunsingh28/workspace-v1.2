import React,{useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Activity from './Activity/Activity'
import Menu from './Menu'
import Main from './Main'
import FindFriend from './FindFriend'
import Music from './cards/Music'
import Chat from '../chat/index'
import './style/style.css'


const IndexDash = () => {

    useEffect(()=>{
        document.title = "Dashboard - Workpsace"
    })

    return (
        <div className="App__B785s">

            <div className="menu_Dyv">
                <Menu/>
            </div>
            <div className="dash__Bo">


            <Router>
                <Main/>
                <h2 style={{fontWeight:'200',fontSize:'15px',padding:'20px 0px'}}>Other</h2>
                <Music/>
                <Chat/>
            </Router>



            </div>
            <div className="Activity__">
                <Activity/>
                <FindFriend/>
            </div>

        </div>
    )
}

export default IndexDash
