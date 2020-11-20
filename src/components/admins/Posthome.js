import React,{Component,useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import  '../../css/tailwindcss.css';
// import '../../css/dashboardcss.css';
import {useHistory} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import image from '../../components/image/bible.jpg';
import '../../App';
import Nav from './Nav';
import Sidemenu from './Sidemenu';



function Addpost(){
    
    return  (
        <>
<div class="bg-gray-800 font-sans leading-normal tracking-normal mt-12">

   
<Nav/>


<div class="flex flex-col  md:flex-row">

 <Sidemenu/>

    <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
        

        <div class="bg-gray-800 p-2 shadow text-xl text-white">
            <h5 class="text-gray-700 text-xs font-bold pl-2">Manage and Add post to home</h5>
        </div>

        <div class="flex flex-wrap w-full px-5 py-1">
           
        {/* <div class="w-full md:w-1/6 xl:w-1/6 p-3">
                
                
                
        </div> */}
        <div class="w-full   mt-1  p-3">
        <form class="w-full  bg-gray-200 mt-1 ml-2 px-3 py-3 rounded-xl">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2">
                    <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        title
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""/>
                    
                    </div>
                        </div>  
                    <div class="w-full md:w-1/2">
                    <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Choose file
                    </label>
                    
                    <input type="file" class="w-full text-gray-700 px-1 py-1 border rounded"></input>
                    
                    </div>

                    </div>                  
                    <div class="w-full md:w-1/2">                    
                    <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Discription
                    </label>
                    <textarea class="w-full bg-gray-200 px-1 py-1 text-gray-700 border rounded-lg focus:outline-none" rows="4"></textarea>
                    
                    
                    </div>
                    </div>
                    <div class="w-full md:w-1/2">   
                    <div class="w-full  px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Categories
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-1 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>Events</option>
                        <option>Bible Versees</option>
                        <option>Sermons</option>
                        <option>Qoutes</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    <button class="bg-green-400 mt-2 py-1 px-2  rounded-xl">Add Post</button>
                    </div>
                    </div>

                    
                    
                </div>

                {/* <div class="flex flex-wrap -mx-3 mb-2 ">
                    
                    
                
                </div> */}
                </form>
            
            
            
        </div>
        <div class="w-full h-50 md:w-1/6 xl:w-1/6 p-3">
            
            
            
        </div>

        <div class="w-full  shadow text-xl   ">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="header-title text-gray-700 text-lg font-bold">Sermons Posted</h5>
                                <div class="single-table">
                                    <div class="table-responsive">
                                        <table class="table text-center">
                                            <thead class=" text-lg font-bold bg-gray-200">
                                                <tr class="text-gray-800  text-sm">
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Discription</th>
                                                    <th scope="col">File</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="text-sm">
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>09 / 07 / 2018</td>
                                                    <td>$120</td>
                                                    <td>09442 / 07 / 2018</td>
                                                    <td>$120</td>
                                                    <td><button class="bg-green-300 py-1 px-2  rounded-full">Active</button></td>
                                                    <td><button class="bg-yellow-300 py-1 px-2  rounded-full">Update</button></td>
                                                    <td><button class="bg-red-300 py-1 px-2  rounded-full">Delete</button></td>
                                                </tr>
                                                <tr class="text-sm">
                                                    <th scope="row">1</th>
                                                    <td>jone</td>
                                                    <td>09 / 07 / 2018</td>
                                                    <td>$150</td>
                                                    <td>09 / 07 / 2018</td>
                                                    <td>$120</td>
                                                    <td><button class="bg-green-300 py-1 px-2  rounded-full">Active</button></td>
                                                    <td><button class="bg-yellow-300 py-1 px-2  rounded-full">Update</button></td>
                                                    <td><button class="bg-red-300 py-1 px-2  rounded-full">Delete</button></td>
                                                </tr>
                                                <tr class="text-sm">
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>09 / 07 / 2018</td>
                                                    <td>$120</td>
                                                    <td>09 / 07 / 2018</td>
                                                    <td>$120</td>
                                                    <td><button class="bg-green-300 py-1 px-2  rounded-full">Active</button></td>
                                                    <td><button class="bg-yellow-300 py-1 px-2  rounded-full">Update</button></td>
                                                    <td><button class="bg-red-300 py-1 px-2  rounded-full">Delete</button></td>
                                                </tr>
                                                <tr class="text-sm">
                                                    <th scope="row">1</th>
                                                    <td>jone</td>
                                                    <td>09 / 07 / 2018</td>
                                                    <td>$150</td>
                                                    <td>09 / 07 / 2018</td>
                                                    <td>$120</td>
                                                    <td><button class="bg-green-300 py-1 px-2  rounded-full">Active</button></td>
                                                    <td><button class="bg-yellow-300 py-1 px-2  rounded-full">Update</button></td>
                                                    <td><button class="bg-red-300 py-1 px-2  rounded-full">Delete</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
        
      
        
        

            
        
        
        
        
                </div>

                

       


        </div>
        
    </div>
    





</div>
</>

    )
}
export default Addpost;