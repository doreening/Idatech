import React,{Component,useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import  '../../css/tailwindcss.css';
//import react icons
import { FaBeer } from 'react-icons/fa';
// import '../../css/dashboardcss.css';
import {useHistory} from 'react-router-dom';
// import * as Icon from 'react-bootstrap-icons';
import '../../App';
// import Posts from './Posts';


import * as Icon from 'react-bootstrap-icons';
import Nav from './Nav';
import Sidemenu from './Sidemenu';


function Dashboard(){
    const[localuser,setLocaluser]=useState("");
    let history=useHistory();
    const user=localStorage.getItem("username")

    // setLocaluser
    const Logout =()=>{
        localStorage.removeItem("username");
        history.push("/signin")
    }
    if(!user){
        history.push("/signin")

    }
    
    return  (

        <>

<div class="bg-gray-900 font-sans leading-normal tracking-normal mt-12">

   
<nav class="bg-gray-900 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">

    <div class="flex flex-wrap items-center">
        <div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
            <a href="admin">
                <span class="text-lg pl-2">House Church </span>
            </a>

              <span class="w-full flex rounded-md shadow-sm">
              <a href="/registers" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:border-yellow-700 focus:shadow-outline-yellow active:bg-yellow-700 transition ease-in-out duration-150">
                Report
              </a>
            </span>
            <span class="w-full flex rounded-md shadow-sm">
            <button onClick={Logout} className="ml-20 w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:border-yellow-700 focus:shadow-outline-yellow active:bg-yellow-700 transition ease-in-out duration-150"><i class="fas fa-sign-out-alt fa-fw"></i> Log Out </button>
            </span>
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
                            <button onClick={Logout}><i class="fas fa-sign-out-alt fa-fw"></i> Log Out </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</nav>
<div class="bg-gray-800 font-sans leading-normal tracking-normal mt-12">

   <Nav/>


<div class="flex flex-col md:flex-row">
    <Sidemenu/>



    <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">

    <div class="bg-gray-200 p-2 shadow text-xl text-white">
            <h5 class="text-gray-700 text-xs font-bold pl-2">Analytics</h5>
        </div>

        <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                
                <div class="bg-green-100 border-b-4 border-green-600 rounded-lg shadow-lg p-1">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class=""><i class="fa fa-wallet fa-2x fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h5 class="font-bold uppercase text-gray-600">Total user</h5>
                            <h3 class="font-bold text-3xl">3249 <span class="text-green-500"><i class="fas fa-caret-up"></i></span></h3>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="w-full h-50 md:w-1/2 xl:w-1/3 p-3">
                
                <div class="bg-orange-100 border-b-4 border-orange-500  rounded-lg shadow-lg p-1">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class=""><i class="fas fa-users fa-2x fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h5 class="font-bold uppercase text-gray-600"> Add Post</h5>
                            <h3 class="font-bold text-3xl">249 <span class="text-orange-500"><i class="fas fa-exchange-alt"></i></span></h3>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
               
                <div class="bg-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-lg p-1">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class=""><i class="fas fa-user-plus fa-2x fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h5 class="font-bold uppercase text-gray-600">Events</h5>
                            <h3 class="font-bold text-3xl">2 <span class="text-yellow-600"><i class="fas fa-caret-up"></i></span></h3>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                
                <div class="bg-blue-100 border-b-4 border-blue-500 import Addpost from './Addpost';rounded-lg shadow-lg p-1">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class=""><i class="fas fa-server fa-2x fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h5 class="font-bold uppercase text-gray-600">Sermons</h5>
                            <h3 class="font-bold text-3xl">152 sermons</h3>
                        </div>
                    </div>
                </div>
               
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                
                <div class="bg-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-lg p-1">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class=""><i class="fas fa-tasks fa-2x fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h5 class="font-bold uppercase text-gray-600">User Posted</h5>
                            <h3 class="font-bold text-3xl">7 tasks</h3>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                
                <div class="bg-red-100 border-b-4 border-red-500 rounded-lg shadow-lg p-1">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class=""><i class="fas fa-inbox fa-2x fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h5 class="font-bold uppercase text-gray-600">Issues</h5>
                            <h3 class="font-bold text-3xl">3 <span class="text-red-500"><i class="fas fa-caret-up"></i></span></h3>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>


        <div class="flex flex-row flex-wrap flex-grow mt-2">

           
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                
               
            </div>

            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                
               
                
            </div>


        </div>
    </div>
</div>



</div>
</div>
</>

    )
}
export default Dashboard;