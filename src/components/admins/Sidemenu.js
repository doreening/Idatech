import React,{Component,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../../css/tailwindcss.css';
//import react icons
import { FaBeer } from 'react-icons/fa';
// import '../../css/dashboardcss.css';
import {useHistory} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'
import { Nav } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa'
import {FaUserPlus} from 'react-icons/fa';


function Sidemenu(){
    
    return  (
        <>
        <div class="bg-gray-800  shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">

<div class="md:mt-12  md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
        <ul class="list-reset flex flex-wrap md:mt-2 md:flex-col py-0 md:py-1 px-2  md:px-2  md:text-left">
            <li class="mr-3 flex-1">
                <a href="/Dashboard" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2  hover:border-pink-500">
                    <i class="fas fa-tasks p-3 pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Dashboard</span>
                </a>
            </li>
            <li class="mr-3 flex-1">
                <a href="/posthome" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2  hover:border-purple-500">
                    <i class="fa fa-envelope p-3 pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Add Post</span>
                </a>
            </li>
            <li class="mr-3 flex-1">
                <a href="/managesermons" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2  hover:border-purple-500">
                    <i class="fas fa-chart-area p-3 pr-0 md:pr-3 text-blue-600"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Sermons </span>
                </a>
            </li>
            <li class="mr-3 flex-1">
            <a href="/users" class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2  hover:border-red-500">
                    <span class="fa fa-users p-3 pr-0 md:pr-3"></span><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Users</span>
                </a>
            </li>
            <li class="mr-3 flex-1">
                <a href="/Ambassador" class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2  hover:border-red-500">
                    <i class="fa fa-wallet p-3 pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Ambassadors</span>
                </a>
            </li>
            <li class="mr-3 flex-1">
                <a href="/home" class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2  hover:border-red-500">
                    <i class="fa fa-church p-3 pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Home</span>
                </a>
            </li>
            
        </ul>
    </div>
</div>

        </>
    )
}
export default Sidemenu;








