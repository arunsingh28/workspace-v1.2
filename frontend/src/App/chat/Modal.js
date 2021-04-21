import React,{useState,useEffect} from 'react'
import chat from '../UI/Images/chat.svg'





const Modal = ({ onRequestClose }) => {
	// Use useEffect to add an event listener to the document
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				// Close the modal when the Escape key is pressed
				onRequestClose();
			}
		}

		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

	return (
		<div className="modal__backdrop">
			<div className="modal__container">
				<h3 className="modal__title">Create Account.</h3>
				
                {/* singup form */}
                <div className="modal__Form">

                </div>

				<button type="button" onClick={onRequestClose}>
					Close this modal
				</button>
			</div>
		</div>
	);
};







const MProvider = () => {


    const [isModalOpen,setModalIsOpen] = useState(false)
    
    const toggleModal =()=>{
        setModalIsOpen(!isModalOpen)
    }


    return (
        <div className="chat_______">
            {isModalOpen && <Modal onRequestClose={toggleModal} /> }
            <div onC>
                <img src={chat} alt="chat"/>
            </div>
        </div>
    )
}

export default MProvider

