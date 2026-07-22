/** @format */

import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RateLimitedUI from "../components/RateLimitedUI";
import axios from "axios"
const HomePage = () => {

  const [isRateLimited, setIsRateLimited] = useState(true);
  const[notes,setnotes] = useState([])
  const[loading,setLoading] = useState(true);
 
  useEffect(() => {
    const fetchNotes =  async() => {
    try{
      const res = await axios.post("http://localhost:5001/api/notes")
     
      console.log(res.data);

    }catch(error){
      console.log("Error featching notes");
    }
    };
    fetchNotes();
  },[])

  return (
    <div className='min-h-screen'>
      <NavBar />
      {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage;
