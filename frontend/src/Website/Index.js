import React,{useEffect} from 'react'

import Navbar from './Components/Navbar'
import Cursor from './Components/Cursor'
import Hero from './Components/Hero'
import Card from './Components/Card'
import Info from './Components/Info'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import MoreInfo from './Components/MoreInfo'
import About from './Components/About'
import Fileuploader from '../App/Partials/fileUploader'


import '../Asset/style/style.css'

import note from '../Asset/image/notes.svg'
import idea from '../Asset/image/idea.svg'
import cloud from '../Asset/image/cloud.svg'
import dashboard from '../Asset/image/dashboard.svg'

const Website = () => {

    useEffect(()=>{
        document.title="Home - Workspace"
    },[])


    return (


        <div className="App">
            <Cursor/>



        <div className="header">
            <Navbar/>
            <Hero/>
        </div>   


    
        <div className="card-wrapper container-fluid">
            <Card 
            img={cloud} 
            title={'Clouding'}
            desc={'Store personal Data'}
            />
            {/* <Card
            img={idea}
            title={'Team'}
            desc={'Work with Team'}
            /> */}
            <Card
            img={note}
            title={'Work'}
            desc={'Combine work with workspacee'}
            />
             <Card
            img={dashboard}
            title={'Dashboard'}
            desc={'Customize dashboard'}
            />
        </div>



        <Info/>

        <MoreInfo/>
        <Contact/>


        <footer>
            <Footer/>
        </footer>
        </div>


    )
}

export default Website
