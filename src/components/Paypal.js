// import React, {useState,useEffect} from 'react';
// import '../css/tailwindcss.css';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import axios from 'axios';
// import bible from './img/bible.jpg';
// import {Button} from 'react-bootstrap';
// import {Modal} from 'react-bootstrap';

// function Paypal() {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const [firstname,setFirstname]=useState("");
//     const [lastname,setLastname]=useState("");
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
// const [username,setUsername]=useState("");
// const [user,setUser]=useState("");
// const [female,setFemale]=useState("");
// const [loading,setLoading]=useState(false);
// const [message,setMessage]=useState("");

//     const handleForm = (event)=>{
//         setLoading(true);
//         event.preventDefault();
//         const data={
//             "username":username,
//             "firs_tname":firstname,
//             "last_name":lastname,
//             "phone":email,
//             "password":password,
//             "profile":{
//               "country":lastname,
//               "accounttype":user,
//               "gender":female,
//             }
//         }
//         // lets send data to endpoins
//         axios.post("http://127.0.0.1:8000/account-creation/",data)
//         .then((res)=>{
//             console.log(res.data)
//             setLoading(false)
//             setMessage("Account created successful!")

//         })
//         .catch((err)=>{
//             console.log(err)
//             setLoading(false)
//             setMessage("Account created failed!")
//         })
//     }
  
//     return (
//       <>
//       <Navbar/>
//        <Button variant="primary" onClick={handleShow}>
//             Donate
//         </Button> 
  
//         <Modal show={show} onHide={handleClose} animation={false}>
//           <Modal.Header closeButton>
//             <Modal.Title class="text-center ml-42 p-2 text-blue-600 shadow appearance-none border">Payment Method</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//     <form onSubmit={handleForm} className="p-8">
//     <div class="md:flex md:items-center mb-6">
//     <div class="md:w-1/3">
//        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-12" for="flex-card">
//         CARD
//       </label>
//     </div>
//     <div class="relative">
//         <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-600 py-2 px-5 ml-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
//           <option>Smart Card</option>
//           <option>Visa Card</option>
          
//         </select>
//         <div class="pointer-events-none absolute inset-y-0 right-0 flex items-right ml-7 px-4 Py-2 mt-3 text-gray-700">
//           <svg class="fill-current h-3 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//         </div>
//       </div>
//   </div>
//   <div class="flex flex md:w-1/3 px-3 mb-6 ml-4 md:mb-0">
//     <div>
//       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2" for="flex-state">
//       Monetary Currency
//       </label>
//       <div class="relative">
//         <select class="block appearance-none ml-2  mr-3 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
//           <option>Doral $</option>
//           <option>Pound</option>
//           <option>EUR €</option>
//           <option>Shiling</option>
//           <option>Franc</option>

//         </select>
//         <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
//           <svg class="fill-current h-4 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//         </div>
//       </div>
//       </div>
//       {/* <div class="md:w-1/3 px-3 mb-6 md:mb-0"> */}
    
//       <div class="mb-4">
//       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-4 mt-3" for="flex-amount">
//         Amount
//       </label>
//       <input class="appearance-none border rounded ml-3 py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none " id="Amount" type="text" placeholder="Enter Amount"/>
//     </div>
//       </div>
//       <div class="flex flex items-center">
//     <div class="md:w-1/3">
//       <label class="block text-gray-700 font-bold md:text-right mb-3 md:mb-0 ml-6 mt-0" for="description">
//         Description
//       </label>
//     </div>
//     <div class="md:w-2/3">
//       <input class="bg-gray-200 appearance-none border ml-8 mt-4 border-5 border-gray-200 rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200" id="text" type="text"/>
//     <p class="text-center ml-4">Where those money will be used?</p>
//     </div>
//   </div>
    
//       {/* </div> */}
//     <button name="" type="submit" className="bg-yellow-600 hover:bg-yellow-700 rounded-lg py-2 px-4 mt-4 text-white item-center ml-64">

//     {loading?<span>Successful</span>:<span class="text-center hover:text-blue-500 rounded-full">Send</span>}
//   </button>
//     </form>
//           </Modal.Body>
         
//             {/* <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button> */}
          
//         </Modal> 
//       </>
//     );
//   }
  
// export default Paypal;

