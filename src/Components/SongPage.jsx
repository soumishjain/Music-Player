import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext'
import Bottombox from './Bottombox';

const SongPage = () => {
    const {currentsong} = useContext(PlayerContext);
    if(!currentsong){
        return <h1 className='text-white'>No song is Playing</h1>
    }
  return (
    <div className='h-screen w-screen text-white bg-black p-10 gap-5 flex justify-center items-center flex-col'>
      <img src={currentsong.poster} className='w-[60%] h-[80%] rounded-xl' alt="" />
    </div>
  )
}

export default SongPage
