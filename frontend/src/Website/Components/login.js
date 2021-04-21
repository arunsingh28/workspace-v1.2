import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Cursor from '../Components/Cursor'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../Components/Navbar'

import logo from '../../Asset/image/favicon-32x32.png'

// import './login.css'

const Login = () => {
   
    const history = useHistory('');

    const URL_T = 'http://localhost:5001/user'
    const URL = 'https://workspace-api-2021.herokuapp.com/user'

    const [value, setValue] = useState({
        username: "",
        password: ""
    })


    useEffect(() => {
        document.title = "login - Workspace"
    }, [])

    const handleChange = (e) => {
       
        const { name, value } = e.target
        setValue(preValue => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const submit = (e) => {
        e.preventDefault();
        const newLogin = {
            username: value.username,
            password: value.password
        }
        const login = async () => {
            try {
                await axios.post(URL + '/login', newLogin)
                    .then(res => {
                        toast.info(res.data.message)
                        if (res.data.message == 'Login sucessfull') {
                            history.push('/d')
                        }
                    })
            }
            catch (e) {
                toast.info(e + " something went wrong")
            }
        }
        login()
        // history.push('/d')
    }

    return (
        <>
            <div className="login_body">
            <Cursor />
                <ToastContainer />
                <section>
                    <div className="card">
                        <div className="content">
                           <Link to="/" className="logo_ws"><img src={logo} width="50"  /></Link>
                            <h2 className="h2">Get Started!</h2>
                            <div className="user">
                                <input type="email" 
                                    placeholder="Username"
                                    name="username"
                                    value={value.username}
                                    onChange={handleChange}
                                />
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="pass">
                                <input type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={value.password}
                                    onChange={handleChange}
                                />
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="else">
                                <input id="remember" type="checkbox" />
                                <label htmlFor="remember">Remember me</label>
                                <span>Forgot password?</span>
                            </div>
                            <button type="submit"
                                className="button_login"
                                onClick={submit}
                                disabled={value.password.length > 0 && value.username.length > 0 ? false : true }
                            >Login</button>
                            <p className="create_account_link">Don't have account <Link to="/signup" className="link__">Create now</Link></p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login
