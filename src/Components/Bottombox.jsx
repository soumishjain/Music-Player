import React, { useContext } from 'react'
import ProgressBar from './ProgressBar'
import { PlayerContext } from '../context/PlayerContext'

const Bottombox = () => {
    const {isplaying,currentsong,toggleplaypause,currentTime,duration} = useContext(PlayerContext)
    const pauseicon =<i class="ri-pause-large-fill"></i>
    const playicon = <i class="ri-play-large-fill"></i>
  return (
    <div>
      <div className='flex fixed bg-gray-700 text-white left-0  w-[100%] h-[10%] bottom-0 items-center flex-col gap-2'>
        <div className='w-[95%] flex justify-center items-center'>
            <ProgressBar />
        </div>
        <div className='flex justify-around w-[100%]'>
                <div className="left items-center justify-center flex flex-1 text-3xl font-bold">{currentsong?.name}</div>
                <div
                className="mid items-center justify-center flex flex-1 text-4xl flex gap-5">
                    <i class="ri-skip-back-fill"></i>
                    <div onClick={toggleplaypause}>
                    {isplaying?pauseicon:playicon}
                    </div>
                    <i class="ri-skip-forward-fill"></i>
                </div>
                <div className="right items-center justify-center flex flex-1 text-xl font-bold">{currentsong?.artist}</div>
            </div>
        </div>
    </div>
  )
}

export default Bottombox
