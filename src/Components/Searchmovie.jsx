import React from 'react'
import { FaSearch } from "react-icons/fa";
import {useState,useEffect} from 'react'
import {Card} from './Card'

export const Searchmovie = () => {
  const [results,setResults]=useState([]);
  const [x,setX]=useState("spiderman");

 

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/search/movie?query=${x}&api_key=032b72ada3f1810d7864065ca1fc20f3`;
    fetch(url).then(response => response.json()).then(data => setResults(data.results));
  }, [x])


  return (
    <div style={{textAlign:"center",marginTop:"50px"}}>
    <div className="search" display="flex">
      <input type ="text" value={x} placeholder="Enter movie name..." style={{width:"50%",height:"40px",outline:"none",borderRadius:"7px",border:"none"}} onChange={(e)=>{setX(e.target.value)}}></input>
      <FaSearch  style={{fontSize:"30px",marginLeft:"-40px",color:"black",marginTop:"-5px"}}/>
    </div>
    <div style={{margin:"30px",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
      {
        results.map((cur,index)=>{
          return <Card key={index} src={cur.poster_path?`https://image.tmdb.org/t/p/w500${cur.poster_path}`:"https://www.pngitem.com/pimgs/m/346-3466346_clipart-of-movie-films-and-cinema-film-reel.png"} name={cur.original_title} id={cur.id}></Card>
        })
      }


    </div>

    </div>
  )
}
