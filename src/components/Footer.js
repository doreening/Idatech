import React,{Component} from 'react';
import twitter from './image/twitter.png';
import facebook from './image/facebook.png';
import instagram from './image/instagram.png';

function Footer(){
    return(
        <div className="p-6 text-yellow-500 App-footer">
           
        <div className="flex flex-wrap ">
       <div className="w-2/6">
           {/* <span>Follow us to see our posts</span> */}
         
       </div>
       <div className="w-2/6"></div>
            
            <div className="flex flex-reverse ml-48 w-1/6">
            <img className=" hover:yellow-400  p-2" width="40px" src={twitter} alt="" />
         <img className=" p-2" width="40px" src={facebook} alt="" />
         <img className="p-2" width="40px" src={instagram} alt="" />

            </div>
            <div className="flex flex-reverse ">
                <a href="" className="text-gray-200 p-1 text-no-underline">Terms & conditions</a>
                <a href="" className="text-gray-200 p-1">Privacy policy</a>
                <a href="" className="text-gray-200 p-1">Cookies policy</a>
                <a href="" className="text-gray-200 p-1">Copyrights Notification </a>
            {/* &copy;2020 Ida Technology. All rights reserved. */}
            </div>
            
            
            

        </div>
        </div>
    )
}

export default Footer;