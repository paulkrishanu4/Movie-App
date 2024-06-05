import React, { useState,useEffect } from 'react'
import './Player.css'
import { MdOutlineArrowBack } from "react-icons/md";
import { useParams, useNavigate } from 'react-router-dom';





export const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [key,setKey]=useState([]);
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=032b72ada3f1810d7864065ca1fc20f3`;
    fetch(url).then(response => response.json()).then(data => setKey(data.results[0]));
  }, [id])




  return (
    <div className="player">
      <MdOutlineArrowBack style={{color:"white",fontSize:"30px",margin:"20px",cursor:"pointer"}} onClick={()=>{navigate(-2)}}/>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <iframe width='90%' height='500px' src={`https://www.youtube.com/embed/${key.key}`}title='Trailer' frameBorder='0' allowfullscreen></iframe>
      </div>

    </div>
  )
}
