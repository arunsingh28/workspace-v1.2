import React, { useState,useRef } from 'react'
import MiniMenu from '../../Partials/miniMenu'



const Navbar = ({ name }) => {

    const [isModalOpen, setModalIsOpen] = useState(false)
    
    const arrow = useRef(null)



    const toggleModal = () => {
        setModalIsOpen(!isModalOpen)
    }


    return (
        <div>
            {isModalOpen && <MiniMenu onRequestClose={toggleModal} arrow={arrow} />}
            {isModalOpen}
            <div className="avtar__" onClick={() => toggleModal()}>
                <img src="https://instagram.fixc2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/168146095_451882806106820_1863631006849252123_n.jpg?tp=1&_nc_ht=instagram.fixc2-1.fna.fbcdn.net&_nc_ohc=HTfYpbL93C8AX9sh1OD&edm=ABfd0MgAAAAA&ccb=7-4&oh=13349e18950dafe8a82bbe62bc8e7358&oe=609F585D&_nc_sid=7bff83" alt="avtar" className="avtar"
                
                />
                <i className="fas fa-chevron-down" ref={arrow} style={{ 'marginLeft': '4px' }}></i>
            </div>
            <h2>Good morning, {name}</h2>
            <p>Lets work together.</p>
        </div>
    )
}

export default Navbar
