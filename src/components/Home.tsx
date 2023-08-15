import React from 'react'

function Home() {
  return (
    <>
    <div id='home' className='relative w-full landscape:h-screen portrait:h-[70vh] bg-cover bg-center' style={{ backgroundImage: `url(/assets/coding-girl.jpg)` }}>
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
            <h1 className='landscape:text-7xl portrait:text-5xl text-white p-4 font-GlitchGoblin text-center' style={{textShadow: '#e91e63 0.2rem 0rem, #3993dd -0.2rem 0rem'}}>Hello, I am Ala</h1>
            <h3 className='landscape:text-5xl portrait:text-3xl text-white p-2 font-GlitchGoblin text-center' style={{textShadow: '#e91e63 0.2rem 0rem, #3993dd -0.2rem 0rem'}}>I am a Web and mobile Developer</h3>
          </div>
          <div className='absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent'></div>
        </div> 
        <div className='w-full h-24 bg-gradient-to-b from-black to-transparent'></div>
        </>
  )
}

export default Home