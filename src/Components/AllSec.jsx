import React from 'react'
import SquareCard from './SquareCard';
import CircleCard from './CircleCard';

const AllSec = () => {
    const secarr = [{name:"Trending Songs", type:"Square",genre:"Trending"},
        {name:"Artists",type:"Circular",genre:"Artists"},
        {name:"Popular Songs and Artists",type:"Square",genre:"Popular"},
        {name:"New Songs",type:"Square",genre:"Neww"}];
  return (
    <div className='flex flex-col  gap-3'>
      {secarr.map((elem) => {
        return <div className='flex h-[350px] flex-col gap-3'>
            <div className="top flex justify-between">
                <h2 className='text-white text-2xl font-bold'>{elem.name}</h2>
                <button className='text-white/30 font-bold'>See All</button>
            </div>
            <div className='flex-nowrap'>
                {elem.type === "Square" ? <SquareCard elem={elem}/> : <CircleCard elem={elem}/>}
            </div>
        </div>
      })}
    </div>
  )
}

export default AllSec
