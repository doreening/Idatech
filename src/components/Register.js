import React, {useState,useEffect} from 'react';
import '../css/tailwindcss.css';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import pexelp from './img/pexelp.jpg';
function Register(){
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
const [username,setUsername]=useState("");
const [user,setUser]=useState("");
const [female,setFemale]=useState("");

    const [loading,setLoading]=useState(false);

    const [message,setMessage]=useState("");

    const handleform = (event)=>{
        setLoading(true);
        event.preventDefault();
        const data={
            "username":username,
            "firs_tname":firstname,
            "last_name":lastname,
            "phone":email,
            "password":password,
            "profile":{
              "country":lastname,
              "accounttype":user,
              "gender":female,
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
<Navbar/>

    <div className="flex flex-wrap pt-10">
    <div className="w-full md:w-1/6"></div>
<div className="w-full md:w-2/6 App-pexelp register">
  <img src={pexelp}/>
</div>



<div className="w-full md:w-3/6 max-w-xm bg-white shadow-md pt-6 mb-6 Register p-20px">
<p className="p-4 pr-10 font-bold text-center text-3xl text-yellow-700">Become Ambassador</p>



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
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-7">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        If you know House Church work your mission or vision
      </label>
      <textarea className="mt-3 appearance-none block bg-gray-200 w-full md:w-5/6 ext-gray-700 border border-gray-200 rounded py-3 px-1 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Enter your motivation"  />
    </div>
    </div>
    <div className="w-full md:w-3/6 px-1">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Upload profile
      </label>
      <input type="file" className="appearance-none px-1 md:w-6/6 block bg-gray-200 text-gray-700 border border-gray-200 rounded rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="flex-upload profile picture" type="file" />
    </div>
  
  <div className="w-full md:w-3/6 px-1 mb-4 md:mb-0 mt-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Qualifications
      </label>
      <div className="relative">
        <select className="block appearance-none w-full md:w-6/6 bg-gray-200 border border-gray-200 text-gray-700 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Bacheror Degree of Theology</option>
          <option>Apostle</option>
          <option>Bishopu</option>
          <option>Pastor</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  
 
<div className="flex flex-wrap mt-2 -mx-3 mb-6">
    <div className="w-full md:w-1/3 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Email
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-1 px-2 rounded rounded-full mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="Email"   />
    </div>
    <div className="w-full md:w-1/3 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-2 rounded rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="password" placeholder="***************" />
    </div>
    <div class="md:grid md:items-right mb-6">
    <div class="md:w-1/3"></div>
    <label class="md:w-2/3 block text-gray-500 font-bold">
      <input class="mr-2 mt-2 leading-tight" type="checkbox"/>
      <p class="text-sm text-gray-600 ml-4">
       Agree terms and conditions, An Ambassador have respponsible........<button className="text-blue-500">Read More</button>
      </p>
    </label>
  </div>
  <div>
    
  <button className="flex-shrink-0 bg-yellow-600 text-center rounded rounded-full hover:bg-yellow-600 border-yellow-300 hover:border-yellow-500 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      Sign Up
    </button>
    <button className="flex-shrink-0 rounded rounded-full border-4 text-blue-500 hover:bg-teal-800 text-sm py-1 px-2 ml-2 rounded" type="button">
      Cancel
    </button>
    </div>
    </div>
</form>
{/* </div>
</div> */}
</div>

</div>
<Footer/>
</>
)
}
export default Register;