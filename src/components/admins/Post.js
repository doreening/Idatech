

import React, {useState,useEffect} from 'react';
import '../../css/tailwindcss.css';
import Navbar from './../Navbar';
import Footer from './../Footer';
import axios from 'axios';

function Post(){
    const [title,setTitle]=useState("");
    const [category,setCategory]=useState("");
    const [pictures,setPictures]=useState("");
    const [description,setDescription]=useState("");

    const [loading,setLoading]=useState(false);

    const [message,setMessage]=useState("");

    const handleForm = (event)=>{
        setLoading(true);
        event.preventDefault();
        // const data={
        //     "firstname":firstname,
        //     "lastname":lastname,
        //     "phone":email
        // }

        let data = new FormData();
        data.append('title',title);
        data.append('category',category);
        data.append('pictures',pictures);
        data.append('description',description);

        // lets send data to endpoins
        axios.post("http://127.0.0.1:8000/prude2/",data,{
            'Content-Type':'multipart/form-data'
        })
        .then((res)=>{
            console.log(res.data)
            setLoading(false)
            setMessage("Post successful!")

        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
            setMessage("Post failed!")
        })
    }
    return(
<>
<Navbar />
<div>
    <div className="flex flex-wrap mt-8 p-4">
        {/* grid grid-cols-3 gap-4 */}
<div className="w-full md:w-2/6"></div>

<div className="w-full md:w-2/6 bg-gray-100 rounded-lg py-4 shadow-2xl">
<p className="p-2 font-bold text-center text-3xl text-yellow-700">User Post</p>



<div  className="bg-green-300 text-center">{message}</div>

<center><hr className="w-64 text-green-700"></hr></center>



<form onSubmit={handleForm} className="p-12" encType="multipart/form-data">
    <label>Title: {title}</label>
    <input type="text" name="title" value={title} onChange={event=>setTitle(event.target.value)} className="w-full border rounded-lg py-4 px-4" placeholder="Enter Title" />
     <label>Category</label>
    
    <select name="category" value={category} onChange={event=>setCategory(event.target.value)} className="w-full border rounded-lg py-4 px-4">
    <option>Choose Category</option>
          <option value="About">About</option>
          <option value="News">News</option>
        
        </select>
     <label>Picture</label>
    <input type="file" name="pictures" value={pictures} onChange={event=>setPictures(event.target.value)} className="w-full border rounded-lg py-4 px-4" placeholder="Enter your Email" />
     <label>Description</label>
    <textarea type="text" name="description" value={description} onChange={event=>setDescription(event.target.value)}  className="w-full border rounded-lg py-4 px-4" placeholder="Enter Description " />
    <button name="" type="submit" className="w-full bg-blue-500 rounded-lg py-4 px-4 mt-4 text-white">

    {loading?<span>Please wait...</span>:<span>Post</span>}


    </button>
    
   
</form>
</div>
<div className="w-full md:w-2/6"></div>
    </div>
</div>



<Footer/>
</>
    )
}
export default Post;

