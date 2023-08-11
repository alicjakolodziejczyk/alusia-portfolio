import React from 'react'

function NeonPlanetsv2({seeMore}:{seeMore: Boolean}) {
  return (
    <div className='absolute grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[94vw] h-full overflow-hidden'>
      <img src='../assets/planet-purple.svg' alt='purple planet' className='w-36'/>
      <img src='../assets/planet-pink.svg' alt='pink planet' className='w-24 w- ml-auto'/>
      <img src='../assets/planet-blue.svg' alt='blue planet' className='w-56 w- ml-auto'/>
      <img src='../assets/planet-blue.svg' alt='blue planet' className='w-16 mx-auto'/>
      <img src='../assets/planet-pink.svg' alt='pink planet' className='w-48 mx-auto'/>
      <img src='../assets/planet-purple.svg' alt='purple planet' className='w-24 mx-auto mt-auto'/>
      <img src='../assets/planet-pink.svg' alt='pink planet' className='w-56'/>
      <img src='../assets/planet-purple.svg' alt='purple planet' className='w-12 ml-auto'/>
      <img src='../assets/planet-blue.svg' alt='blue planet' className='w-16 ml-auto my-auto'/>
      {seeMore && 
      <><img src='../assets/planet-purple.svg' alt='purple planet' className='w-36' /><img src='../assets/planet-pink.svg' alt='pink planet' className='w-24 w- ml-auto' /><img src='../assets/planet-blue.svg' alt='blue planet' className='w-56 w- ml-auto' /><img src='../assets/planet-blue.svg' alt='blue planet' className='w-16 mx-auto' /><img src='../assets/planet-pink.svg' alt='pink planet' className='w-48 mx-auto' /><img src='../assets/planet-purple.svg' alt='purple planet' className='w-24 mx-auto mt-auto' /><img src='../assets/planet-pink.svg' alt='pink planet' className='w-56' /><img src='../assets/planet-purple.svg' alt='purple planet' className='w-12 ml-auto' /><img src='../assets/planet-blue.svg' alt='blue planet' className='w-16 ml-auto my-auto' /></>}
    </div>
  )
}

export default NeonPlanetsv2