import React, { useContext } from 'react'
import ProgressBar from './ProgressBar'
import { PlayerContext } from '../context/PlayerContext'
import { useLocation, useNavigate } from 'react-router-dom'

const Bottombox = () => {
    const {isplaying,currentsong,toggleplaypause,playnext,playprev} = useContext(PlayerContext)
    const pauseicon =<i className="ri-pause-large-fill"></i>
    const playicon = <i className="ri-play-large-fill"></i>
    const nav = useNavigate()
    const loc = useLocation()
  return (
    <div>
      <div onClick={() => {
        const targetpath = `/song/${encodeURIComponent(currentsong.name)}`
        if(loc.pathname !== targetpath)
        nav(targetpath)
      }} className='flex fixed bg-black text-white left-0  w-[100%] h-[10%] bottom-0 items-center flex-col gap-2'>
        <div className='w-[95%] flex justify-center items-center'>
            <ProgressBar />
        </div>
        <div className='flex justify-around px-5 w-[100%]'>
                <div className="left items-center justify-center flex w-[33%] text-xl font-bold">{currentsong?.name}</div>
                <div
                className="mid text-white/60  items-top justify-center flex w-[33%] text-4xl flex gap-5">
                  <div className='cursor-pointer hover:text-white transition-all ease duration-100' onClick={(e) => {
                    e.stopPropagation()
                    playprev()
                  }}>
                    <i className="ri-skip-back-fill"></i>
                  </div>
                    <div onClick={(e) => {
                      e.stopPropagation()
                      toggleplaypause()
                      }} className='cursor-pointer hover:text-white transition-all ease duration-100'>
                    {isplaying?pauseicon:playicon}
                    </div>
                    <div className='cursor-pointer hover:text-white transition-all ease duration-100' onClick={(e) => {
                      e.stopPropagation()
                      playnext()
                    }}>
                    <i className="ri-skip-forward-fill"></i>
                    </div>
                </div>
                <div className="right items-top justify-center flex w-[33%] text-lg font-bold">{currentsong?.artist}</div>
            </div>
        </div>
    </div>
  )
}

export default Bottombox
