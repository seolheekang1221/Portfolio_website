import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/seolheekang/" target="_blank"><AiFillLinkedin/></a>
      <a href="https://github.com/seolheekang1221" target="_blank"><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials