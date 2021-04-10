import React,{useEffect} from 'react'

import Navbar from './components/website/Navbar'
import Cursor from './components/website/Cursor'
import Hero from './components/website/Hero'
import Card from './components/website/Card'
import Info from './components/website/Info'
import Footer from './components/website/Footer'
import Contact from './components/website/Contact'
import MoreInfo from './components/website/MoreInfo'


import './public/style.css'
// images
import note from './public/image/notes.svg'
import idea from './public/image/idea.svg'
import cloud from './public/image/cloud.svg'
import dashboard from './public/image/dashboard.svg'

const Website = () => {

    useEffect(()=>{
        document.title="Home - Workspace"
    })


    return (
        <div className="App">
            <Cursor/>
        <div className="header">
            <Navbar/>
            <Hero/>
        </div>   
         {/* cards  */}
        <div className="card-wrapper container-fluid">
            <Card 
            img={cloud} 
            title={'Clouding'}
            desc={'Store personal Data'}
            />
            <Card
            img={idea}
            title={'Team'}
            desc={'Work with Team'}
            />
            <Card
            img={note}
            title={'Work'}
            desc={'Combine work with workspace'}
            />
             <Card
            img={dashboard}
            title={'Dashboard'}
            desc={'Customize dashboard'}
            />
        </div>
        {/* section */}
        <Info/>
        {/* more info */}
        <MoreInfo/>
        {/* contact */}
        <Contact/>
        {/* footer */}
        <footer>
            <Footer/>
        </footer>
        </div>
    )
}

export default Website
