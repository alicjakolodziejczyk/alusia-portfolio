
import React from 'react'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {AiFillGithub} from 'react-icons/ai'
import {Project} from '../Types'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'

export default function ProjectCard({ project }: { project: Project }) {
  const [readMore, setReadMore] = React.useState(false);
  const [seeMore, setSeeMore] = React.useState(false)
  const {name, description, tech, github, url, picture, date} = project
  console.log(project)
  return (
    <div className='w-full rounded-xl' style={{background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)'}}>
      <img className='w-full p-4 rounded-lg' src={picture !== '' ? '/assets/projects/' + picture : '/assets/projects/bussybee.PNG'} alt={name +'project view'}/>
      <h3 className='text-xl font-bold text-white p-4'>{name}</h3>
      <div className='flex justify-end px-4'>
        <p className='text-purple-300 mr-auto'>{date}</p>
        <a href={github} className='text-pink-600 hover:text-pink-700 text-2xl px-2'><AiFillGithub/></a>
        {url !== '' && <a className='text-pink-600 hover:text-pink-700 text-2xl px-2' href={url}><HiOutlineExternalLink/></a>}
      </div>

      <p className='text-white p-4'>{readMore ? description : description.slice(0,100)}{description.length > 100 && !readMore && "..."} {description.length >=100 && <button className='text-pink-600 hover:text-pink-800 hover:underline' onClick={()=>setReadMore(!readMore)}>{readMore ? "hide" : "read more"}</button>} </p>
      <div className={!seeMore ? 'h-10 overflow-hidden pl-4 pr-8 mb-4 relative': 'pl-4 pr-8 mb-4 relative'}>
        <button className='text-white text-xl absolute right-2 h-8 my-1 w-8 rounded-full flex items-center justify-center hover:bg-[rgba(255,255,255,0.05)]' onClick={()=>setSeeMore(!seeMore)}>{seeMore ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</button>
        {tech.map((t: string) => (<span className='inline-block py-1 px-3 m-1 rounded-xl text-pink-600 text-sm border-2 border-pink-600'>{t}</span>))}
      </div>
      
    </div>
  )
}
