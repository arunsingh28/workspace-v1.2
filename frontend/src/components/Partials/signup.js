import React,{useEffect,useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import Cursor from '../website/Cursor'
import { Link,useHistory } from 'react-router-dom';
import './signup.css'
import SignUpImage from '../Dashboard/Images/signup.jpeg'


const Signup = () => {
    const history = useHistory()
    
    const URL = 'https://workspace-api-2021.herokuapp.com/user'

    const [input,setInput] = useState({
      firstName: '',
      lastName: '',
      password: '',
      email:'',
      confirmPassword:''
    })
    useEffect(()=>{
        document.title = 'Signup - Workspace'
    },[])

    const handleChange=(e)=>{
      const {name,value} = e.target

      setInput(preValue =>{
        return{
          ...preValue,
          [name]: value
        }
      })
    } 
    
    const handleClick=(e)=>{
      e.preventDefault()
      const newUser = {
        firstName : input.firstName,
        lastName : input.lastName,
        password : input.password,
        email : input.email
      }
      const sendData = async()=>{
        try{
          await axios.post(URL+'/signup', newUser)
          .then(res => toast.dark(res.data.message))
        }
        catch(e){
          toast.dark(e +" "+'Something went wrong')
        }
      }
      if(input.password != input.confirmPassword ){
        toast.dark('Password is not matching.')
      }
     else{
      sendData()
      setInput({
        firstName: '',
        lastName: '',
        password: '',
        email:'',
        confirmPassword:''
       })
      }
    }


    return (
      <div className="page" style={{direction:'rtl',height:'100vh'}}>
            <Cursor/>
            <ToastContainer />
    <div className="main">
    <div className="main-wrapper">
      <div className="login-methods">
        <Link to="/"><div className="login-methods-signup text-gold ">Home</div></Link>
        <Link to="/login"><div className="login-methods-login btn-gray">Sign in</div></Link>
      </div>
      <form>
        <div className="form-message">
          <div className="form-message-title">welcome</div>
          <div className="form-message-body">fill the form to become part of W<span>o</span>rkspace</div>
        </div>
        <div className="form-body">
          <input type="text" placeholder="First Name" 
          name="firstName" 
          value={input.firstName}
          onChange={handleChange}/>
          <input type="text" placeholder="Last Name" 
          name="lastName" 
          value={input.lastName}
          onChange={handleChange}/>
          <input type="email" placeholder="E-mail" 
          name="email" 
          value={input.email}
          onChange={handleChange}/>
          <input type="password" placeholder="Password" 
          name="password"
          value={input.password} 
          onChange={handleChange}/>
          <input type="password" placeholder="Confirm Password" 
          name="confirmPassword" 
          value={input.confirmPassword}
          onChange={handleChange}/>
          <button type="submit" onClick={handleClick}>Sign up</button>
        </div>
      </form>
    </div>
  </div>

  <div className="pic">
    <img src={SignUpImage} alt="image" />
  </div>
</div>
        
    )
}

export default Signup
