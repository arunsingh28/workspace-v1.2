
import React,{useEffect,useState} from 'react'


import Music from '../UI/components/Music'

const Modal = ({ onRequestClose }) => {


	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				onRequestClose();
			}
		}

		const hide = ()=>{
			onRequestClose();
		}
		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);
		document.addEventListener("click", hide);
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
			document.removeEventListener("click", hide);
		};
	});

	return (
		<div className="modal__backdrop">
			<div className="modal__container">
				<h3 className="modal__title">Music Player</h3>
				<Music/>
			</div>
		</div>
		
	);
};



export default Modal