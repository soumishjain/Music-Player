import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getArtistsfromsongs } from '../apis/songapi'

const CircleCard = (elem) => {
  const [curr,setcurr] = useState([])
  useEffect(() => {
    const fetchArtists = async () => {
      const artists = await getArtistsfromsongs();
      console.log(artists)
      setcurr(artists)
    }
    fetchArtists()
  },[])
  const nav = useNavigate()
  return (
    <div className='flex overflow-x-auto gap-2  no-scrollbar'>
      {curr.map((e) => {
        return <div onClick={() => nav(`/artist/${encodeURIComponent(e.artistname)}`)} 
        className='flex flex-shrink-0 p-2 h-full justify-center items-center rounded-xl hover:bg-white/10 transition-all ease duration-300 cursor-pointer flex-col'>
            <div className=' w-[170px] transition-all duration-300 ease relative rounded-full '>
                <img className='h-[170px] rounded-full object-center object-cover w-[100%]' src={e.photo} alt="" />
                <i className="ri-play-large-fill bg-emerald-500 absolute bottom-0 right-2 transition-all ease duration-300 opacity-0 group-hover:opacity-100 flex p-2 px-3 justify-center items-center text-2xl rounded-full group-hover:translate-y-[-20%]"></i>
            </div>
            <h3 className='text-lg font-medium text-white w-[170px] break-words whitespace-normal text-center'>{e.artistname}</h3>
            <h6 className='text-white/30 w-[170px] break-words whitespace-normal text-center'>{e.genre}</h6>
        </div>
      })}
    </div>
  )
}

export default CircleCard
