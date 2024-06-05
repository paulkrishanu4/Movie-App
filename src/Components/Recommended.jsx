import React from 'react'
import { useEffect,useState } from 'react';
import { Card } from './Card';

export const Recommended = () => {

  const[popular,setPopular]=useState([]);
  const[showpopular,setShowpopular]=useState(true);

  const[rated,setRated]=useState([]);
  const[showrated,setShowrated]=useState(false);

  const[upcoming,setUpcoming]=useState([]);
  const[showupcoming,setShowupcoming]=useState(false);

  const[color1,setColor1]=useState("red");
  const[color2,setColor2]=useState("white");
  const[color3,setColor3]=useState("white");

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=032b72ada3f1810d7864065ca1fc20f3`;
    fetch(url).then(response => response.json()).then(data => setUpcoming(data.results));
  }, [])

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=032b72ada3f1810d7864065ca1fc20f3`;
    fetch(url).then(response => response.json()).then(data => setPopular(data.results));
  }, [])

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=032b72ada3f1810d7864065ca1fc20f3`;
    fetch(url).then(response => response.json()).then(data => setRated(data.results));
  }, [])

  return (
    <div style={{marginTop:"60px",marginLeft:"20px"}}>
      <h2>Recommended</h2>
      <div className="category" style={{display:"flex",gap:"30px",cursor:"pointer"}}>
        <h4 onClick={()=>{setShowpopular(true);setShowrated(false);setShowupcoming(false);setColor1("red");setColor2("white");setColor3("white")}}style={{color:`${color1}`}}>By Popularity</h4>
        <h4 onClick={()=>{setShowrated(true);setShowpopular(false);setShowupcoming(false);setColor1("white");setColor2("red");setColor3("white")}} style={{color:`${color2}`}}>Top Rated</h4>
        <h4 onClick={()=>{setShowrated(false);setShowpopular(false);setShowupcoming(true);setColor1("white");setColor2("white");setColor3("red")}} style={{color:`${color3}`}}>Up Comming</h4>
      </div>
      {
        showpopular && <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
      {
        popular.map((cur,index)=>{
          return <Card key={index} name={cur.original_title} src={`https://image.tmdb.org/t/p/w500${cur.poster_path}`} id={cur.id}></Card>
        })
      }
      </div>}

      {
        showrated && <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
      {
        rated.map((cur,index)=>{
          return <Card key={index} name={cur.original_title} src={`https://image.tmdb.org/t/p/w500${cur.poster_path}`} id={cur.id}></Card>
        })
      }
      </div>}

      {
        showupcoming && <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
      {
        upcoming.map((cur,index)=>{
          return <Card key={index} name={cur.original_title} src={`https://image.tmdb.org/t/p/w500${cur.poster_path}`} id={cur.id}></Card>
        })
      }
      </div>}

    </div>
  )
}
