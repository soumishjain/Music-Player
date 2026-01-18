import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getArtistsfromsongs, getSongs } from '../apis/songapi'
import { PlayerContext } from '../context/PlayerContext'

const ArtistRightBox = () => {
    const {artist} = useParams()
    const [curr,setcurr] = useState([])
    const [songlist,setsonglist] = useState([])
    useEffect(() => {
        const fetchsongs = async() => {
            let term = artist
            const songs = await getSongs({term,limit:20})
            setsonglist(
                songs.map(song => ({
                    name: song.trackName,
                    artist: song.artistName,
                    poster: song.artworkUrl100,
                    audio: song.previewUrl,
                }))
            )
        }
        const fetchartist = async () => {
            const artists = await getArtistsfromsongs();
            artists.forEach((e) => {
                if(e.artistname === artist){
                    setcurr(e)
                }
            })
        }
        fetchartist()
        fetchsongs()
    },[artist])
    const {playsong} = useContext(PlayerContext)
  return (
    <div className='w-[60%] h-[100%] bg-white/10 rounded-2xl overflow-auto no-scrollbar'>
        <div className="top overflow-auto no-scrollbar border-white/30 flex flex-col w-[100%] p-10 items-center h-[40%]">
            <img className='h-[90%] w-[21%] rounded-full' src={curr.photo} alt="" />
            <h1 className='text-white font-bold text-4xl mt-2'>{curr.artistname}</h1>
        </div>
        <div className='h-[60%]'>
            {songlist.map((e) => {
                return <div onClick={() => {
                    playsong(e,songlist);                    
                }} className=' border-white/30 hover:bg-white/10 flex gap-3 items-center text-white p-2'>
            <img className='rounded-xl w-10' src={e.poster} alt="" />
            <h1 className='text-xl'>{e.name}</h1>
        </div>
            })}
        </div>
    </div>
  )
}

export default ArtistRightBox
