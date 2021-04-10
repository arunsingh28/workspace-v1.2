import React,{useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const URL = 'https://workspace-api-2021.herokuapp.com/user'
    const [data,setData] = useState({
        name : "",
        message : "",
        email : "",
    })

   const handleChange=(e)=>{
    const {name,value} = e.target
    setData(preValue=>{
        return{
            ...preValue,
            [name]:value
        }
    })
   }

    const submit = (e)=>{
        e.preventDefault();
        const newQuery = {
            name : data.name,
            email : data.email,
            message : data.message
        }

        const sendData = async()=>{
            try{
              await axios.post(URL+'/contact', newQuery)
              .then(res => toast.dark(res.data.message))
            }
            catch(e){
              toast.dark(e +" "+'Server is Down')
            }
          }
          sendData()
          setData({
              name : '',
              message : '',
              email : ''
          })
    }


    return (
        <div className="indigoContact">
            <ToastContainer />
            <div className="Indigo">
                <div className="indigoLeftC">
                    <h1>Get a Free Assessment.</h1>
                    <div className="address">
                        <p>Law Gate D/133 Opposite London PG.</p>
                        <p>Punjab, 14441</p>
                        <p>7983613144</p>
                        {/* {
                        data.length > 0 ? data.map((i)=>(<li key={i._id}>{i.name}</li>)) : 'No place found'
                        } */}
                    </div>
                    <div className="socail">
                       <strong> <a href="https://facebook.com" target="_blank">FB</a></strong>
                        <strong style={{marginLeft:15}}><a href="https://instagram.com/arun.singh28" target="_blank">IG</a></strong>
                    </div>
                </div>
                <div className="indigoRightC">
                    <form>
                    <input placeholder="Your Name" name="name" onChange={handleChange} value={data.name}/>
                    <input placeholder="Your Email" name="email" onChange={handleChange} value={data.email} />
                    <input placeholder="How can we help" name="message" onChange={handleChange} value={data.message}/>
                    <p>This site is protected by reCAPTCHA and Google 
                        <a href="https://google.com"> Privacy Policy</a> and <a href="https://google.com">Terms of Service</a> apply.</p>
                    <button onClick={submit}>SEND</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact