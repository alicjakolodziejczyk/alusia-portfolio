import React from 'react'


function NeonPlanets() {
  return (
    <div className='absolute grid grid-cols-3 w-[94vw] pt-36 sm:pt-8 lg:pt-0 lg-0'>
      <img src='../assets/planet-purple.svg' alt='purple planet' className='w-36'/>
      <span></span>
      <img src='../assets/planet-blue.svg' alt='blue planet' className='w-56 w- ml-auto'/>
      <img src='../assets/planet-blue.svg' alt='blue planet' className='w-16 mx-auto'/>
      <img src='../assets/planet-pink.svg' alt='pink planet' className='w-48 mx-auto'/>
      <img src='../assets/planet-purple.svg' alt='purple planet' className='w-24 mx-auto mt-auto'/>
      <img src='../assets/planet-pink.svg' alt='pink planet' className='w-56'/>
      <img src='../assets/planet-purple.svg' alt='purple planet' className='w-12 ml-auto'/>
      <img src='../assets/planet-blue.svg' alt='blue planet' className='w-16 ml-auto my-auto'/>
      
    </div>
  )
}

export default NeonPlanets