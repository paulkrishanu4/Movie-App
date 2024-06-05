
import './App.css'
import { Navbar } from './Components/Navbar'
import { Home } from './Home'
import { Footer } from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import { Searchmovie } from './Components/Searchmovie'
import { Player } from './Components/Player'
import { PlayTV } from './Components/PlayTV'
import {GlobalProvider} from './Components/Globalstate'
import { Wishlist } from './Components/Wishlist'


function App() {


  return (
    <>
    <Navbar></Navbar>
    <GlobalProvider>
    <Routes>

      <Route path='/' element={<Home></Home>}/>
     
      <Route path='/Searchmovie' element={<Searchmovie></Searchmovie>}/>
      <Route path='/Player/:id' element={<Player></Player>}></Route>
      <Route path='/PlayTV/:id' element={<PlayTV></PlayTV>}></Route>
      <Route path='/Wishlist' element={<Wishlist></Wishlist>}/>
      <Route path='/Wishlist' element={<Wishlist></Wishlist>}/>
    </Routes>
    </GlobalProvider>
   
    <Footer></Footer>
    </>
  )
}

export default App
