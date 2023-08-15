import React from 'react'

function About() {
  return (
    <div id='about' className='w-full z-10'>
          <h3 className='text-3xl text-white py-4 portrait:px-8 landscape:px-16 font-GlitchGoblin bg-[#1a0623]' style={{textShadow: '#e91e63 0.2rem 0rem, #3993dd -0.2rem 0rem'}}>About me</h3>

          <div className='flex landscape:w-full portrait: px-8 landscape:px-16 py-8' style={{backdropFilter: 'blur(5px)'}}>
            <div className='text-white text-lg landscape:w-1/2 pr-8' >
              <p className='mb-8 [&>*]:text-pink-600'>
                I'm 4th grade <span>Computer Science</span> student at Lublin University of Technology 
                as well as member of TeamWeb <span>science club</span>. As a kid I've never thought 
                I'll be interested in tech, cause I've always wanted to be an <span>artist</span>, 
                but I fell in love with it and the possibilities it's giving. 
                I'm mainly into <span>web</span> and <span>mobile</span> apps, as nice design is very 
                satisfying for me. I also enjoy anything about <span>AI</span> as I see many opportunities 
                it may give especially in personalizing user experience as well as making tech more 
                <span>inclusive</span>. That's one of my <span>goals for the future</span> - to develop apps 
                that would be changing accordingly to user's brain type as I believe there's no enough tools 
                that are made for <span>neurodivergent</span> users. I also enjoy reading <span>popscience books</span> 
                and listen to <span>popscience podcasts</span> as I'm <span>knowledge hungry</span>.
                If you'll get to know me I'm sure you'll see how <span>passionate</span> I can get about things I'm interesred in.
                Hope to get in touch soon :)</p>
              <a href="assets\Alicja_Kolodziejczyk_CV.pdf" target='_blank' rel='noreferrer' className='bg-pink-700 hover:bg-pink-800 text-white font-bold rounded-md p-2 mt-8'>View my CV</a>
            </div>
            <div className='landscape:w-1/2 portrait:hidden flex justify-center items-center'>
              <img className='w-1/2' src='/assets/tech-stack.png' alt='tech stack'></img>
            </div>
          </div>
        </div>
  )
}

export default About