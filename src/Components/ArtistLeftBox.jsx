import React, { useEffect, useState } from 'react'
import { getArtistsfromsongs } from '../apis/songapi'
import { useNavigate, useSearchParams } from 'react-router-dom'

const ArtistLeftBox = () => {
    const [curr,setcurr] = useState([])
    useEffect(() => {
        const fetchArtists = async () => {
            const artist = await getArtistsfromsongs()
            setcurr(artist)
        }
        fetchArtists()
    },[])
    const nav = useNavigate()
  return (
    <div className='h-[100%] w-[30%] bg-white/10 rounded-xl py-2 '>
      <h1 className='text-white text-center text-3xl font-bold'>Other Artists</h1>
      <div className='h-[90%] overflow-auto mt-3 no-scrollbar'>
        {curr.map((e) => {
        return <div onClick={() => nav(`/artist/${encodeURIComponent(e.artistname)}`)} className='hover:bg-white/10 border-white/30 flex gap-3 items-center text-white p-2'>
            <img className='rounded-xl w-10' src={e.photo} alt="" />
            <h1 className='text-xl'>{e.artistname}</h1>
        </div>
      })}   
      </div>
    </div>
  )
}

export default ArtistLeftBox
