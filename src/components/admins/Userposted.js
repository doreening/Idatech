import React,{Component,useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import  '../../css/tailwindcss.css';
// import '../../css/dashboardcss.css';
import {useHistory} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import Sermons from '../Sermons';


function Userposted(){
    const[localuser,setLocaluser]=useState("");

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
<body class="bg-gray-900 font-sans leading-normal tracking-normal mt-12">

   
<nav class="bg-gray-900 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">

    <div class="flex flex-wrap items-center">
        <div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
            <a href="admin">
                <span class="text-lg pl-2">House Church </span>
            </a>
        </div>

        <div class="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
            {/* my be search input */}
        </div>

        <div class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
            <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
               
                <li class="flex-1 md:flex-none md:mr-3">
                    <div class="relative md:text-left inline-block">
                        <button onclick="toggleDD('myDropdown')" class="drop-button text-white focus:outline-none">
                             <span class="pr-2"><i class="em em-robot_face"></i></span> Hi, {user} </button>
                        <div id="myDropdown" class="dropdownlist absolute bg-gray-900 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible">
                            <input type="text" class="drop-search p-2 text-gray-600" placeholder="Search.." id="myInput" onkeyup="filterDD('myDropdown','myInput')"/>
                            <a href="#" class="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i class="fa fa-user fa-fw"></i> Profile</a>
                            <a href="#" class="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i class="fa fa-cog fa-fw"></i> Settings</a>
                            <div class="border border-gray-800"></div>
                            {/* <a href="#"  class="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i class="fas fa-sign-out-alt fa-fw"></i>Log Out </a> */}
                            <button oncClick={Logout}><i class="fas fa-sign-out-alt fa-fw"></i> Log Out </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</nav>


<div class="flex flex-col md:flex-row">

    <div class="bg-gray-900 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">

        <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul class="list-reset flex flex-wrap md:flex-col py-0 md:py-3 px-2  md:px-2  md:text-left">
                <li class="mr-3 flex-1">
                    <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                        <i class="fas fa-tasks p-3 pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Dashboard</span>
                    </a>
                </li>
                <li class="mr-3 flex-1">
                    <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                        <i class="fa fa-envelope p-3 pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">User Requesterd</span>
                    </a>
                </li>
                <li class="mr-3 flex-1">
                    <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600">
                        <i class="fas fa-chart-area p-3 pr-0 md:pr-3 text-blue-600"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Sermons Requested</span>
                    </a>
                </li>
                <li class="mr-3 flex-1">
                    <a href="#" class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                        <i class="fa fa-wallet p-3 pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Use posted</span>
                    </a>
                </li>
                <li class="mr-3 flex-1">
                    <a href="/addpost" class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                        <i class="fa fa-wallet p-3 pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Add Post</span>
                    </a>
                </li>
                <li class="mr-3 flex-1">
                    <a href="#" class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                        <i class="fa fa-wallet p-3 pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Back to home</span>
                    </a>
                </li>
            </ul>
        </div>


    </div>

    <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">

        <div class="bg-yellow-800 p-2 shadow text-xl text-white">
            <h3 class="font-bold pl-2">Manage and Add sermons to home</h3>
        </div>

        <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                
                
                
            </div>
            <div class="w-full h-50 md:w-1/2 xl:w-1/3 p-3">
                
                
                
            </div>
            
               
                
           
        </div>


        </div>
    </div>





</body>
</>

    )
}
export default Userposted;