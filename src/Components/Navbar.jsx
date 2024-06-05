import React from 'react'
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#" style={{fontSize:"35px", fontWeight:"bold",color:"red"}}>Movie-Hub</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize:"20px"}}>
        <li class="nav-item" >
        <Link to='/' style={{textDecoration:"none",color:"white"}}><a class="nav-link active" aria-current="page" style={{marginLeft:"20px"}} >Home</a></Link>
        </li>
        <li class="nav-item" >
        <Link to='/Wishlist' style={{textDecoration:"none",color:"white"}}><a class="nav-link active" aria-current="page" style={{marginLeft:"20px"}} >Wishlist</a></Link>
        </li>
        <li class="nav-item">
        <Link to='/Searchmovie' style={{textDecoration:"none",color:"white"}}><a class="nav-link" href="#" style={{marginLeft:"20px"}}><FaSearch style={{marginBottom:"3px",marginRight:"5px"}}/>Search</a></Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}
