import React, {useState,useEffect} from 'react';
import '../css/tailwindcss.css';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import home from '../home.jpg';
// import God from './img/God.png';


function Events(){
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
        axios.post("http://127.0.0.1:8000/reg/endpoints/",data)
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
        {/* <div class="bg-fixed sm:bg-local md:bg-scroll lg:bg-local xl:bg-fixed Events"> */}
        <div className="w-full Events text-center text-bold-100 text-xl pt-8">
            <p className="text-bold text-yellow-800 text-5xl pt-10 px-8 py-8">Welcome to the house church Events wall</p>
            <h5 className="text-bold text-white text-3xl">PERFECT CHURCH FOR<br></br>IMPLEMENT PEOPLE</h5>
            <br></br>
            <p className="text-bold text-gray-400 text-italic">For any away, behinds the world mantains, far from the countries vokalia and concenatia<br></br>there live the blind text separeted they live in </p>
        </div>
        <div>
        <div className="w-full flex flex-wrap">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 bg-gray-500 ml-20 border border border-radius-40px">
  <img className="w-full" src={home}/>
  <div className="px-4 py-3">
    <div className="font-bold text-xl mb-2">Family Ministry</div>
    <h3>About us</h3>
    <p className="text-gray-700 text-base">
    Mission: Building strong families through the equipping of husbands and fathers, wives and mothers, and children through teaching about household order, intentional discipleship and development of a family ministry plan in order to engage in good deeds and bring glory to God....<button><a class="text-blue-600 text-bold">Click this link</a></button>
    </p>
    <h6 class="text-bold text-italic bg-yellow-600">Where the two meet God comes down and lives with them</h6>
  </div>
  <div className="px-6 pb-2">
   
  </div>
</div>
<div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 bg-gray-500 ml-20 border border border-radius-40px">
  <img className="w-full" src={home}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Youth Ministry</div>
    <p className="text-gray-700 text-base">
    <h3>About us</h3>
    We provide a safe, positive environment for students (7th -12th grade) to connect with God and with others. Our youth director, Jade Harberg, is dedicated to seeing young people grow closer to Jesus and develop godly character.....<button><a class="text-blue-600 text-bold">Click this link</a></button>
    </p>
    <br></br>
    <h5 className="text-bold text-italic bg-yellow-600">With God, nothing is impossible</h5>
  </div>
</div>
<div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 bg-gray-500 ml-20 border border border-radius-40px">
  <img className="w-full" src={home}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Gosple Ministry</div>
    <p className="text-gray-700 text-base">
    <h3>About us</h3>
    <br></br>
No matter how u cry<br></br>
No matter what u see <br></br>
No matter what comes in your way <br></br>
One thing I know that is definitely in my heart .my tomorrow must be Greater than to day.<button><a class="text-blue-600 text-bold">Click this link</a></button>
</p>
<h5 className="text-bold text-italic bg-yellow-600">Nothing else we are created for, we are created to praise God</h5>
  </div>
</div>
</div>
        </div>

        <Footer/>
        </>
        )

        }
        export default Events;