import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/header.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container.header__container">
        <div className='text-light'>
          <h4>Hello! I'm</h4>
          <h1>Seolhee Kang</h1>
          <h3>Junior Fullstack Developer</h3>
        </div>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header