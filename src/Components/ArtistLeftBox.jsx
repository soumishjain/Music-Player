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
    <div className='h-[100%] w-[30%] border-2 py-2 border-white'>
      <h1 className='text-white text-center text-3xl font-bold'>Other Artists</h1>
      <div className='h-[90%] overflow-auto mt-3 no-scrollbar'>
        {curr.map((e) => {
        return <div onClick={() => nav(`/artist/${encodeURIComponent(e.artistname)}`)} className='border-t-2 flex gap-3 items-center text-white p-2'>
            <img className='rounded-full w-13' src={e.photo} alt="" />
            <h1 className='text-2xl'>{e.artistname}</h1>
        </div>
      })}   
      </div>
    </div>
  )
}

export default ArtistLeftBox
