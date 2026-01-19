import React, { createContext, useEffect, useRef, useState } from 'react'
 export const PlayerContext = createContext();
    export const PlayerProvider = ({children}) => {
        const audioref = useRef(null)
        const [currentsong,setcurrentsong] = useState(null)
        const [isplaying,setisplaying] = useState(false) 
        const [currentTime,setcurrentTime] = useState(0)
        const [duration,setduration] = useState(0)
        const [queue,setqueue] = useState([])
        const [curridx,setcurridx] = useState(-1)

        const toggleplaypause = () => {
            if(!audioref.current || !audioref.current.src) return;
            setisplaying(prev => !prev)
        }

        // function to play song and if list exist set list
        const playsong = (song,songlist = []) => {
            if(!song?.audio) return;
            if(songlist.length > 0){
                setqueue(songlist)
                const index = songlist.findIndex(s => s.audio == song.audio)
                setcurridx(index)
            }
            if(currentsong?.audio === song.audio){
                setisplaying(prev => !prev)
                }else{
                    audioref.current.src = song.audio;
                    audioref.current.currentTime = 0;
                    setcurrentsong(song)
                    setisplaying(true)
                }
            }

            // use effect to 
            useEffect(() => {
                const handlekeydown = (e) => {
                    if(e.target.tagName === 'INPUT') return;
                    if(e.code === "Space") {
                        e.preventDefault();
                        toggleplaypause()
                    }
                    if(e.code === "ArrowRight") {
                        const audio = audioref.current
                        if(!audio) return
                        audio.currentTime = Math.min(audio.currentTime + 1,audio.duration)
                    }
                        if(e.code === "ArrowLeft") {
                            const audio = audioref.current
                            if(!audio) return
                            audio.currentTime = Math.max(audio.currentTime - 1 , 0)
                        }
                }
                window.addEventListener("keydown",handlekeydown)
                return () => window.removeEventListener("keydown",handlekeydown) 
            },[toggleplaypause])

            const playnext = () => {
                if(queue.length === 0) return;
                const nextidx = curridx + 1;
                if(nextidx >= queue.length) return;

                const nextsong = queue[nextidx]
                setcurridx(nextidx)

                audioref.current.src = nextsong.audio
                audioref.current.currentTime = 0;
                setcurrentsong(nextsong)
                setisplaying(true)
            }

            const playprev = () => {
                if(queue.length === 0) return;
                const previdx = curridx - 1;
                if(previdx < 0) return;

                const prevsong = queue[previdx]
                setcurridx(previdx)

                audioref.current.src = prevsong.audio
                audioref.current.currentTime = 0;
                setcurrentsong(prevsong)
                setisplaying(true)
            }

            useEffect(() => {
                const audio = audioref.current
                if(!audio || !audio.src) return;
                audio.play().catch(() => {});
                setisplaying(true)
            },[currentsong])

        useEffect(() => {
            const audio = audioref.current;
            if(!audio || !audio.src) return;
            if(isplaying) audio.play().catch(() => {});
            else audio.pause();
        },[isplaying])

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
        useEffect(() => {
            const audio = audioref.current;
            if(!audio) return;
            const handleended = () => {
                playnext();
            }
            audio.addEventListener("ended",handleended)
            return () => audio.removeEventListener("ended",handleended);
        },[playnext])
        
        const seek = (time) => {
            audioref.current.currentTime = time;
            setcurrentTime(time)
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
        setisplaying,
        playnext,
        playprev
      }}>
        {children}
        <audio ref={audioref}/>
        </PlayerContext.Provider>
    </div>
  )
}
