import React from 'react'
import {Hero} from "./Components/Hero";
import {Recommended} from "./Components/Recommended";
import {Latestmovies} from "./Components/Latestmovies";
import {LatestTV} from "./Components/LatestTV";
import { Wishlist } from './Components/Wishlist';


export const Home = ({src}) => {
  return (
    <div>
     <Hero />
     <Recommended/>
     <Latestmovies/>
     <LatestTV></LatestTV>  

    </div>
  )
}
