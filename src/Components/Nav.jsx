import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  return (
    <div className='h-[5%] w-[100%] p-2 mb-3 flex justify-between items-center'>
      <div className="left w-[50%] flex items-center gap-5 ">
        <i className="ri-spotify-fill text-4xl text-white"></i>
        <i onClick={() => navigate('/')} className="ri-home-5-fill text-3xl p-1 px-2 bg-white/20 rounded-[50%] text-white"></i>
        <div className='flex rounded-full w-[60%] gap-4 bg-white/20 items-center py-1 px-3'>
            <i className="ri-search-line text-white text-3xl"></i>
            <input className='w-[100%] outline-0 border-0 text-white placeholder-white' type="text" placeholder='What do you want to play?'/>
        </div>
      </div>
      <div className="right w-[42%] font-bold  flex justify-between items-center">
        <h2 className='border-r-2 text-white/40 text-md border-white ml-5 pr-7'>Premium Support Download</h2>
        <h3 className='flex text-sm text-white/40 gap-1 justify-center items-center'><i class="ri-download-line border-2 rounded-full px-1"></i>Install App</h3>
        <button className='text-white/40 text-sm'>Sign up</button>
        <button className='px-4 font-bold bg-white text-black rounded-full py-2'>Log in</button>
      </div>
    </div>
  )
}

export default Nav