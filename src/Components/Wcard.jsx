import React from 'react'
import './Card.css';
import { FaPlay } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

import { useState,useEffect, useContext } from 'react';
import {Link} from 'react-router-dom'
import { GlobalContext } from './Globalstate';


export const Wcard = ({src,name,id}) => {
  var {watchlist, removeMovie} = useContext(GlobalContext);
 
  return (
    <div id="card-image">
      <img src={src} style={{height:"250px",margin:"30px",cursor:"pointer"}}></img>
      <p style={{textAlign:"center"}}>{name}</p>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"30px"}}>
      <Link to={`/Player/${id}`}><button id="btn" style={{background:"transparent",color:"white",border:"1px solid white", textAlign:"center",padding:"10px"}}><FaPlay/> Watch Now</button></Link>
      <button id="btn" style={{background:"transparent",color:"white",border:"1px solid white", textAlign:"center",padding:"10px"}} onClick={()=>{removeMovie(id)}}><FaMinus /></button>
        </div>
    </div>
  )
}
