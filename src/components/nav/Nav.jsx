import React from 'react'
import './nav.css'
import { AiOutlineUser, AiOutlineHome, AiOutlineProject } from 'react-icons/ai'
import { IoMdContact } from 'react-icons/io'
import { MdDesignServices } from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#portfolios" onClick={() => setActiveNav('#portfolios')} className={activeNav === '#portfolios' ? 'active' : ''}><AiOutlineProject /></a>
            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><MdDesignServices /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMdContact /></a>
        </nav>
    )
}

export default Nav