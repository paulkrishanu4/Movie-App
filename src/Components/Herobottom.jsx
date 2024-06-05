import React from 'react'
import './Herobottom.css'
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import { useState, useContext } from 'react';
import { GlobalContext } from './Globalstate';
import { Bounce,toast } from 'react-toastify';

export const Herobottom = ({src,name,id,type}) => {
  const{
    addMovie, watchlist
  }= useContext(GlobalContext);

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
  
  let mode="";
  type=="movie"?mode="Player":mode="PlayTV"
  return (
    <div className="hero-btm" style={{displsy:"flex",flexDirection:"row"}}>
      <img src={src} style={{height:"230px",margin:"20px"}}></img>
      <div class="hover-text" >
        <h4>{name}<button id="btn" style={{background:"transparent",color:"white",border:"1px solid white", textAlign:"center",padding:"1px",fontSize:"15px",marginLeft:"10px"}}  onClick={()=>{addMovie({src,name,id});apply();}}><FaPlus/></button></h4>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"5px"}}>
        <Link to={`/${mode}/${id}`}><button id="btn" style={{background:"transparent",color:"white",border:"1px solid white", textAlign:"center",padding:"1px",fontSize:"20px",marginTop:"5px"}}><FaPlay/> Play</button></Link>
        </div>

      </div>
    </div>
  )
}
