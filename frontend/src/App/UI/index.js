import React,{useEffect} from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Activity from './Activity/Activity'
import Menu from './components/Menu'
import Banner from './components/Banner'
import FindFriend from './components/FindFriend'
import Music from './cards/Music'
import Chat from '../chat/index'
import Music_M from './components/Music'
import Navbar from './components/Navbar'


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
                <Navbar/>
                <Banner/>
                <div style={{'paddingTop':'50px'}}></div>
               <Music/>

            </div>
            <div className="Activity__">
                <Activity/>
                <FindFriend/>
            </div>
        </div>
    )
}

export default IndexDash
