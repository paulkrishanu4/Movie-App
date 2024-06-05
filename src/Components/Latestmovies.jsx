import React from 'react'
import { useEffect,useState } from 'react';
import {Card} from './Card';
import { Herobottom } from './Herobottom';

export const Latestmovies = () => {
  const [results,setLatest]=useState([]);
  useEffect(() => {
   
    let url = `https://api.themoviedb.org/3/trending/movie/day\?api_key=032b72ada3f1810d7864065ca1fc20f3`;
    fetch(url).then(response => response.json()).then(data => setLatest(data.results));
  }, [])
  return (
    <>
    <h2 style={{textAlign: 'center',marginTop:"50px"}}> Latest Movies</h2>
    <div style={{display: 'flex',overflowX: 'scroll',overflowY: 'hidden'}}>
      
  
      {
        results.map((cur,index)=>{
          return <Herobottom key={index} name={cur.original_title} src={`https://image.tmdb.org/t/p/w500${cur.poster_path}`} id={cur.id} type={cur.media_type} ></Herobottom>
        })
      }
    </div>
    </>

  )
}
