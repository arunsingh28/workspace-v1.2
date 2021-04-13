import React,{useEffect} from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Activity from './Activity/Activity'
import Menu from './components/Menu'
import Main from './Main'
import FindFriend from '../Dashboard/components/FindFriend'
import Music from './cards/Music'
import Chat from '../chat/index'
import Music_M from '../Dashboard/components/Music'

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
                <Main/>

                {/* <div style={{'padding':'20px 0px'}}></div>
                <Music/>
                <Chat/> */}

            </div>
            <div className="Activity__">
                <Activity/>
                <FindFriend/>
            </div>
        </div>
    )
}

export default IndexDash
