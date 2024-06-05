import React, { useState,useEffect } from 'react'
import './Player.css'
import { MdOutlineArrowBack } from "react-icons/md";
import { useParams, useNavigate } from 'react-router-dom';





export const PlayTV = () => {
  const {id} = useParams();
  const navi = useNavigate();

  const [key,setKey]=useState([]);
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=032b72ada3f1810d7864065ca1fc20f3`;
    fetch(url).then(response => response.json()).then(data => setKey(data.results[0]));
  }, [id])




  return (
    <div className="player">
      <MdOutlineArrowBack style={{color:"white",fontSize:"30px",margin:"20px",cursor:"pointer"}} onClick={()=>{navi(-1)}}/>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <iframe width='100%' height='100vh' src={`https://www.youtube.com/embed/${key.key}`}title='Trailer' frameBorder='0' allowfullscreen></iframe>
      </div>

    </div>
  )
}
