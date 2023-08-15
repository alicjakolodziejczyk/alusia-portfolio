import React from 'react'
import { LuMail } from 'react-icons/lu'
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='text-white w-full bg-black flex flex-col py-2 justify-center'>
          <div className='flex justify-center w-full portrait:flex-col'>
            <div className='landscape:w-1/2 pt-8 flex flex-col items-center'>
              <h3 className='py-4 text-pink-600'>say hello :)</h3>
              <a className='hover:text-pink-600 flex py-1' href='mailto:alicja.kolodziejczyk.01@gmail.com'><LuMail className='text-xl mr-2'/> alicja.kolodziejczyk.01@gmail.com</a>
              <a className='hover:text-pink-600 flex py-1' href='https://www.linkedin.com/in/alicja-ko%C5%82odziejczyk-155a64206/'><FaLinkedin className='text-xl mr-2'/> LinkedIn</a>
            </div>
            <div className='landscape:w-1/2 py-8 flex flex-col items-center'>
            <h3 className='py-4 text-pink-600'>you'll find me there</h3>
            <a className='hover:text-pink-600 flex py-1' href='https://github.com/alicjakolodziejczyk'><FaGithub className='text-xl mr-2'/> Github</a>
            <a className='hover:text-pink-600 flex py-1' href='https://www.instagram.com/aliceinreallife/'><FaInstagram className='text-xl mr-2'/> Instagram</a>
            <a className='hover:text-pink-600 flex py-1' href='https://www.tiktok.com/@aliceinrealllife?is_from_webapp=1&sender_device=pc'><FaTiktok className='text-xl mr-2'/> TikTok</a>
            </div>

          </div>
          <p className='w-full text-center py-1 text-sm text-purple-300'>&copy; 2023 Alicja Kołodziejczyk</p>
          </footer>
  )
}

export default Footer