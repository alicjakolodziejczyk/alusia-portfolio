import React, { CSSProperties } from 'react';
import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoFirebase,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoGit,
  BiLogoGithub,
  BiLogoAndroid,
  BiLogoGoogleCloud,
} from 'react-icons/bi';
import { FaBootstrap, FaSwift } from 'react-icons/fa';
import { SiMui } from 'react-icons/si';
import {motion} from 'framer-motion'

const icons = [
  <BiLogoReact />,
  <BiLogoJavascript />,
  <BiLogoTypescript />,
  <BiLogoNodejs />,
  <BiLogoTailwindCss />,
  <BiLogoMongodb />,
  <BiLogoFirebase />,
  <BiLogoHtml5 />,
  <BiLogoCss3 />,
  <BiLogoGit />,
  <BiLogoGithub />,
  <BiLogoAndroid />,
  <BiLogoGoogleCloud />,
  <FaBootstrap />,
  <FaSwift />,
  <SiMui />,
];

function IconsAnimation() {
  const nIcons:number = icons.length;
  const tan: number = Math.tan(Math.PI / nIcons);
  const imageSize: number = 2.25 //em
  const radius: number = imageSize/tan
  const size = radius * 2 + imageSize
  const margin: number = imageSize/2

  // const styles = (i: number) => {
  //   container: {
  //     di
  //   }
  // }

  // `rotate(`+index*22.5+`) translate(`+radius+`) rotate(`+index*-22.5+`)`

  return (
    <motion.div className='relative w-[25vw] h-[25vw] bg-black' transition={{repeat: Infinity, duration: 10}} animate={{ rotate: 360 }}>
      {icons.map((icon, index) => (
        <span key={index} className='absolute top-1/2 left-1/2 text-pink-600 text-3xl' style={{margin: margin+'rem', transform: `rotate(`+index*22.5+`deg) translate(9vw) rotate(`+index*-22.5+`deg)`}}>
          {icon}
        </span>
      ))}
    </motion.div>
  );
}

export default IconsAnimation;

