import React from 'react'
import ArtistLeftBox from './ArtistLeftBox'
import Nav from './Nav'
import ArtistRightBox from './ArtistRightBox'
import Bottombox from './Bottombox'

const ArtistFullPage = () => {
  return (
    <div className='h-[90%] w-screen p-3 bg-black'>
        <Nav />
        <div className=' h-[100%] gap-10 flex'>
        <ArtistLeftBox />
        <ArtistRightBox />
        </div>
    </div>
  )
}

export default ArtistFullPage
