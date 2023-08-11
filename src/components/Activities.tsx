import React from 'react'
import Card from './Card'
import { Activity } from '../Types'
import activityData from '../data/activities.json'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import NeonPlanetsv2 from './NeonPlanetsv2'

function Activities() {
  const [seeMore, setSeeMore] = React.useState(false)
  const activities = activityData as Activity[]
  return (
    <div id='activities' className='portrait: px-8 landscape:px-16 py-8 w-full z-10'>
          <div className='flex justify-end w-full'>
            <h3 className='text-3xl font-bold text-white py-4 mr-auto font-GlitchGoblin' style={{textShadow: '#e91e63 0.2rem 0rem, #3993dd -0.2rem 0rem'}}>Achivements and activities</h3>
            <button className='float-right font-semibold hover:opacity-75 p-4'><span className='flex gap-2 items-center text-pink-600' onClick={()=>setSeeMore(!seeMore)}>{seeMore ? 'see less' : 'see more'} {seeMore ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</span> </button>
          </div>

          <div className='relative'>
            <NeonPlanetsv2 seeMore={seeMore}/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8'>
            {activities.slice(0, seeMore ? activities.length : 4).map((activity, index) => (
              <Card key={index} activity={activity} />
            ))}
            </div>
          </div>            
        </div>
  )
}

export default Activities