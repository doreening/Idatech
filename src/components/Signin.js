

import React, {useState,useEffect} from 'react';
import '../css/tailwindcss.css';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import bible from './img/bible.jpg';

function Signup(){
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [loading,setLoading]=useState(false);

    const [message,setMessage]=useState("");

    const handleForm = (event)=>{
        setLoading(true);
        event.preventDefault();
        const data={
            "firstname":firstname,
            "lastname":lastname,
            "phone":email
        }
        // lets send data to endpoins
        axios.post("http://127.0.0.1:8000/user-creation/",data)
        .then((res)=>{
            console.log(res.data)
            setLoading(false)
            setMessage("successful!")

        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
            setMessage("failed!")
        })
    }
    return(
<>
<Navbar />
<div>
<div className="w-full md:w-3/6"></div>


<div className="flex flex-wrap mt-5 p-4">

<div className="w-full md:w-3/6 pt-5">
      

      <div className="image">
        <img data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" 
        src={bible} 
        className="rounded-3xl "  alt="bible.jpg"/>
       
        </div>
        </div>

    <div className="w-full md:w-3/6 flex flex-wrap p-5">
        {/* grid grid-cols-3 gap-4 */}
<div className="w-full md:w-3/6"></div>
<div className="w-full md:w-4/6 border border-8 rounded-lg mt-1 ml-20">
<p className="p-2 font-bold text-center text-3xl text-yellow-700">User Account</p>



<div  className="bg-green-300 text-center">{message}</div>

<center><hr className="w-64 text-green-700"></hr></center>



<form onSubmit={handleForm} className="p-5">
<div class="w-full md:w-6/6 mt-5 -mx-2 mb-2">
    <label class="text-gray-700 font-bold">Email</label>
    <input type="email" name="email" value={email} onChange={event=>setEmail(event.target.value)} className="shadow w-full bg-gray-300 border rounded-lg py-2 px-4" placeholder="Enter your Email" />
    <label  class="text-gray-700 font-bold mt-3">password</label>
    <input type="password" name="password" value={password} onChange={event=>setPassword(event.target.value)} className="shadow w-full bg-gray-300 border rounded-lg py-2 px-4" placeholder="**********" />
     
    <button name="" type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 rounded-lg py-2 px-3 mt-5 text-white">
    {loading?<span>Please wait.....</span>:<span>Login</span>}
    </button>
    {/* <p className="text-bold text-gray-500">Don't you have Account? Register Now</p> */}

    </div>
   
</form>
</div>
<div className="w-full md:w-2/6"></div>
    </div>
</div>
</div>


<Footer/>
</>
    )
}
export default Signup;

