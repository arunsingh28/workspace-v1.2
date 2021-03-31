import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../../public/image/hero.svg'

import Modal from '../Partials/singupModal'

const Hero = () => {

    const [isModalOpen,setModalIsOpen] = useState(false)
    
    const toggleModal =()=>{
        setModalIsOpen(!isModalOpen)
    }


    return (
        <div className="hero-sec">
            {isModalOpen && <Modal onRequestClose={toggleModal} /> }
            <div className="hero-content">
                <p>Combine Your Data with our Cloud. </p>
                {/* <button type="button" onClick={()=>setModalIsOpen(true)}>Join</button> */}
                <Link to="/signup"><button>Join</button></Link>
            </div>
            <div className="hero-img">
                <img src={img} height="300" alt="hero" />
            </div>
        </div>
    )
}

export default Hero
