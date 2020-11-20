import React,{Component,useState,useEffect} from 'react';
import AOS from 'aos';
import home from '../home.jpg';
import male from '../male.png';
import female from '../female.png';
import avatar from  '../images/avatar.jpg';
import bibl from  '../images/bibl.jpg';

import bible from '../components/image/bible.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import '../css/tailwindcss.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
//TODO:{Benjamin} will work on dashboard /admin/ include approve ambassador/reporting/adding content to web
//TODO:{prudent} home system design and back end/ ambassador part/ quotes
//TODO:{teddy}  Login/signup with second authentication/security of urls
//TODO:{Doreen} Reporting/ events management/
function Body(){
  AOS.init();

  const [data, setData] = useState([]);

  const [count,setCount] = useState(0);
  const [loading,setLoading] = useState(false);
  const [housechurch,setHousechuch] = useState('Welcome to House Church Platform');
  const clickHandle = () =>{
       setLoading(true)
       setCount(+1)
       setHousechuch(housechurch+2)

       setTimeout(function(){
         setLoading(false);
       },3000)
      
       }
       //let fetch information
       useEffect( ()=>{
          // async await
         const response = axios.get('http://127.0.0.1:8000/reg/endpoints/')
        //  print(response);
         .then(res=>{
           setData(res.data);
           console.log(res)
         })
         .catch((err)=>{
           console.log(err)
         })
       },[]
       );
 
    return(
      <>
      <Navbar />

        <div className="p-2 ">



        <div className="flex flex-wrap p-2 mt-8">


        <div className="w-full md:w-3/6">
        <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="containers">
        <img src={home} className="shadow-lg App-home" alt="home" /> 

        <div className="mb-4 content">
    <h1 className="text-3xl text-bold">Heading</h1>
    <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. </p>
  
        <button class="flex-shrink-0 bg-yellow-600 hover:bg-yellow-700 border-yellow-600 hover:border-yellow-700 text-sm border-2 text-white py-1 px-2 rounded-lg " type="button">
     <a href="/register" >  Become Ambbassador</a>
    </button>
        </div>
        </div> 
        </div>
        </div>

        <div class="w-full md:w-/6   App-home1 px-8 pt-2 pb-8 mb-4">

<div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="w-full mb-6 bg-white shadow-lg App-male1">
        <img src={male} className="App-male" alt="male" /> 
        <p className="pt-5">
        House <code>Church  </code> Ben Iraa
        </p>
        <a
          className="My-color"
          href="http://igiranezaprude2portfolio.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
        </div>
        <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="w-full mb-6 bg-white shadow-lg App-female">
        <img src={female} className="mb-6 App-female" alt="female" /> 
        <p className="p-3 pt-5">
        House<code>Church  </code> Igabire Doreen
        </p>
        <a
          className="p-3 My-color"
          href="http://igiranezaprude2portfolio.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
       
        </a>
        </div>
        <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="w-full mb-6 bg-white shadow-lg App-male2">
        <img src={male} className="App-male " alt="male" /> 
        <p className="pt-5">
        House <code>Church  </code>  Igiraneza Prude2 
        </p>
        <a
          className="My-color"
          href="http://igiranezaprude2portfolio.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
        </div>
        
       </div>
      
      

                       
                         {/* <div class="slider-active">
 
                            <div class="single-slider">
                                <div class="trending-top mb-30">
                                    <div class="trend-top-img">
                                        <img src={home} alt="" width="1000" height="500" />
                                        <div class="trend-top-cap">
                                            <span class="bgr slider" data-animation="fadeInUp" data-delay=".2s" data-duration="1000ms" > Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. </span>
                                            <h2><a href="/register" data-animation="fadeInUp" data-delay=".4s" data-duration="1000ms">Become Ambbassador</a></h2>
                                            <p data-animation="fadeInUp" data-delay=".6s" data-duration="1000ms">by Admin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                      
                        </div>
                    



 <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" class="grid ">
        <div uk-slider="center: true">

    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

        <ul class="uk-slider-items uk-child-width-1-3@s uk-grid">
            <li>
                <div class="uk-card uk-card-default shadow-lg App-home2 w">
                    <div class="uk-card-media-top">
                        <img src={home} alt="" />
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default shadow-lg App-home2 w-">
                    <div class="uk-card-media-top">
                        <img src={bible} alt="" />
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default shadow-lg App-home2">
                    <div class="uk-card-media-top">
                        <img src={home} alt="" />
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default shadow-lg App-home2">
                    <div class="uk-card-media-top">
                        <img src={bible} alt="" />
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default shadow-lg App-home2">
                    <div class="uk-card-media-top">
                        <img src={home} alt="" />
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </li>
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>

    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>
    </div> 

    
        </div>



        {/* <div className="w-full md:w-1/6"></div> */}

        {/* <div class="w-full md:w-2/6   App-home1 px-8 pt-2 pb-8 mb-4"> */}
{/* 
<div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="w-full mb-6 bg-white shadow-lg App-male1">
        <img src={male} className="App-male" alt="male" /> 
        <p className="pt-5">
        House <code>Church  </code> Ben Iraa
        </p>
        <a
          className="My-color"
          href="http://igiranezaprude2portfolio.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
        </div>
        <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="w-full mb-6 bg-white shadow-lg App-female">
        <img src={female} className="mb-6 App-female" alt="female" /> 
        <p className="p-3 pt-5">
        House<code>Church  </code> Igabire Doreen
        </p>
        <a
          className="p-3 My-color"
          href="http://igiranezaprude2portfolio.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
       
        </a>
        </div>
        <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="w-full mb-6 bg-white shadow-lg App-male2">
        <img src={male} className="App-male " alt="male" /> 
        <p className="pt-5">
        House <code>Church  </code>  Igiraneza Prude2 
        </p>
        <a
          className="My-color"
          href="http://igiranezaprude2portfolio.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
        </div>
        
       </div>
      
       */}



{/* <table class="table-auto">
  <thead>
    <tr>
      <th class="px-4 py-2">First </th>
      <th class="px-4 py-2">Last Name</th>
      <th class="px-4 py-2">Phone</th>
    </tr>
  </thead> */}

  {/* {data.map( (item,key)=>{
                return(
  <tbody>
    <tr key={key}>
      <td class="border px-4 py-2">{item.firstname}</td>
      <td class="border px-4 py-2">{item.lastname}</td>
      <td class="border px-4 py-2">{item.phone}</td>
    </tr>
 
  </tbody>
        )
      }
      )}
</table>   



</div>

</div>



       <div className="w-full p-5 bg-white text-bold text-4xl mb-4"><center>Posts</center></div>

 <div className="flex flex-wrap p-2 mt-8">
   <div class="w-full md:w-3/6 bg-white px-8  shadow-lg topup">
       <h1 className="text-3xl text-bold">Latest Posts</h1>
    <p>Lorem ipsum dolor sit amet. </p>
  
   </div>
      <div class="w-full md:w-3/6 ">
   </div>
 </div>



    <div className="flex flex-wrap p-2 mt-8">


        <div class="w-full md:w-3/6 bg-white App-home1 px-8 pt-2 pb-8 mb-4 bot shadow-lg">
         */}


{/* <div className="flex flex-wrap p-2 ">
<div class="uk-card uk-card-default uk-width-1-2@m">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto avatar">
                <img class="uk-border-circle" width="40" height="40" src={avatar} /> */}
            {/* </div>
            <div class="uk-width-expand"> */}
                {/* <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
            </div>
        </div>
    </div> */}
    {/* <div class="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div class="uk-card-footer">
        <a href="#" class="uk-button uk-button-text">Read more</a>
    </div>
</div> */}



{/* <div class="uk-card uk-card-default uk-width-1-2@m">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto avatar">
                <img class="uk-border-circle" width="40" height="40" src={avatar} /> */}
            {/* </div>
            <div class="uk-width-expand"> */}
                {/* <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
            </div>
        </div>
    </div> */}
    {/* <div class="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div class="uk-card-footer">
        <a href="#" class="uk-button uk-button-text">Read more</a>
    </div>
</div>

</div>
        
       </div> */}


   {/* <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" class="w-full md:w-3/6 px-12 bring">
      <h1 className="text-4xl text-bold">Bring yours people together in channel </h1> <br />
    <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. </p>
<br />
    <p><a className="text-yellow-800 text-bold text-2xl" href=""><u>Larn more about channel</u></a> </p>
  
   </div>

       </div>

        <div className="w-full p-5 bg-white text-bold text-4xl mb-4"><center>Events</center></div>



     <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" class="grid ">
        <div uk-slider="center: true">

    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

        <ul class="uk-slider-items uk-child-width-1-3@s uk-grid">
            <li>
                <div class="uk-card uk-card-default shadow-lg App-home2 w">
                    <div class="uk-card-media-top">
                        <img src={home} alt="" /> */}
                    {/* </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
            <li> */}
                {/* <div class="uk-card uk-card-default shadow-lg App-home2 w-">
                    <div class="uk-card-media-top">
                        <img src={bible} alt="" />
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
            <li> */}
                {/* <div class="uk-card uk-card-default shadow-lg App-home2">
                    <div class="uk-card-media-top">
                        <img src={home} alt="" />
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default shadow-lg App-home2">
                    <div class="uk-card-media-top">
                        <img src={bible} alt="" />
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div> */}
            {/* </li>
            <li>
                <div class="uk-card uk-card-default shadow-lg App-home2">
                    <div class="uk-card-media-top">
                        <img src={home} alt="" />
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
        </ul> */}

        {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>

    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>
    </div> 
     */}

</div>

<Footer/>


      </>
    )
}

export default Body;