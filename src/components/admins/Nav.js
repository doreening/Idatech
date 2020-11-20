import React,{Component,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../../css/tailwindcss.css';
//import react icons
import { FaBeer } from 'react-icons/fa';
// import '../../css/dashboardcss.css';
import {useHistory} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'
import { Nav } from 'react-bootstrap';


function Navbar(){
    const[localuser,setLocaluser]=useState("");
    const[click,setClick]=useState(0);
    const[drop,setDrop]=useState(false);

    const handledrop=()=>{
        if(click===0){
            setDrop(true);
            setClick(1);
        }
        else{
            setDrop(false);
            setClick(0);
        }
    }

    let history=useHistory();
    const user=localStorage.getItem("username")
    // setLocaluser
    const Logout=()=>{
        localStorage.removeItem("username");
        history.push("/signin")
    }
    if(!user){
        history.push("signin")

    }

    
    return  (
        <>

        <nav class="bg-gray-900 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">

            <div class="flex flex-wrap items-center">
                <div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                    <a href="admin">
                        <span class="text-sm text-gray-500 pl-2">House Church </span>
                    </a>
                </div>

                <div class="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
                    {/* my be search input */}
                </div>

                <div class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                    <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                    
                        <li class="flex-1 md:flex-none md:mr-3">
                            <div class="relative md:text-left inline-block">
                                
                                    <span onClick={handledrop} class="pr-2 text-bold  rounded-lg py-2 px-2   text-gray-400">Welcome  {user}  </span>
                            {drop?
                            <div id="myDropdown" class="  absolute bg-gray-900 text-white right-0 mt-3 p-3 overflow-auto z-30 ">
                                     
                            <a href="#" class="flex flex-reverse p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i class="fa fa-user fa-fw"></i> Profile</a>
                            <a href="#" class="flex flex-reverse p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i class="fa fa-cog fa-fw"></i> Settings</a>
                            
                            <a href="#" class="flex flex-reverse p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i class="fas fa-sign-out-alt fa-fw"></i> Log Out</a>
                            
                               </div> 
                            :<span></span>}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
        {/* {drop? 
            <div className="bg-blue-400 p-4 float-right w-200">
                <ul>
                    <li>account</li>
                    <li>account</li>
                </ul>

            </div>
        :<span></span>} */}

</>
    )
}
export default Navbar;