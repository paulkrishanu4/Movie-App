import React from 'react'
import './Card.css';
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import { useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import { GlobalContext } from './Globalstate';
import { Bounce,toast } from 'react-toastify';



export const Card = ({src,name,id}) => {
  const{
    addMovie, watchlist
  }= useContext(GlobalContext);

  const[value,setValue]=useState(false);

  function apply(){
    toast.success('Movie added to list!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }
  
  return (
    <div id="card-image">
      <img src={src} style={{height:"250px",margin:"30px",cursor:"pointer"}}></img>
      <p style={{textAlign:"center"}}>{name}</p>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"30px"}}>
      <Link to={`/Player/${id}`}><button id="btn" style={{background:"transparent",color:"white",border:"1px solid white", textAlign:"center",padding:"5px"}}><FaPlay/> Watch Now</button></Link>
        <button id="btn" style={{background:"transparent",color:"white",border:"1px solid white", textAlign:"center",padding:"5px"}} onClick={()=>{addMovie({src,name,id});apply();}}><FaPlus /></button>
        
        </div>
    </div>
  )
}


