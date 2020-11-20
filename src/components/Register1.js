


import React, {useState,useEffect} from 'react';
import '../css/tailwindcss.css';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

function Register(){
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("");
    const [loading,setLoading]=useState(false);

    const [message,setMessage]=useState("");

    const handleForm = (event)=>{
        setLoading(true);
        event.preventDefault();
        const data={
            "username":username,
            "first_name":firstname,
            "last_name":lastname,
            "email":email,
            "password":password,

            "profile":{
              "username":"Neza",
              "country":"Rwanda",
              "accounttype":"user",
              "gender":"Male"
            }
        }
        // lets send data to endpoins
        axios.post("http://127.0.0.1:8000/account-creation/",data)
        .then((res)=>{
            console.log(res.data)
            setLoading(false)
            setMessage("Account created successful!")

        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
            setMessage("Account created failed!")
        })
    }
    return(
<>
<Navbar />

            <div className=" gap-4 mt-12 flex flex-wrap">

                <div className="w-full md:w-1/5"></div>
                <div className="w-full md:w-2/5 bg-gray-100 rounded-lg py-4 shadow-2xl">
                    <p className="p-2 text-center text-3xl font-bold text-yellow-600">User Creation</p>
    <div className="bg-green-200">{message}</div>
                    <form onSubmit={handleForm} className="p-12" encType="multipart/form-data">
                    <label>Firstname{firstname}</label>
                    <input type="text"  name="firstname" value={firstname} onChange={event=>setFirstname(event.target.value)}placeholder="enter ur firstname"className="w-full border py-4 px-4 rounded-lg"></input>
                    <label>Lastname</label>
                    <input type="text"  name="lastname" value={lastname} onChange={event=>setLastname(event.target.value)} placeholder="enter ur lastname"className="w-full border py-4 px-4 rounded-lg"></input>
                    <label>Username</label>
                    <input type="text"  name="username" value={lastname} onChange={event=>setUsername(event.target.value)} placeholder="enter ur username"className="w-full border py-4 px-4 rounded-lg"></input>
                    <label>Email</label>
                    <input type="text"  name="email" value={email} onChange={event=>setEmail(event.target.value)} placeholder="enter ur email"className="w-full border py-4 px-4 rounded-lg"></input>
                    <label>Password</label>
                    <input type="password"  name="password" value={password} onChange={event=>setPassword(event.target.value)} placeholder="****"className="w-full border py-4 px-4 rounded-lg"></input>
    <button name="" type="submit" className="w-full bg-blue-500 rounded-lg py-4 px-4 mt-4">{loading?<span>please wait...</span>:<span> Create an account</span>}</button>
                </form>
                </div>
                <div className="w-full md:w-1/5"></div>
               
            </div>




<Footer/>
</>
    )
}
export default Register;