import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
function HomeSocials() {
  return (
    <div className='home_socials'>
           <a href="https://linkedin.com" target='_blank'><FaLinkedin /></a>
            <a href="https://github.com/leona144" target='_blank'><FaGithub /></a>
            <a href="https://driblle.com" target='_blank'><FaDribbble /></a>
    </div>
  )
}

export default HomeSocials