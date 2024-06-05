import React from 'react'

export const Footer = () => {
  return (
    <div style={{marginTop:"100px",marginBottom:"100px"}}>
      <h5 style={{textAlign: 'center'}}>The best website for watching movies and tv shows in high quality for free</h5>
      <hr style={{color:"white"}}></hr>
      <div className="links" style={{display:"flex",gap:"30px",justifyContent:"center",alignItems:"center"}}>
        <h5 style={{cursor:"pointer"}}>Movies</h5>
        <h5 style={{cursor:"pointer"}}>TV Shows</h5>
        <h5 style={{cursor:"pointer"}}>Trending</h5>
        <h5 style={{cursor:"pointer"}}>Contact</h5>
        <h5 style={{cursor:"pointer"}}>Request</h5>
      </div>
    </div>
  )
}
