import React, { useContext, useEffect, useRef, useState } from 'react' 
import { getSongs } from '../apis/songapi';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';

const SquareCard = ({elem}) => {

const {playsong} = useContext(PlayerContext);
const [curr,setcurr] = useState([]);
const nav = useNavigate();
useEffect(() => {
    const fetchsongs = async() => {
        let term = 'bollywood'
        if(elem.genre === 'Neww') term = 'latest songs'
        if(elem.genre === 'Popular') term = 'bollywood trending'
        const songs = await getSongs({term,limit:20})
        setcurr(
            songs.map(song => ({
                name: song.trackName,
                artist: song.artistName,
                poster: song.artworkUrl100,
                audio: song.previewUrl,
            }))
        )
    }
    fetchsongs()
},[elem.genre])

  return (
    <div className='flex overflow-x-auto gap-2  no-scrollbar'>
      {curr.map((e) => {
        return <div onClick={() => {
            playsong(e,curr)
            nav(`/song/${encodeURIComponent(e.name)}`)
        }} className='flex group shrink-0 h-full hover:bg-white/30 p-2 transition-all duration-300 ease rounded-xl cursor-pointer flex-col'>
            <div className=' w-[170px] transition-all duration-300 ease relative rounded-xl '>
                <img className='h-[170px] rounded-xl object-center object-cover w-[100%]' src={e.poster} alt="" />
                <i className="ri-play-large-fill bg-emerald-500 absolute bottom-0 right-2 transition-all ease duration-300 opacity-0 group-hover:opacity-100 flex p-2 px-3 justify-center items-center text-2xl rounded-full group-hover:translate-y-[-20%]"></i>
            </div>
            <h3 className='text-lg font-medium text-white w-[170px] break-words whitespace-normal text-center'>{e.name}</h3>
            <h6 className='text-white/30 w-[170px] break-words whitespace-normal text-center'>{e.artist}</h6>
        </div>
      })}
    </div>
  )
}

export default SquareCard
