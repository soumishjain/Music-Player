import React, { createContext, useEffect, useRef, useState } from 'react'
 export const PlayerContext = createContext();
    export const PlayerProvider = ({children}) => {
        const audioref = useRef(null)
        const [currentsong,setcurrentsong] = useState(null)
        const [isplaying,setisplaying] = useState(false) 
        const [currentTime,setcurrentTime] = useState(0)
        const [duration,setduration] = useState(0)
        const playsong = (song) => {
            if(!song?.audio) return;
            if(currentsong?.audio === song.audio){
                if(audioref.current.paused){
                    audioref.current.play();
                    setisplaying(true)
                }else{
                    audioref.current.pause();
                    setisplaying(false)
                }
            }
            else{
                audioref.current.src = song.audio
                audioref.current.currentTime = 0;
                audioref.current.play();
                setcurrentsong(song)
                setisplaying(true)
            }
        }

        useEffect(() => {
            const audio = audioref.current
            if(!audio) return;
            const updatetime = () => {
                setcurrentTime(audio.currentTime)
            }
            const setMeta = () => setduration(audio.duration || 0)
            const onEnded = () => setisplaying(false)
            audio.addEventListener('timeupdate',updatetime)
            audio.addEventListener('loadedmetadata',setMeta)
            audio.addEventListener("ended",onEnded)
            return () => {
                audio.removeEventListener('timeupdate',updatetime)
                audio.removeEventListener('loadedmetadata',setMeta)
                audio.removeEventListener("ended",onEnded)
            }
        },[])
        const seek = (time) => {
            audioref.current.currentTime = time;
            setcurrentTime(time)
        }
        const toggleplaypause = () => {
            if(!audioref.current || !currentsong) return;
            if(audioref.current.paused){
                audioref.current.play()
                setisplaying(true)
            }
            else{
                audioref.current.pause();
                setisplaying(false)
            }
        }
      return (
    <div>
      <PlayerContext.Provider value={{
        audioref,
        currentsong,
        isplaying,
        currentTime,
        duration,
        playsong,
        seek,
        toggleplaypause,
        setisplaying
      }}>
        {children}
        <audio ref={audioref}/>
        </PlayerContext.Provider>
    </div>
  )
}
