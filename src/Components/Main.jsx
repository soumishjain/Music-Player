import React from 'react'
import AllSec from './AllSec'
import { useParams } from 'react-router-dom'
import Bottombox from './Bottombox'

const Main = () => {
  const {song} = useParams()
  return (
    <div className='bg-white/10 w-[100%] h-[93%] rounded-xl p-5 no-scrollbar overflow-auto'>
      <AllSec/>
    </div>
  )
}

export default Main