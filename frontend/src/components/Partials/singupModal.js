import axios from 'axios';
import React,{useEffect,useState} from 'react'

const Modal = ({ onRequestClose }) => {

	const [data,setData] = useState({
		name : "",
		password : "",
		confirm_password : "",
		region : "",
		term : "",
		email : ""
	})

	const submit=(e)=>{
		e.preventDefault()
		axios.post('http://localhost:5001',{
			name:data.name,
			password:data.password,
			confirm_password:data.confirm_password,
			region:data.region,
			email:data.email
		})
	}

	const handle=(e)=>{
		const newData = {...data}
		newData[e.taget.id] = e.target.value
		setData(newData)
	}

	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				onRequestClose();
			}
		}

		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

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
					<form onSubmit={(e)=>submit(e)}>
						<label for="name">Name</label>
						<input type="text" 
						className="singUp_form " 
						id="name"
						onChange={(e)=>handle(e)}
						value={data.name}
						placeholder="Enter full name"
						/>
						<label for="password">Email</label>
						<input type="password" 
						className="singUp_form" 
						id="password"
						onChange={(e)=>handle(e)}
						value={data.email}
						placeholder="Enter email"
						/>
						<label for="region">Region</label>
						<select id="region"
						onChange={(e)=>handle(e)}
						value={data.region}
						>
							<option value="india">India</option>
							<option value="usa">USA</option>
							<option value="russia">Russia</option>
							<option value="canada">Canada</option>
						</select>
						
						<label for="name">Password</label>
						<input type="text" 
						className="singUp_form"
						onChange={(e)=>handle(e)}
						value={data.password}
						placeholder="Enter strong password"
						/>
						<label for="name">Confirm Password</label>
						<input type="text" 
						className="singUp_form"
						onChange={(e)=>handle(e)}
						value={data.confirm_password}
						placeholder="Enter confirm password"
						/>
					
						<button>Sign Up</button>
						<button type="button" onClick={onRequestClose} id="close_btn">Close</button>
					</form>
                </div>
			</div>
		</div>
		
	);
};



export default Modal