import React from 'react'
import {Route ,Routes} from 'react-router-dom'
import Allcomp from './Components/Allcomp'
import SongfullPage from './Pages/SongfullPage'
import ArtistPage from './Pages/ArtistPage'

const Routee = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Allcomp/>}></Route>
        <Route path='/song/:song' element={<SongfullPage />}></Route>
        <Route path='/artist/:artist' element={<ArtistPage />}></Route>
      </Routes>
    </div>
  )
}

export default Routee
