import React,{Component,useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import home from '../home.jpg';
import male from '../male.png';
import female from '../female.png';
import bible from '../components/image/bible.jpg';
import Footer from '../components/Footer';



function Sermons(){

    return(
<>
<Navbar />
<div data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="flex flex-wrap mt-8 p-8 ml-8">

<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-4 ">
  < img class="w-full" src={bible} alt="Sunset in the mountains"/>
  <div class="px-6 py-4 ">
    <div class="font-bold text-xl mb-2">Sunday Service|November 6th</div>
    <p class="text-gray-700 text-base">
     Housechurch
    </p>
    <p class="">
    <a href="https://www.youtube.com/watch?v=IWYpxwMvMEM" class="btn-custom mb-2 p-2 text-center popup-vimeo"><span class="icon-play"></span> Watch</a>
    <a href="#" class="btn-custom p-2 text-center"><span class="icon-download"></span> Download</a>
    </p>
  </div>
  
  <div class=" flex flex-reverse px-6 pt-4 pb-2">
  <div class="w-full md:w-1/2 sm:w-full">< img class="proimage" src={female}/></div>
  <div class="w-full md:w-1/2 sm:w-full">
  <p class="pastornames text-gray-700 mt-3">pastor</p>
    
  </div>


   
  </div>
</div>


<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white ml-4 mb-4">
  <img class="w-full" src={bible} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Sunday Service|12 November,2020</div>
    <p class="text-gray-700 text-base">
     Housechurch
    </p>
    <p class="">
    <a href="https://www.youtube.com/watch?v=IWYpxwMvMEM" class="btn-custom mb-2 p-2 text-center popup-vimeo"><span class="icon-play"></span> Watch</a>
    <a href="#" class="btn-custom p-2 text-center"><span class="icon-download"></span> Download</a>
    </p>

  </div>
  <div class=" flex flex-wrap px-6 pt-4 pb-2">
    <div class="w-full md:w-1/2 sm:w-full"><img  class="proimage" src={female}/></div>
    <div class="w-full md:w-1/2 sm:w-full">
      <p class="pastornames text-gray-700 mt-3">pastor</p></div>
    
  </div>
</div>


<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white ml-4  mb-4">
  <img class="w-full" src={bible} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Sunday Service|November ,2020</div>
    <p class="text-gray-700 text-base">
     Housechurch
    </p>
    <p class="">
     <a href="https://www.youtube.com/watch?v=IWYpxwMvMEM" class="btn-custom mb-2 p-2 text-center popup-vimeo"><span class="icon-play"></span> Watch</a>
     <a href="#" class="btn-custom p-2 text-center"><span class="icon-download"></span> Download</a>
        </p>

  </div>

  <div class="flex flex-reverse px-6 pt-4 pb-2">
    <div class="w-full md:w-1/2 sm:w-full "><img class="proimage" src={female }/></div>
    <div class="w-full md:w-1/2 sm:w-full">
      <p class="pastornames text-gray-700 mt-3  ">Pastor</p>
      </div>

  </div>
</div>

<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src={bible} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Sunday Service|November 18,2020</div>
    <p class="text-gray-700 text-base">
     Housechurch
    </p>
    <p class="">
    <a href="https://www.youtube.com/watch?v=IWYpxwMvMEM" class="btn-custom mb-2 p-2 text-center popup-vimeo"><span class="icon-play"></span> Watch</a>
    <a href="#" class="btn-custom p-2 text-center"><span class="icon-download"></span> Download</a>
    </p>


  </div>
  <div class=" flex flex-reverse px-6 pt-4 pb-2">
  <div class="w-full md:w-1/2 sm:w-full"><img class="proimage" src={female}/></div>
  <div class="w-full md:w-1/2 sm:w-full">
  <p class="pastornames text-gray-700 mt-3  ">Pastor</p>
  </div>

  </div>
</div>


<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white ml-4 ">
  <img class="w-full" src={bible} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Sunday Service|November 22,2020</div>
    <p class="text-gray-700 text-base">
     Housechurch
    </p>
    <p class="">
    <a href="https://www.youtube.com/watch?v=IWYpxwMvMEM" class="btn-custom mb-2 p-2 text-center popup-vimeo"><span class="icon-play"></span> Watch</a>
    <a href="#" class="btn-custom p-2 text-center"><span class="icon-download"></span> Download</a>
    </p>
  </div>

  <div class="flex flex-reverse px-6 pt-4 pb-2">
    <div class="w-full md:w-1/2 sm:w-full"><img class="proimage" src={female}/></div>
    <div class="w-full md:w-1/2 sm:w-full">
    <p class="pastornames text-gray-700 mt-3  ">Pastor</p>
    </div>
 
  </div>
</div>


<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white ml-4">
  <img class="w-full" src={bible} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Sunday Service|December 2,2020</div>
    <p class="text-gray-700 text-base">
      Housechurch
    </p>
    <p class="">
    <a href="https://www.youtube.com/watch?v=IWYpxwMvMEM" class="btn-custom mb-2 p-2 text-center popup-vimeo"><span class="icon-play"></span> Watch</a>
    <a href="#" class="btn-custom p-2 text-center"><span class="icon-download"></span> Download</a>
    </p>



  </div>
  <div class=" flex flex-reverse px-6 pt-4 pb-2">
  <div class="w-full md:w-1/2 sm:w-full"><img class="proimage" src={female}/></div>
  <div class="w-full md:w-1/2 sm:w-full">
  <p class="pastornames text-gray-700 mt-3  ">Pastor</p>
  </div>

  </div>
</div>
</div>

{/* <section class="ftco-section bg-light" id="sermons-section">
            <div class="container">
                <div class="row justify-content-center pb-5">
          <div class="col-md-12 heading-section text-center ftco-animate">
            <span class="subheading">Sermons</span>
            <h2 class="mb-4">House Church Online Service</h2>
           
          </div>
        </div>
        
        <div class="row">
      
      <div class="col-md-4 shadow">
          <div class="sermon-wrap ftco-animate">
                  <div class="img d-flex align-items-center justify-content-center back" >
                      <div class="text-content p-4 text-center">
                          <span>by Antoine Rutayisire:</span>
                          <h3>Zaburi Nshya</h3>
                          <p class="">
                                  <a href="https://www.youtube.com/watch?v=IWYpxwMvMEM" class="btn-custom mb-2 p-2 text-center popup-vimeo"><span class="icon-play"></span> Watch</a>
                                  <a href="#" class="btn-custom p-2 text-center"><span class="icon-download"></span> Download</a>
                              </p>
                      </div>
                  </div>
                  <div class="text pt-3 text-center">
                      <h2 class="mb-0"><a href="#">

Dore Ibintu 7 bituma ugira igikundiro ku Mana


Ijambo ry'Imana </a></h2>
                      <div class="meta">
                          <p class="mb-0">
                              <span>Time:9:00AM</span>
                          </p>
                      </div>
                  </div>
              </div>
      </div>


  </div>


      </div>
  </section> */}



        





<Footer/>

</>
    );
}

export default Sermons;