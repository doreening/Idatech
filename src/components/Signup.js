

import React, {useState,useEffect} from 'react';
import '../css/tailwindcss.css';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import gosple from './img/gosple.jpg';

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
<div className="flex flex-wrap pt-10">
    <div className="w-full md:w-1/6"></div>
<div className=" md:w-2/6 App-pexelp register">
  <img src={gosple}/>
</div>



<div className="w-full md:w-3/6 max-w-xm bg-white shadow-md pt-6 mb-6 Register p-20px">
<p className="p-4 pr-64 font-bold text-center text-3xl text-yellow-700">User creation</p>



<div  className="text-center ">{message}</div>

<center><hr className="text-gray-700"></hr></center>

{/* <div className="w-full max-w-lg pr-20">
<div className="w-full flex flex-wrap mb-6"> */}
<form class="w-full max-w-lg mt-2 ml-20" encType="multipart/form-data">
   <div class="w-full md:w-6/6 flex flex -mx-3 mb-6">
  
    <div className="md:w-1/4 px-7 mr-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-2 rounded rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="First Name" />
    </div>
    <div className=" md:w-1/4 px-7 mr-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-2 rounded rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" />
    </div>
    <div className="w-full md:w-1/4 px-7 mr-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Country
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-2 rounded rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Country" />
    </div>
    <div className="md:w-1/4 px-7 mr-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Telephone
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-2 rounded rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Telephone" />
    </div>
  </div>
  <div className="w-full md:w-3/6 mt-4 px-1">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Upload profile
      </label>
      <input type="file" className="appearance-none px-1 md:w-6/6 block bg-gray-200 text-gray-700 border border-gray-200 rounded rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="flex-upload profile picture" type="file" />
    </div>
  <div className="flex flex-wrap -mx-3 mb-6">  
<div className="flex flex-wrap mt-2 -mx-3 mb-6">
    <div className="w-full md:w-1/3 mt-3 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Email
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-1 px-2 rounded rounded-full mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="Email"   />
    </div>
    <div className="w-full md:w-1/3 mt-3 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-2 rounded rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="password" placeholder="***************" />
    </div>
    <div class="md:grid md:items-right mb-6">
    <div class="md:w-1/3"></div>
    <label class="md:w-2/3 block text-gray-500 font-bold">
    
    </label>
  </div>
  <div className="w-full md:w-3/3 mt-3 px-3">
  <button className="flex-shrink-0 bg-yellow-600 text-center rounded rounded-full hover:bg-yellow-600 border-yellow-300 hover:border-yellow-500 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      Sign Up
    </button>
    <button className="flex-shrink-0 rounded rounded-full border-4 text-blue-500 hover:bg-teal-800 text-sm py-1 px-2 ml-2 rounded" type="button">
      Cancel
    </button>
    </div>
    </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
</form>
<div className="w-full mt-10 md:w-1/6"></div>
<div className="w-full md:w-1/6">      </div>
{/* </div>
</div> */}
</div>

</div>
<Footer/>
</>
    )
}
export default Signup;

