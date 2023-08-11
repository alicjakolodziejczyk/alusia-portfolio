import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Activities from '../components/Activities'
import ContactForm from '../components/ContactForm'
import {LuMail} from 'react-icons/lu'
import {FaLinkedin, FaGithub, FaInstagram, FaTiktok} from 'react-icons/fa'
import NeonPlanets from '../components/NeonPlanets'

export default function Home() {
  return (
    <main className="flex min-h-screen portrait:w-screen landscape:w-full flex-col items-center justify-between font-mono bg-[#1a0623]">
      <Navbar />
      <div id='home' className='relative w-full landscape:h-screen portrait:h-[70vh] bg-cover bg-center' style={{ backgroundImage: `url(/assets/coding-girl.jpg)` }}>
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
            <h1 className='landscape:text-7xl portrait:text-5xl text-white p-4 font-GlitchGoblin text-center' style={{textShadow: '#e91e63 0.2rem 0rem, #3993dd -0.2rem 0rem'}}>Hello, I am Ala</h1>
            <h3 className='landscape:text-5xl portrait:text-3xl text-white p-2 font-GlitchGoblin text-center' style={{textShadow: '#e91e63 0.2rem 0rem, #3993dd -0.2rem 0rem'}}>I am a Web and mobile Developer</h3>
          </div>
          <div className='absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent'></div>
        </div> 
        <div className='w-full h-24 bg-gradient-to-b from-black to-transparent'></div>
        
        <div id='about' className='w-full z-10'>
          <h3 className='text-3xl text-white py-4 portrait:px-8 landscape:px-16 font-GlitchGoblin bg-[#1a0623]' style={{textShadow: '#e91e63 0.2rem 0rem, #3993dd -0.2rem 0rem'}}>About me</h3>

          <div className='flex landscape:w-full portrait: px-8 landscape:px-16 py-8' style={{backdropFilter: 'blur(5px)'}}>
            <div className='text-white text-lg landscape:w-1/2 pr-8' >
              <p className='mb-8'>
              I'm a 4th year CS student looking for an opportunity to develop my skills as a web developer or/and mobile developer. 
              I'm a <span className='text-pink-600'>multipotentialite</span>. I am a musician and pastry chef. I am a fast learner. I've learned how to crochet and made my first amigurumi in 2 days. As you can see, I am artistic. But also I love learning languages. I am creative, that's why I enjoy creating web and mobile apps. I am dedicated and passionate about everything I am doing. I am also a problem solver, that's why I'm always persistent in fixing all bugs. Currently, I am reading almost everything about the web, like design, frameworks, and libraries, news in web development, or web3.
              </p>
              <a href="assets\Alicja_Kolodziejczyk_CV.pdf" className='bg-pink-700 hover:bg-pink-800 text-white font-bold rounded-md p-2 mt-8'>View my CV</a>
            </div>
            <div className='landscape:w-1/2 portrait:hidden flex justify-center items-center'>
              <img className='w-1/2' src='/assets/tech-stack.png' alt='tech stack'></img>
            </div>
          </div>
          

        </div>
        <Projects/>
        <Activities/>
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
            <a className='hover:text-pink-600 flex py-1' href='https://www.tiktok.com/@aliceinrealllife?is_from_webapp=1&sender_device=pc'><FaTiktok className='text-xl mr-2'/> Facebook</a>
            </div>

          </div>
          <p className='w-full text-center py-1 text-sm text-purple-300'>&copy; 2023 Alicja Kołodziejczyk</p>
          </footer>
    </main>
  )
}
