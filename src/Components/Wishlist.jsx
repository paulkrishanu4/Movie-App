import React, { useContext } from 'react'
import {useState,useEffect} from 'react';
import { GlobalContext } from './Globalstate';
import { Wcard } from './Wcard';

export const Wishlist = () => {
  var {watchlist} = useContext(GlobalContext)
  
  return(
    <>
    <h1 style={{textAlign: 'center',margin:"30px"}}>Favourites: </h1>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        {
          watchlist.map((cur,index)=>{
            return <Wcard key={index} src={cur.src} name={cur.original_title} id={cur.id}></Wcard>
          })
        } 
    </div>
    </>  
  )
}
