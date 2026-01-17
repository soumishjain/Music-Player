import React, { useContext } from 'react'
import ProgressBar from './ProgressBar'
import { PlayerContext } from '../context/PlayerContext'

const Bottombox = () => {
    const {isplaying,currentsong,toggleplaypause} = useContext(PlayerContext)
    const pauseicon =<i className="ri-pause-large-fill"></i>
    const playicon = <i className="ri-play-large-fill"></i>
  return (
    <div>
      <div className='flex fixed bg-gray-700 text-white left-0  w-[100%] h-[10%] bottom-0 items-center flex-col gap-2'>
        <div className='w-[95%] flex justify-center items-center'>
            <ProgressBar />
        </div>
        <div className='flex justify-around px-5 w-[100%]'>
                <div className="left items-center justify-center flex w-[33%] text-xl font-bold">{currentsong?.name}</div>
                <div
                className="mid items-top justify-center flex w-[33%] text-4xl flex gap-5">
                    <i className="ri-skip-back-fill"></i>
                    <div onClick={() => {
                      toggleplaypause()
                      console.log("clid")
                      }} className='hover:cursor-pointer'>
                    {isplaying?pauseicon:playicon}
                    </div>
                    <i className="ri-skip-forward-fill"></i>
                </div>
                <div className="right items-top justify-center flex w-[33%] text-lg font-bold">{currentsong?.artist}</div>
            </div>
        </div>
    </div>
  )
}

export default Bottombox
