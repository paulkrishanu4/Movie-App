
import {useEffect,useState} from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import './Hero.css'

export const Hero = () => {
  const[results,setResults]=useState([]);
  const[results2,setResults2]=useState([]);
  const[results3,setResults3]=useState([]);
  //const[title1,setTitle1]=useState([]);
  const [array,setArray]=useState([]);


  useEffect(() => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=032b72ada3f1810d7864065ca1fc20f3`;
    fetch(url).then(response => response.json()).then(data => setArray(data.results));
  }, [])
  //console.log(title1);
  let x=Math.floor(Math.random()*5);
  let y=Math.floor(Math.random()*10);
  let z=Math.floor(Math.random()*20);


  useEffect(() => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=032b72ada3f1810d7864065ca1fc20f3`;
    fetch(url).then(response => response.json()).then(data => setResults(data.results[x]));
  }, [])

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=032b72ada3f1810d7864065ca1fc20f3`;
    fetch(url).then(response => response.json()).then(data => setResults2(data.results[y]));
  }, [])

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=032b72ada3f1810d7864065ca1fc20f3`;
    fetch(url).then(response => response.json()).then(data => setResults3(data.results[z]));
  }, [])
 

  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={`https://image.tmdb.org/t/p/w500${results.backdrop_path}`} class="d-block w-100" alt="..." style={{height:"500px"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h1>{results.original_title}</h1>
        <p>{results.overview}</p>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"30px"}}>
        <Link to={`/Player/${results.id}`}><button id="btn" style={{background:"transparent",color:"white",border:"1px solid white", textAlign:"center",padding:"10px"}}><FaPlay/> Watch Now</button></Link>
        
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={`https://image.tmdb.org/t/p/w500${results2.backdrop_path}`} class="d-block w-100" alt="..." style={{height:"500px"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h1>{results2.original_title}</h1>
        <p>{results2.overview}</p>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"30px"}}>
        <Link to={`/Player/${results2.id}`}> <button id="btn" style={{background:"transparent",color:"white",border:"1px solid white", textAlign:"center",padding:"10px"}}><FaPlay/> Watch Now</button></Link>
        
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={`https://image.tmdb.org/t/p/w500${results3.backdrop_path}`} class="d-block w-100" alt="..." style={{height:"500px"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h1>{results3.original_title}</h1>
        <p>{results3.overview}</p>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"30px"}}>
        <Link to={`/Player/${results3.id}`}><button id="btn" style={{background:"transparent",color:"white",border:"1px solid white", textAlign:"center",padding:"10px"}}><FaPlay/> Watch Now</button></Link>
        </div>
      </div>
    </div>
  </div>
  
</div>

      
      
    </div>
  )
}