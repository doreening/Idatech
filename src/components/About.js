import React,{Component,useState,useEffect} from 'react';
import Navbar from '../components/Navbar';

import bible from '../components/image/bible.jpg';
import Footer from '../components/Footer';
import AOS from 'aos';

function About(){
  AOS.init();
    return(
<>
<Navbar />


<div className=" p-2 ">

<div className="w-full md:w-1/6"></div>


        <div className="flex flex-wrap mt-8 p-2">

        <div className="w-full md:w-3/6  ">
      

      <div className="image">
        <img data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" 
        src={bible} 
        className="rounded-3xl "  alt="bible.jpg"/>
       
        </div>
        </div>


        <div class="w-full md:w-3/6 App-home1 px-8 pt-2 pb-8 mb-4">
          <p data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" 
           className="text-2xl" >House church is platform with aims to gather world christians for sharing the gospel<br/><br/>
We are driven to help world christians to share Gospel, following different services that has passed in differents churches</p>
<p className="text-4xl font-weight-bold"> Our Goals</p>
<p className="text-2xl">Providing access for christians to share bible study
Change the world with word of God<br/>
Interconection of christians to share the Gospel and the change the World</p>
</div>

<div className="w-full md:w-1/6 " ></div>
        </div>

    
       </div>



       
<Footer/>

            
           
</>


    )
}

export default About;