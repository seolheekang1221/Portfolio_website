import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Seolhee Kang</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolios">Portfolio</a></li>
                <li><a href="#experience">Expeirience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.facebook.com/profile.php?id=100077623054996"><FaFacebookF /></a>
                <a href="https://www.instagram.com/seol_li_k/?hl=ko"><FiInstagram /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy;DESIGNED BY SEOLHEE KANG. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer