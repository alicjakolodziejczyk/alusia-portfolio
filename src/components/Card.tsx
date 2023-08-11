
import React from 'react'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {Activity} from '../Types'
import {PiCertificateFill} from 'react-icons/pi'

export default function ProjectCard({ activity }: { activity: Activity }) {
  const [readMore, setReadMore] = React.useState(false);
  const {name, description, url, picture, date, certificate} = activity
  console.log(activity)
  return (
    <div className='w-full rounded-xl' style={{background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)'}}>
      <img className='w-full p-4 rounded-lg aspect-[3/2] object-cover' src={picture !== '' ? '/assets/activities/' + picture : '/assets/projects/bussybee.PNG'} alt={name +'project view'}/>
      <h3 className='text-xl font-bold text-white p-4'>{name}</h3>
      <div className='flex justify-end px-4'>
        <p className='text-purple-300 mr-auto'>{date}</p>
        {certificate !== '' && <a href={certificate} className='text-pink-600 hover:text-pink-700 text-2xl px-2'><PiCertificateFill/></a>}
        {url !== '' && <a className='text-pink-600 hover:text-pink-700 text-2xl px-2' href={url}><HiOutlineExternalLink/></a>}
      </div>

      <p className='text-white p-4'>{readMore ? description : description.slice(0,100)}{description.length > 100 && !readMore && "..."} {description.length >=100 && <button className='text-pink-600 hover:text-pink-800 hover:underline' onClick={()=>setReadMore(!readMore)}>{readMore ? "hide" : "read more"}</button>} </p>     
    </div>
  )
}
