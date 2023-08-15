import React from 'react'
import NeonPlanets from './NeonPlanets'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div id='contact' className='portrait: px-8 landscape:px-16 py-8 w-full z-10'>
        <div className='flex justify-end'>
            <h3 className='text-3xl font-bold text-white py-4 mr-auto font-GlitchGoblin' style={{textShadow: '#e91e63 0.2rem 0rem, #3993dd -0.2rem 0rem'}}>Contact</h3>
          </div>
          
          <div className='flex flex-col rounded-md items-center'>
            <br/>
            <p className='text-xl text-pink-600'>Interested in a collab or just want to talk about tech?</p>
            <p className='text-xl text-pink-600'>Feel free to contact me!</p>
            <p className='text-white'>Any advice appreciated.</p>
            <br/>
            
            <NeonPlanets/>
            <ContactForm/>
          </div>
        </div>
  )
}

export default Contact