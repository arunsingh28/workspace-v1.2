import React, { useState } from 'react'
import musicLogo from '../Images/arrowright.svg'


import Modal from '../../Partials/Modal'

const Music = () => {


    const [isModalOpen, setModalIsOpen] = useState(false)

    const toggleModal = () => {
        setModalIsOpen(!isModalOpen)
    }

    return (
        <div className="pro__sh">

            {isModalOpen && <Modal onRequestClose={toggleModal} />}
            {isModalOpen}
            <div className="musicList">
                <div className="svg">
                    <svg id="Layer_1" data-name="Layer 1" alt="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.554.923A3.978,3.978,0,0,0,19.263.07L10.079,1.792A5,5,0,0,0,6,6.706v9.85A3.959,3.959,0,0,0,4,16a4,4,0,1,0,4,4V10.876A2,2,0,0,1,9.632,8.91l11.183-2.1A1,1,0,0,1,22,7.8v5.76A3.959,3.959,0,0,0,20,13a4,4,0,1,0,4,4V4A3.987,3.987,0,0,0,22.554.923ZM4,22a2,2,0,1,1,2-2A2,2,0,0,1,4,22ZM20.447,4.848,9.263,6.944A4,4,0,0,0,8,7.416v-.71a3,3,0,0,1,2.447-2.949l9.185-1.722A2,2,0,0,1,22,4v.984A2.955,2.955,0,0,0,20.447,4.848ZM20,19a2,2,0,1,1,2-2A2,2,0,0,1,20,19Z" />
                    </svg>
                </div>
                <div className="wrapper">
                    <h2>Create music playlist.</h2>
                    <p>Listen your playlist on every device.</p>
                    <button onClick={() => setModalIsOpen(true)} >Create playlist <img src={musicLogo} /></button>
                </div>

            </div>

            <div className="videoList">
                <div className="svg">
                    <svg id="Outline" xmlns="http://www.w3.org/2000/svg" alt="image" viewBox="0 0 24 24"><title>79 play</title><path d="M20.494,7.968l-9.54-7A5,5,0,0,0,3,5V19a5,5,0,0,0,7.957,4.031l9.54-7a5,5,0,0,0,0-8.064Zm-1.184,6.45-9.54,7A3,3,0,0,1,5,19V5A2.948,2.948,0,0,1,6.641,2.328,3.018,3.018,0,0,1,8.006,2a2.97,2.97,0,0,1,1.764.589l9.54,7a3,3,0,0,1,0,4.836Z" /></svg>
                </div>
                <div className="wrapper">
                    <h2>Create video playlist.</h2>
                    <p>Watch your playlist on every device.</p>
                    <button>Create playlist <img src={musicLogo} /></button>
                </div>
            </div>



        </div>
    )
}

export default Music
