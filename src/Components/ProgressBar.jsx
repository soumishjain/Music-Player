import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'


const formatTime = (time) => {
    if(isNaN(time)) return '0:00'
    const min = Math.floor(time/60)
    const sec = Math.floor(time%60)
    return `${min}:${sec < 10 ? '0' : ''}${sec}`
}
const ProgressBar = () => {
    const {currentTime,duration,seek} = useContext(PlayerContext)
  return (
    <div className='w-[100%] flex items-center gap-3 text-white txt-sm'>
        <span>{formatTime(currentTime)}</span>
        <input type="range" min='0' max={duration || 0} value={currentTime}
        onChange={(e) => seek(Number(e.target.value))}
        className='w-full accent-white'
        />
        <span>{formatTime(duration)}</span>
    </div>
  )
}

export default ProgressBar
